import { useRef, useState, useCallback, useEffect } from "react";
import beforeImg from "@/assets/before-empty.png";
import afterImg from "@/assets/after-vibrant.png";

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => dragging.current && updateFromClientX(e.clientX);
    const onTouch = (e: TouchEvent) => dragging.current && e.touches[0] && updateFromClientX(e.touches[0].clientX);
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-card select-none"
      onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; e.touches[0] && updateFromClientX(e.touches[0].clientX); }}
    >
      {/* AFTER (background) */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-google-blue/10 via-google-yellow/10 to-google-green/10">
        <img src={afterImg} alt="Empresa encontrada" className="h-full w-full object-contain p-8" draggable={false} />
        <span className="absolute bottom-4 right-4 rounded-full bg-google-green px-3 py-1 text-xs font-semibold text-white shadow">COM LOCALWAY</span>
      </div>

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0 grid place-items-center bg-muted"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={beforeImg} alt="Empresa invisível" className="h-full w-full object-contain p-8 grayscale" draggable={false} />
        <span className="absolute bottom-4 left-4 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background shadow">SEM LOCALWAY</span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white border-2 border-google-blue shadow-lg cursor-ew-resize">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-google-blue" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 6 15 12 9 18" transform="translate(0,0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
