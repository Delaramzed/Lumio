import { useState } from "react";
import VideoControls from "./VideoControls";

function VideoPlayer() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="bg-surface-secondary relative aspect-video overflow-hidden rounded-2xl">
      <img
        src="/images/dune.jpg"
        alt="Dune: Part Two"
        className="h-full w-full object-cover"
      />
      <div className="bg-overlay absolute inset-0" />

      <h2 className="absolute top-4 left-4 font-medium text-white">
        Dune: Part Two
      </h2>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="h-1 rounded-full bg-white/25">
          <div className="bg-primary h-1 w-1/4 rounded-full" />
        </div>
        <VideoControls
          playing={playing}
          onToggle={() => setPlaying(!playing)}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
