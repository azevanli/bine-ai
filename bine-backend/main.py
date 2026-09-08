import os
import asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import AsyncOpenAI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY"),
)

class PromptRequest(BaseModel):
    prompt: str

async def fetch_llm(model_id: str, prompt: str):
    """Sends prompt to an individual AI model with a fallback safety net."""
    try:
        response = await client.chat.completions.create(
            model=model_id,
            messages=[{"role": "user", "content": prompt}],
            timeout=20
        )
        return response.choices[0].message.content
    except Exception as e:
        # Fallback if primary model endpoint fails
        try:
            fallback_res = await client.chat.completions.create(
                model="openai/gpt-4o-mini",
                messages=[{"role": "user", "content": prompt}],
                timeout=15
            )
            return fallback_res.choices[0].message.content
        except Exception:
            return f"[Model {model_id} unavailable]: {str(e)}"

@app.post("/api/synthesize")
async def synthesize(req: PromptRequest):
    user_prompt = req.prompt
    if not user_prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")

    # 1. Query 3 models in parallel using standard OpenRouter model slugs
    gpt_task = fetch_llm("openai/gpt-4o", user_prompt)
    claude_task = fetch_llm("anthropic/claude-3.5-sonnet:beta", user_prompt)
    gemini_task = fetch_llm("google/gemini-2.0-flash-001", user_prompt)

    gpt_res, claude_res, gemini_res = await asyncio.gather(gpt_task, claude_task, gemini_task)

    # 2. Feed all outputs into the synthesis step
    fusion_meta_prompt = f"""
    The user asked: "{user_prompt}"

    Below are outputs from 3 different AI models:
    ---
    RESPONSE A (ChatGPT):
    {gpt_res}
    ---
    RESPONSE B (Claude):
    {claude_res}
    ---
    RESPONSE C (Gemini):
    {gemini_res}
    ---

    TASK:
    Synthesize these into one cohesive, master response.
    1. Extract facts from Gemini, smooth writing/logic from Claude, and structural formatting from ChatGPT.
    2. Eliminate fluff, duplicated intros, or conflicting statements.
    3. Output ONLY the combined answer.
    """

    try:
        blended_response = await client.chat.completions.create(
            model="openai/gpt-4o",  # Using GPT-4o as the aggregator model
            messages=[{"role": "user", "content": fusion_meta_prompt}]
        )
        final_text = blended_response.choices[0].message.content
    except Exception as err:
        # If aggregator fails, return concatenated outputs cleanly
        final_text = f"**Synthesized Output:**\n\n{gpt_res}\n\n---\n\n{claude_res}"

    return {
        "synthesized": final_text
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
