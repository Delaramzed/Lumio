import { useState } from "react";
import EpisodeCard from "./EpisodeCard";
import type { EpisodePanelProps } from "../../types";

function EpisodePanel({ episodes, activeId, onSelect }: EpisodePanelProps) {
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <aside dir="rtl" className="bg-surface rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-text-primary font-bold">قسمت‌ها</h2>
        <button className="text-text-secondary">✕</button>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            active={activeId === episode.id}
            onClick={() => onSelect(episode.id)}
          />
        ))}
      </div>

      <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
        <span className="text-text-secondary text-sm">
          پخش خودکار قسمت بعدی
        </span>
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`h-6 w-11 rounded-full p-1 ${
            autoPlay ? "bg-primary" : "bg-neutral-5"
          }`}
        >
          <span
            className={`block h-4 w-4 rounded-full bg-white transition ${
              autoPlay ? "-translate-x-5" : ""
            }`}
          />
        </button>
      </div>
    </aside>
  );
}

export default EpisodePanel;
