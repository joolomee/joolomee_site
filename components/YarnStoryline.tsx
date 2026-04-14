'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * A scroll-linked pink yarn thread that unfurls down the entire page.
 * Fixed full-height SVG on the left gutter; pathLength animates with scroll.
 */
export default function YarnStoryline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.4 });
  const pathLength = useTransform(smooth, [0, 1], [0, 1]);
  const opacity = useTransform(smooth, [0, 0.02, 0.95, 1], [0, 1, 1, 0.4]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
    >
      <svg viewBox="0 0 200 2000" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="yarn-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF4D8F" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FF7AA9" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C73666" stopOpacity="0.9" />
          </linearGradient>
          <filter id="yarn-blur"><feGaussianBlur stdDeviation="0.6" /></filter>
        </defs>
        <motion.path
          d="M 100 0
             C 140 120, 60 200, 100 320
             C 140 420, 40 500, 90 620
             C 140 740, 60 820, 110 940
             C 150 1060, 50 1140, 100 1260
             C 150 1360, 60 1460, 100 1580
             C 140 1700, 60 1800, 100 2000"
          fill="none"
          stroke="url(#yarn-grad)"
          strokeWidth="1.6"
          strokeLinecap="round"
          filter="url(#yarn-blur)"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  );
}
