import React from "react";
import CollageDiamond from "./collage-diamond";

export default function HeroCollage() {
  return (
    <div className="relative w-full aspect-[1.05] select-none">
      {/* Diamond 1: Top-Left — Teal */}
      <CollageDiamond
        src="/hero-meeting.png"
        alt="Team collaboration in a modern office"
        className="top-[12%] left-[2%] w-[30%] aspect-square"
        color="#14b8a6"
      />

      {/* Diamond 2: Top-Right — Orange/Coral */}
      <CollageDiamond
        src="/hero-man-orange.png"
        alt="African developer using smartphone at night"
        className="top-[0%] left-[50%] w-[30%] aspect-square"
        color="#f97316"
      />

      {/* Diamond 3: Center — Purple/Magenta */}
      <CollageDiamond
        src="/hero-handshake.png"
        alt="Corporate handshake representing trust and partnership"
        className="top-[26%] left-[26%] w-[30%] aspect-square z-10"
        color="#d946ef"
      />

      {/* Diamond 4: Center-Right — Royal Blue/Cyan */}
      <CollageDiamond
        src="/hero-office-smile.png"
        alt="Smiling financial systems developer in bright office"
        className="top-[18%] left-[70%] w-[30%] aspect-square"
        color="#0ea5e9"
      />

      {/* Diamond 5: Bottom-Left — Mint/Emerald */}
      <CollageDiamond
        src="/hero-presentation.png"
        alt="Business analytics dashboard presentation in boardroom"
        className="top-[50%] left-[2%] w-[30%] aspect-square"
        color="#10b981"
      />

      {/* Diamond 6: Bottom-Right — Deep Violet */}
      <CollageDiamond
        src="/hero-team-discussion.png"
        alt="Financial team planning and strategy meeting"
        className="top-[44%] left-[50%] w-[30%] aspect-square"
        color="#8b5cf6"
      />
    </div>
  );
}
