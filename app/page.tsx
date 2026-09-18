import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-24">
      <h1 className="text-4xl font-bold text-white mb-8">Bine AI</h1>
      
      <LiquidMetalButton 
        label="Explore Bine" 
        onClick={() => alert("Liquid Metal Button Clicked!")} 
      />
    </main>
  );
}
