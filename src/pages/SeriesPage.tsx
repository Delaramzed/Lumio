import { Link } from "react-router-dom";
import SeriesGrid from "@/components/series/SeriesGrid";
import SearchFilters from "@/components/search/SearchFilters";
import { seriesCatalog } from "@/lib/catalog";

export default function SeriesPage() {
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
        <SeriesGrid series={seriesCatalog} />
      </div>
    </section>
  );
}
