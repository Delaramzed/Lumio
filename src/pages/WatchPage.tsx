import { useState } from "react";
import {
  Captions,
  Check,
  ChevronLeft,
  Maximize,
  Pause,
  Play,
  Repeat,
  Settings,
  Share2,
  SkipBack,
  SkipForward,
  Star,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const movie = {
  title: "Dune: Part Two",
  year: "۲۰۲۴",
  duration: "۱۶۶ دقیقه",
  rating: "8.6",
  poster: "/images/dune.jpg",
  currentTime: "42:17",
  totalTime: "166:00",
  progress: 25,
  about:
    "پل آتریدس با پیوستن به فرمن‌ها و چانی، علیه خانه‌هایی که خانواده‌اش را نابود کردند وارد جنگ می‌شود و باید میان عشق و سرنوشت جهان یکی را انتخاب کند.",
  genres: ["علمی‌تخیلی", "ماجراجویی", "حماسی"],
};

const tabs = ["درباره فیلم", "بازیگران", "مشابه‌ها"];

const episodes = [
  { id: 1, title: "Episode 01", poster: "/images/dune.jpg" },
  { id: 2, title: "Episode 02", poster: "/images/dune.jpg" },
  { id: 3, title: "Episode 03", poster: "/images/dune.jpg" },
  { id: 4, title: "Episode 04", poster: "/images/dune.jpg" },
  { id: 5, title: "Episode 05", poster: "/images/dune.jpg" },
];

function Player() {
  const [playing, setPlaying] = useState(true);

  return (
    <div
      dir="ltr"
      className="bg-surface-secondary relative aspect-video overflow-hidden rounded-2xl"
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="from-overlay-dark to-overlay absolute inset-0 bg-linear-to-t via-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white lg:hidden"
          aria-label="بازگشت"
        >
          <ChevronLeft />
        </Button>
        <span className="hidden text-sm font-medium text-white lg:block">
          {movie.title}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-3 lg:p-4">
        <div className="h-1 w-full rounded-full bg-white/25">
          <div
            className="bg-primary relative h-full rounded-full"
            style={{ width: `${movie.progress}%` }}
          >
            <span className="bg-primary absolute end-0 top-1/2 size-3 -translate-y-1/2 rounded-full" />
          </div>
        </div>

        <div className="flex items-center gap-1 text-white">
          <Button variant="ghost" size="icon-sm" aria-label="قبلی">
            <SkipBack />
          </Button>
          <Button
            size="icon"
            className="rounded-full"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? "توقف" : "پخش"}
          >
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="بعدی">
            <SkipForward />
          </Button>
          <span className="ms-2 text-xs tabular-nums">
            {movie.currentTime} / {movie.totalTime}
          </span>
          <div className="ms-auto flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" aria-label="زیرنویس">
              <Captions />
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              className="hidden lg:inline-flex"
              aria-label="تنظیمات"
            >
              <Settings />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="تمام صفحه">
              <Maximize />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MovieInfo() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-text-primary text-xl font-bold" dir="ltr">
            {movie.title}
          </h1>
          <div className="text-text-secondary flex items-center gap-2 text-sm">
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="flex items-center gap-1">
              <Star className="fill-rating text-rating size-4" />
              {movie.rating}
            </span>
          </div>
        </div>
        <Button variant="ghost" size="icon" aria-label="اشتراک‌گذاری">
          <Share2 />
        </Button>
      </div>

      <div className="bg-surface grid grid-cols-3 gap-1 rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={cn(
              "rounded-lg py-2 text-sm font-medium transition-colors",
              activeTab === tab
                ? "bg-nav-active-bg text-primary"
                : "text-text-secondary hover:bg-nav-hover-bg",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className="text-text-secondary text-sm leading-7">{movie.about}</p>

      <div className="flex flex-col gap-3">
        <h2 className="text-text-primary text-sm font-bold">ژانرها</h2>
        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="border-border bg-surface text-text-secondary rounded-full border px-4 py-1.5 text-sm"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextEpisodeCard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-text-primary text-sm font-bold">قسمت بعدی</h2>
        <Repeat className="text-text-muted size-4" />
      </div>
      <div className="bg-surface flex items-center gap-3 rounded-xl p-2">
        <img
          src={episodes[1].poster}
          alt={episodes[1].title}
          className="h-14 w-24 rounded-lg object-cover"
        />
        <div className="flex flex-1 flex-col gap-1" dir="ltr">
          <span className="text-text-primary text-sm font-medium">
            {episodes[1].title}
          </span>
          <span className="text-primary text-xs" dir="rtl">
            پخش در ۵ ثانیه
          </span>
        </div>
        <ChevronLeft className="text-text-muted size-4" />
      </div>
    </div>
  );
}

function EpisodesPanel() {
  const [activeId, setActiveId] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <aside
      dir="rtl"
      className="bg-surface hidden flex-col gap-4 rounded-2xl p-4 lg:flex"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-text-primary font-bold">قسمت‌ها</h2>
        <Button variant="ghost" size="icon-sm" aria-label="بستن">
          <X />
        </Button>
      </div>

      <span className="bg-surface-secondary text-text-secondary w-fit rounded-full px-3 py-1 text-xs">
        فصل ۱
      </span>

      <ul className="flex flex-col gap-2">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button
              type="button"
              dir="ltr"
              onClick={() => setActiveId(episode.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl p-2 transition-colors",
                activeId === episode.id
                  ? "bg-nav-active-bg"
                  : "hover:bg-nav-hover-bg",
              )}
            >
              <img
                src={episode.poster}
                alt={episode.title}
                className="h-12 w-16 rounded-lg object-cover"
              />
              <span
                dir="ltr"
                className="text-text-primary flex-1 text-start text-sm"
              >
                {episode.title}
              </span>
              {activeId === episode.id && (
                <Check className="text-primary size-4" />
              )}
            </button>
          </li>
        ))}
      </ul>

      <label className="border-border text-text-secondary flex items-center justify-between border-t pt-4 text-sm">
        پخش خودکار قسمت بعدی
        <button
          type="button"
          role="switch"
          aria-checked={autoPlay}
          onClick={() => setAutoPlay(!autoPlay)}
          className={cn(
            "relative h-6 w-11 rounded-full transition-colors",
            autoPlay ? "bg-primary" : "bg-neutral-5",
          )}
        >
          <span
            className={cn(
              "absolute top-1 size-4 rounded-full bg-white transition-all",
              autoPlay ? "start-1" : "start-6",
            )}
          />
        </button>
      </label>
    </aside>
  );
}

function EpisodeBanner() {
  return (
    <div className="bg-surface hidden items-center justify-between gap-4 rounded-2xl p-4 lg:flex">
      <div className="flex flex-col gap-1" dir="ltr">
        <span className="text-text-primary font-medium">
          Episode 01 - Atreides
        </span>
      </div>
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-nav-hover-bg h-10 px-4"
      >
        <Play />
        قسمت بعدی
      </Button>
    </div>
  );
}

export default function WatchPage() {
  return (
    <div
      dir="rtl"
      className="dark bg-background text-text-primary min-h-screen"
    >
      <main
        dir="ltr"
        className="mx-auto grid max-w-6xl gap-5 p-4 lg:grid-cols-[1fr_320px] lg:p-6"
      >
        <div dir="rtl" className="flex flex-col gap-5">
          <Player />
          <div className="lg:hidden">
            <MovieInfo />
          </div>
          <EpisodeBanner />
          <div className="lg:hidden">
            <NextEpisodeCard />
          </div>
        </div>
        <EpisodesPanel />
      </main>
    </div>
  );
}
