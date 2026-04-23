"use client";

import { useEffect, useRef } from "react";

export default function HeartbeatLine() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
  }, []);

  // The heartbeat waveform: flat → sharp spike up → deep dip → recovery → flat
  // Repeated twice across a wide viewport for seamless looping
  const beat =
    "M0,50 L80,50 L90,50 L95,20 L100,50 L103,50 L106,10 L112,90 L118,35 L124,55 L130,50 L210,50";
  const beat2 =
    "M210,50 L290,50 L300,50 L305,20 L310,50 L313,50 L316,10 L322,90 L328,35 L334,55 L340,50 L420,50";

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[18%] sm:bottom-[20%] flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 420 100"
        preserveAspectRatio="none"
        className="w-full max-w-5xl h-16 sm:h-20"
        aria-hidden="true"
      >
        {/* Glow filter */}
        <defs>
          <filter id="heartbeat-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint static trace */}
        <path
          d={`${beat} ${beat2.replace("M210,50 ", "")}`}
          fill="none"
          stroke="rgba(212,168,67,0.1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated heartbeat line */}
        <path
          ref={pathRef}
          d={`${beat} ${beat2.replace("M210,50 ", "")}`}
          fill="none"
          stroke="#D4A843"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#heartbeat-glow)"
          className="animate-heartbeat"
        />
      </svg>
    </div>
  );
}
