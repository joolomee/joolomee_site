'use client';
/**
 * Decorative, CSS-only SVG. Static — no scroll listeners, no rAF.
 * Positioned as a thin aside on desktop, absolute (not fixed) to avoid
 * blocking paint and composite on every scroll frame.
 */
export default function YarnStoryline() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden lg:block">
      <svg
        viewBox="0 0 200 3600"
        preserveAspectRatio="none"
        className="absolute top-0 left-[3vw] w-[120px] h-full opacity-[0.35]"
      >
        <defs>
          <linearGradient id="yarn-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF4D8F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C73666" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M 100 0 C 160 200, 40 380, 100 560 C 160 740, 40 920, 100 1100 C 160 1280, 40 1460, 100 1640 C 160 1820, 40 2000, 100 2180 C 160 2360, 40 2540, 100 2720 C 160 2900, 40 3080, 100 3260 C 160 3440, 100 3560, 100 3600"
          fill="none"
          stroke="url(#yarn-grad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
