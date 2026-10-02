import type { EpisodeCardProps } from "../../types";

function EpisodeCard({ episode, active, onClick }: EpisodeCardProps) {
  return (
    <button
      dir="ltr"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl p-2 ${
        active ? "bg-nav-active-bg" : "hover:bg-nav-hover-bg"
      }`}
    >
      <img
        src={episode.thumbnailUrl}
        alt=""
        className="h-12 w-16 rounded-lg object-cover"
      />
      <span className="text-text-primary flex-1 text-left text-sm">
        {episode.title}
      </span>
      {active && <span className="text-primary">✓</span>}
    </button>
  );
}

export default EpisodeCard;
