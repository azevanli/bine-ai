'use client';

import { useEffect } from 'react';

export default function AnimationPage() {
  useEffect(() => {
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

    const style = document.createElement('style');
    style.textContent = `
      #unicorn-bg-layer,
      #unicorn-bg-layer *,
      [data-us-project],
      [data-us-project] * {
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
    <div
      id="unicorn-bg-layer"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden"
    >
      <div
        data-us-project="OMzqyUv6M3kSnv0JeAtC"
        className="h-full w-full min-h-screen pointer-events-none"
        style={{ width: '100%', height: '100%', minHeight: '100vh', pointerEvents: 'none' }}
      />
    </div>
  );
}
