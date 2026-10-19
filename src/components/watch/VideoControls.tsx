import type { VideoControlsProps } from "../../types";

function VideoControls({ playing, onToggle }: VideoControlsProps) {
  return (
    <div className="mt-3 flex items-center gap-4 text-white">
      <button>⏮</button>
      <button
        onClick={onToggle}
        className="bg-primary text-on-primary flex h-10 w-10 items-center justify-center rounded-full"
      >
        {playing ? "⏸" : "▶"}
      </button>
      <button>⏭</button>
      <span className="text-xs">42:17 / 166:00</span>
    </div>
  );
}

export default VideoControls;
