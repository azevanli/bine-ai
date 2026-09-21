import os, subprocess

code = '''"use client";

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
      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 9999px !important;
          pointer-events: non          pointer-events: nonty          pointer-ev             pointer-evtate(          pointer-events: non          pointeant;
                                        ppe                                        de                {
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
              u_re              u_re                      u_re                        u_re              u_re      Bl              u_re            rtio              u_re            r: 0.              u_re              u_          u_scale: 8,
              u_shape: 1,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            undefined,
: -0.1,
 u_re                      u_re                        u_re              u_re      Bl              u_re            rtio     (); u_re                      u_re                        u_re              u_re      Bl              u_
            }            }            }            }            }            }     sNa            }            }    s-ce         if            }            }    ed-            }            }            }     wh            }            }            }ow-xl hover:shad            }            }            }         <div
        ref={shaderRef}
                                       lod            in                                       lod            in                                       lod            in                                       lod            in                                       lod            in             p-hover:translate-x-1 text-pin                            
          stroke="currentColor"
          strok          strok      viewBox="0 0 24 24"
                                                                                                                                                                                                                                                open(filePath, "w", encoding="utf-8") as f:
    f.write(code)

print("Component written successfully!")
