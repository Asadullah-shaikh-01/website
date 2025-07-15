// components/ui/spotlight.tsx

import React from "react";
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={cn("pointer-events-none absolute opacity-10", className)}
      width="800"
      height="800"
      viewBox="0 0 800 800"
      fill="none"
    >
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill} stopOpacity="1" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="400" fill="url(#gradient)" />
    </svg>
  );
}
