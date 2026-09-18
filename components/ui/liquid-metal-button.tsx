"use client";

import React, { useEffect, useRef } from "react";

export interface LiquidMetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  viewMode?: "text" | "icon";
  className?: string;
}

export function LiquidMetalButton({
  label = "Explore Bine",
  onClick,
  viewMode = "text",
  className = "",
  ...props
}: LiquidMetalButtonProps) {
  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<{
    destroy: () => void;
  } | null>(null);

  useEffect(() => {
    const styleId = "liquid-metal-button-styles";
    if (!import.meta && !document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 9999px !important;
          pointer-events: none !important;
          opacity: 0.85 !important;
          filter: hue-rotate(280deg) saturate(1.8) brightness(1.1) !important;
        }
      `;
      document.head.appendChild(style);
    }

    const loadShader = async () => {
      try {
        const { liquidMetalFragmentShader, ShaderMount } = await import(
          "@paper-design/shaders"
        );
        if (shaderRef.current) {
          if (shaderMount.current?.destroy) {
            shaderMount.current.destroy();
          }
          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.6,
              u_shiftBlue: 0.9,
              u_distortion: 0.2,
              u_contour: 0.1,
              u_angle: 45,
              u_scale: 8,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            0.6
          );
        }
      } catch (error) {
        console.error("[Bine AI] Failed to load shader:", error);
      }
    };

    loadShader();

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
      }
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 shadow-xl hover:shadow-pink-500/30 group ${className}`}
      ...props
    >
      <div
        ref={shaderRef}
        className="shader-container-exploded absolute inset-0 z-0 bg-gradient-to-r from-slate-900 via-pink-950 to-slate-900"
      />
      <span className="relative z-10 flex items-center gap-2">
        <span>{label}</span>
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1 text-pink-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
}
