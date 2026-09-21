import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "components", "ui", "liquid-metal-button.tsx");

const code = `"use client";

import React, { useEffect, useRef } from "react";

export interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function LiquidMetalButton({
  label = "Explore Bine",
  onClick,
  className = "",
}: LiquidMetalButtonProps) {
  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    const styleId = "liquid-metal-button-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = \`
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !import          height: 1lay: block          height: 1            height: 100!imp          height: 100% !import    t;
                                                               im                                                               im                 tant;                         tate(280deg) saturate(1.8) brightness(1.1) !important;
        }
      \`;
      document.head.appendChild(style);
    }

    const loadShader = async () => {
                                       Fr                      unt           i                 "                                                                    Fr       if                                       Fr                      unt estroy();
          }
          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.6,
              u_shiftB              u_shif    u_distorti              u_shiftB              u_shif    u_distorti        ,
              u_scale: 8,
              u_shape: 1,
              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              u_offsetX:              ()       ret        > {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
      }
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className={\`relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 shadow-xl hover:sha      className={\`relative inline-flex items-c        className={\`relativeef}
        className="shader-container-exp        colute inset-0 z-0 bg-gradient-to-r f        className="shader-coo-s        className="shader-conn         className="shader-container-exp        colute inset-0 z-0 bg-gradient-to-r f        className="shader-coo-s     4         className="shgroup       translate-x-1 text-        className="shader-container-exp        colute inset-0 z-0 bg-gradient-to-r f        className="shader-coo-s        className="shader-conn         className="shader-container-exp        colute inset-0 z-0 bg-gradient-to-r f        className="shader-coo-s     4       onso        className="shader-container-eal-button.tsx!");
