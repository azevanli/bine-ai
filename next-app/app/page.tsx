'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 1. Inject UnicornStudio script
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      (function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head||document.body).appendChild(i)
        }
      })();
    `;
    document.head.appendChild(embedScript);

    // 2. Hide watermarks and prevent canvas from intercepting button clicks
    const style = document.createElement('style');
    style.textContent = `
      #bg-canvas-wrapper,
      #bg-canvas-wrapper canvas,
      [data-us-project],
      [data-us-project] canvas {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(embedScript)) document.head.removeChild(embedScript);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white select-none">
      {/* 1. Background Animation Canvas Layer */}
      <div
        id="bg-canvas-wrapper"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      >
        <div
          data-us-project="OMzqyUv6M3kSnv0JeAtC"
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {/* Mobile stars background */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full lg:hidden stars-bg"></div>

      {/* 2. Top Header */}
      <header className="relative z-30 w-full border-b border-white/20">
        <div className="container mx-auto px-4 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="font-mono text-white text-xl lg:text-2xl font-bold tracking-widest italic transform -skew-x-12">
              BINE AI
            </div>
            <div className="h-3 lg:h-4 w-px bg-white/40"></div>
            <span className="text-white/60 text-[8px] lg:text-[10px] font-mono">EST. 2026</span>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[10px] font-mono text-white/60">
            <span>SYS.ACTIVE</span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>LAT: 37.7749°</span>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <span>LONG: 122.4194°</span>
          </div>
        </div>
      </header>

      {/* 3. Corner Frame Accents */}
      <div className="pointer-events-none absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-white/30 z-20"></div>
      <div className="pointer-events-none absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-white/30 z-20"></div>
      <div className="pointer-events-none absolute left-0 bottom-12 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-white/30 z-20"></div>
      <div className="pointer-events-none absolute right-0 bottom-12 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-white/30 z-20"></div>

      {/* 4. Main Hero Content Layout */}
      <div className="relative z-30 flex min-h-[calc(100vh-140px)] items-center justify-end px-6 lg:px-16 lg:pr-[10%]">
        <div className="w-full max-w-lg lg:ml-auto">
          {/* Top decorative line */}
          <div className="flex items-center gap-2 mb-3 opacity-60">
            <div className="w-8 h-px bg-white"></div>
            <span className="text-white text-[10px] font-mono tracking-wider">∞</span>
            <div className="flex-1 h-px bg-white"></div>
          </div>

          {/* Title */}
          <div className="relative">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight font-mono tracking-wider"
              style={{ letterSpacing: '0.1em' }}
            >
              BINE AI
            </h1>
          </div>

          {/* Decorative dots pattern */}
          <div className="hidden lg:flex gap-1 mb-3 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Description */}
          <div className="relative">
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 mb-6 leading-relaxed font-mono opacity-80">
              Multi-Model LLM Aggregator &amp; Synthesis Platform. Orchestrate queries across frontier AI models, stream side-by-side responses, and synthesize consensus intelligence in real-time.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pointer-events-auto">
            <button
              onClick={() => alert("Launching Bine...")}
              className="cursor-pointer relative px-6 py-2.5 bg-transparent text-white font-mono text-xs lg:text-sm border border-white hover:bg-white hover:text-black transition-all duration-200 group text-center"
            >
              <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              EXPLORE BINE
            </button>

            <a
              href="https://github.com/azevanli"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer relative px-6 py-2.5 bg-transparent border border-white text-white font-mono text-xs lg:text-sm hover:bg-white hover:text-black transition-all duration-200 text-center"
            >
              DOCUMENTATION
            </a>
          </div>

          {/* Bottom technical notation */}
          <div className="hidden lg:flex items-center gap-2 mt-6 opacity-40">
            <span className="text-white text-[9px] font-mono">∞</span>
            <div className="flex-1 h-px bg-white"></div>
            <span className="text-white text-[9px] font-mono">BINE.SYNTHESIS.PROTOCOL</span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Status Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/20 bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span>SYSTEM.ONLINE</span>
            <span>V1.0.0</span>
          </div>

          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono text-white/50">
            <span>◐ RENDERING</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span>FRAME: ∞</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .stars-bg {
          background-image:
            radial-gradient(1px 1px at 20% 30%, white, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent);
          background-size: 200% 200%;
          opacity: 0.3;
        }
      `}</style>
    </main>
  );
}
