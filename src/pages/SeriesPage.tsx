import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeriesGrid from "@/components/series/SeriesGrid";
import SearchFilters from "@/components/search/SearchFilters";
import { getPopularSeries } from "@/lib/tmdb";
import type { CatalogItem } from "@/types/catalog";

export default function SeriesPage() {
  const [series, setSeries] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSeries() {
      try {
        const results = await getPopularSeries(controller.signal);
        const items: CatalogItem[] = results.map((item) => ({
          id: String(item.id),
          title: item.name || item.original_name,
          persianTitle: item.name || item.original_name,
          type: "series",
          year: Number(item.first_air_date?.slice(0, 4)) || 0,
          rating: item.vote_average ?? 0,
          genres: [],
          poster: item.poster_path
            ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
            : "",
        }));

        if (!controller.signal.aborted) {
          setSeries(items);
        }
      } catch {
        if (!controller.signal.aborted) {
          setError("دریافت سریال‌ها انجام نشد. دوباره تلاش کن.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadSeries();
    return () => controller.abort();
  }, [retryCount]);

  function retry() {
    setError("");
    setLoading(true);
    setRetryCount((count) => count + 1);
  }

  return (
    <section
      className="px-4 pb-[calc(84px+env(safe-area-inset-bottom))] md:px-7 md:pt-3 md:pb-10 lg:px-9"
      dir="rtl"
      lang="fa"
      aria-labelledby="series-title"
    >
      <div className="mx-auto max-w-[1200px]">
        <h1 id="series-title" className="sr-only">
          سریال‌ها
        </h1>
        <nav
          className="flex gap-3.5 sm:max-w-[440px] [&>a]:min-h-8 [&>a]:min-w-0 [&>a]:flex-1 [&>a]:rounded-[22px] [&>a]:border [&>a]:border-[#23372e] [&>a]:bg-[#11201b] [&>a]:px-2.5 [&>a]:py-1.5 [&>a]:text-center [&>a]:text-[11px] [&>a]:text-[#c4ccc3] [&>a]:transition-[background] [&>a]:duration-[180ms] [&>a:hover]:border-[#6faf8f] [&>a[aria-current=page]]:border-[#649a81] [&>a[aria-current=page]]:bg-[linear-gradient(110deg,#50856f,#79b697)] [&>a[aria-current=page]]:text-[#f6fff8] [&>a[aria-current=page]]:shadow-[inset_0_1px_0_#a0d6b530]"
          aria-label="دسته‌بندی محتوا"
        >
          <Link to="/search">همه</Link>
          <Link to="/movies">فیلم‌ها</Link>
          <Link to="/series" aria-current="page">
            سریال‌ها
          </Link>
        </nav>
        <SearchFilters compact />
        {loading ? (
          <p role="status" className="py-10 text-center">
            در حال دریافت سریال‌ها…
          </p>
        ) : error ? (
          <div role="alert" className="py-10 text-center">
            <p>{error}</p>
            <button
              type="button"
              onClick={retry}
              className="mt-4 rounded-xl bg-[#6faf8f] px-4 py-2 text-[#06100e]"
            >
              تلاش مجدد
            </button>
          </div>
        ) : series.length === 0 ? (
          <p className="py-10 text-center">سریالی پیدا نشد.</p>
        ) : (
          <SeriesGrid series={series} />
        )}
      </div>
    </section>
  );
}
