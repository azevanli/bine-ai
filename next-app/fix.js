const fs = require("fs");
const path = require("path");

const targetFile = path.join(__dirname, "components", "ui", "liquid-metal-button.tsx");

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
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
                            ;
                              x !                              x !                              x !          5 !important;                       rotate                              x !             ant;
        }
      \`;
      document.head.ap      documtyle);
    }

    const loadShader = async () => {
      try {
        const { liquidMetalFragmentShader, ShaderMount } = await import(
          "@paper-design/shaders"
        );
        if (shaderRef.current) {
          if          if          if          if          if  erMount.current.dest          if     }
          shaderMount.current = new ShaderMount(
                                             qu                                             qu    u_                             u_softness: 0.5,
              u_shiftRed: 0.6,
              u_shiftBlue: 0.9,
              u_distortion: 0.2,
              u_contour: 0.1,
              u_angle: 45,
              u_scale: 8,
              u_shape              u_shapeoffsetX:              u_shape       Y:              u_shape              u_shapeoffsetX:              u_shape       Y:              u_shape              u_shapeoffsetX:              u_shape       Y:              u_shape              u_shr()       ret        >               u_shape              u_roy) {
                                      
            };
  }, []);

  return (
    <button
      onClick={onClick}
      className={\`relative inline-flex items-c      clsti      className={\-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 shadow-xl hover:shadow-pink-500/30 group \${className}\`}
    >
                                                                                                                                               50 to-slate-900"
      />
      <span className="relative z-10 flex items-center gap-2">
        <span>{label}</span>
        <svg
          className="w-4 h-4 transition-transform group          className="w-4 h-4 transition-transform group          className="w-4 h-4 transition-transform group          className="w-4 h-4 transition-transform group          className="w-4 h-4 transition-transform group          className="w-4 h-4 transition-transform group          className="w-4 h-4 transition-transform group          clasetFile);
