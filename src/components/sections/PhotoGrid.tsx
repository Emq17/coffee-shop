import { useEffect, useRef } from "react";

type Photo = { src: string; alt: string };

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dirRef = useRef<1 | -1>(1);

  // Keep our own float position (iOS Safari can round scrollLeft)
  const posRef = useRef(0);

  // Desktop hover speed tuning
  const baseSpeedRef = useRef(2.2);
  const maxBoostRef = useRef(2.8);
  const speedRef = useRef(baseSpeedRef.current);

  // Touch detection
  const isTouchRef = useRef(false);

  // Track whether the user is actually swiping the row horizontally
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalGestureRef = useRef(false);
  const pausedByUserRef = useRef(false);

  function stopAuto() {
    const el = rowRef.current;
    if (el) posRef.current = el.scrollLeft;
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }

  // Desktop: hover auto-scroll, stops at edges (no looping)
  function startAutoDesktop() {
    stopAuto();

    const tick = () => {
      const el = rowRef.current;
      if (!el) return;

      const max = el.scrollWidth - el.clientWidth;

      if (max <= 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const next = el.scrollLeft + speedRef.current * dirRef.current;

      if (dirRef.current === 1) {
        if (el.scrollLeft >= max - 1) {
          el.scrollLeft = max;
          stopAuto();
          return;
        }
        el.scrollLeft = Math.min(max, next);
      } else {
        if (el.scrollLeft <= 0) {
          el.scrollLeft = 0;
          stopAuto();
          return;
        }
        el.scrollLeft = Math.max(0, next);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }

  /**
   * Mobile: always-on auto-scroll, bounces at edges.
   * NEW: if startFromEnd is true, it jumps to the last image and starts moving right->left.
   */
  function startAutoMobile(opts?: { startFromEnd?: boolean }) {
    // If already running, don’t restart (prevents iOS “resize while scrolling” resets)
    if (rafRef.current != null) return;

    // tune mobile speed here (>= 1px is safest for iOS)
    speedRef.current = 1.25;

    const el = rowRef.current;

    // If we want to start from the end, we may need to wait until it’s scrollable
    if (opts?.startFromEnd && el) {
      const max = el.scrollWidth - el.clientWidth;

      if (max <= 0) {
        // keep alive until scrollable (images/layout ready)
        rafRef.current = requestAnimationFrame(() => startAutoMobile(opts));
        return;
      }

      // jump to end and start moving right -> left
      el.scrollLeft = max;
      posRef.current = max;
      dirRef.current = -1;
    } else if (el) {
      posRef.current = el.scrollLeft;
    }

    const tick = () => {
      const el2 = rowRef.current;
      if (!el2) return;

      const max = el2.scrollWidth - el2.clientWidth;

      // keep alive until scrollable (images/layout ready)
      if (max <= 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      posRef.current += speedRef.current * dirRef.current;

      // bounce
      if (posRef.current >= max) {
        posRef.current = max;
        dirRef.current = -1;
      } else if (posRef.current <= 0) {
        posRef.current = 0;
        dirRef.current = 1;
      }

      el2.scrollLeft = Math.round(posRef.current);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isTouchRef.current) return;

    const el = rowRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;

    dirRef.current = pct < 0.5 ? -1 : 1;

    const edgeStrength = Math.min(1, Math.abs(pct - 0.5) / 0.5);
    speedRef.current = baseSpeedRef.current + maxBoostRef.current * edgeStrength;
  }

  // --- Touch handlers: pause/resume ONLY for horizontal swipes on the row ---
  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    if (!isTouchRef.current) return;
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
    isHorizontalGestureRef.current = false;
    pausedByUserRef.current = false;
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!isTouchRef.current) return;
    const start = touchStartRef.current;
    if (!start) return;

    const t = e.touches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    // Decide gesture direction with a small threshold
    const TH = 6;

    // If we haven't decided yet, decide now
    if (!isHorizontalGestureRef.current) {
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      // Horizontal swipe intent
      if (absX > absY + TH) {
        isHorizontalGestureRef.current = true;

        // Pause auto-scroll so it doesn't fight the user's swipe
        if (rafRef.current != null) {
          stopAuto();
          pausedByUserRef.current = true;
        }
      } else if (absY > absX + TH) {
        // Vertical scroll intent: do NOTHING
      }
    }
  }

  function onTouchEnd() {
    if (!isTouchRef.current) return;

    // Only resume if we paused due to a horizontal swipe on the row
    if (pausedByUserRef.current) {
      // allow restart
      rafRef.current = null;
      startAutoMobile(); // keep whatever direction it currently had
    }

    touchStartRef.current = null;
    isHorizontalGestureRef.current = false;
    pausedByUserRef.current = false;
  }

  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const mqTouch = window.matchMedia?.("(hover: none), (pointer: coarse)");

    const computeIsTouch = () => {
      const byMQ = mqTouch?.matches ?? false;
      const byPoints = (navigator as any).maxTouchPoints > 0;
      const byOntouch = "ontouchstart" in window;
      return byMQ || byPoints || byOntouch;
    };

    const setModeAndMaybeStart = () => {
      const nextIsTouch = computeIsTouch();
      const changed = nextIsTouch !== isTouchRef.current;
      isTouchRef.current = nextIsTouch;

      if (prefersReduced) {
        stopAuto();
        return;
      }

      // If we switch modes, stop the current RAF.
      if (changed) stopAuto();

      // Mobile: start immediately if not already running
      if (isTouchRef.current) {
        if (rafRef.current == null) startAutoMobile({ startFromEnd: true }); // ✅ start from last + move right->left
      }
      // Desktop: starts on hover only
    };

    setModeAndMaybeStart();

    if (mqTouch?.addEventListener) mqTouch.addEventListener("change", setModeAndMaybeStart);

    window.addEventListener("resize", setModeAndMaybeStart);

    return () => {
      if (mqTouch?.removeEventListener) mqTouch.removeEventListener("change", setModeAndMaybeStart);
      window.removeEventListener("resize", setModeAndMaybeStart);
      stopAuto();
    };
  }, []);

  return (
    <section style={{ marginTop: 18 }}>
      <div
        ref={rowRef}
        className="ppRow"
        aria-label="Photo gallery"
        // Desktop hover behavior
        onMouseEnter={() => {
          if (!isTouchRef.current) startAutoDesktop();
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          if (!isTouchRef.current) stopAuto();
        }}
        // Mobile: only react to horizontal swipes on the row
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        {photos.map((p) => (
          <div key={p.src} className="ppCard">
            <img src={p.src} alt={p.alt} className="ppImg" loading="lazy" />
          </div>
        ))}
      </div>

      <style>{`
        .ppRow{
          display: flex;
          gap: 12px;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 6px 2px 10px;
          -webkit-overflow-scrolling: touch;

          scrollbar-width: none;

          /* allow horizontal pan inside row; vertical scroll still works on page */
          touch-action: pan-x;

          mask-image: linear-gradient(to right, transparent, black 7%, black 93%, transparent);
        }
        .ppRow::-webkit-scrollbar{ display:none; }

        .ppCard{
          flex: 0 0 auto;
          width: 78vw;
          max-width: 420px;
          border-radius: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
          background: rgba(18,24,36,0.35);
        }

        @media (min-width: 900px){
          .ppCard{ width: 340px; }
        }

        .ppImg{
          width: 100%;
          height: auto;
          display: block;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
