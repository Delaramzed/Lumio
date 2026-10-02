import { useState } from "react";
import VideoPlayer from "../components/watch/VideoPlayer";
import EpisodeInfo from "../components/watch/EpisodeInfo";
import EpisodePanel from "../components/watch/EpisodePanel";
import type { Episode } from "../types";

const episodes: Episode[] = [
  {
    id: "1",
    number: 1,
    title: "Episode 01",
    thumbnailUrl: "/images/dune.jpg",
    duration: 50,
    season: 1,
  },
  {
    id: "2",
    number: 2,
    title: "Episode 02",
    thumbnailUrl: "/images/dune.jpg",
    duration: 52,
    season: 1,
  },
];

function WatchPage() {
  const [activeId, setActiveId] = useState("1");
  const active = episodes.find((episode) => episode.id === activeId);

  return (
    <main className="dark bg-background min-h-screen md:ml-64">
      <div dir="ltr" className="grid gap-5 p-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-5">
          <VideoPlayer />
          {active && <EpisodeInfo episode={active} onNext={() => {}} />}
        </div>
        <EpisodePanel
          episodes={episodes}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>
    </main>
  );
}

export default WatchPage;
