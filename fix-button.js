const fs = require("fs");
const path = require("path");

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
          height: 100% !important;
          display: block !important;
          position: absolute !important;
                                                                                           !im                                                                                 rtant;                       rotate                                 (1.1) !important;
                                       .ap                ;
    }

    const loadShader = async () => {
      try {
        const { liquidMetalFr        const { liquidunt } = await import(
          "          "          "                 "          "          "               if          "          "          "                 "          "     estroy();
          }
          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liqu            liqu            liqu            liqu   u_            liqu                      liqu                  u_shiftRed: 0.6,
              u_shiftB              u_shiftB          ti              u_shiftB  _contour: 0              u_shiftB                       u_scale: 8,
              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape              u_shape     er();

    return () => {
      if (shaderMount.current?.destroy             if (shaderMount.current?.des;
            }            }            }            }            }            }      Na            }            }            }            }            }            }      Na            }            }            }            }            }            } w-          hadow-pink-500/30 group \${className}\`}
    >
                              Ref}
                              Ref}
   }            }            }            }      Na            }            }            }            }     an    }            }            }            }      Na            }            }            }            }     an    }            }            }     up-hover:translate-x-1 text-pink-300"
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
`;

fs.writeFileSync(filePath, code, "utf8");
console.log("Successfully updated liquid-metal-button.tsx!");
