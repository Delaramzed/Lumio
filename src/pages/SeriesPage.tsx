import { Link } from "react-router-dom";
import SeriesGrid from "@/components/series/SeriesGrid";
import SearchFilters from "@/components/search/SearchFilters";
import { seriesCatalog } from "@/lib/catalog";
import "./catalog.css";

export default function SeriesPage() {
  return (
    <section
      className="catalog-page"
      dir="rtl"
      lang="fa"
      aria-labelledby="series-title"
    >
      <div className="catalog-inner">
        <h1 id="series-title" className="catalog-sr-only">
          سریال‌ها
        </h1>
        <nav className="catalog-tabs" aria-label="دسته‌بندی محتوا">
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
