import { Link } from "react-router-dom";
import { ChevronLeft, Funnel } from "lucide-react";
import SearchBar from "@/components/search/SearchBar";
import SearchFilters, {
  ContentTypeTabs,
} from "@/components/search/SearchFilters";
import SearchResults from "@/components/search/SearchResults";
import { sampleSearchResults } from "@/lib/catalog";
import "./catalog.css";

export default function SearchPage() {
  return (
    <section
      className="catalog-page search-page"
      dir="rtl"
      lang="fa"
      aria-labelledby="search-title"
    >
      <div className="catalog-inner">
        <div className="search-topbar">
          <Link
            className="catalog-back"
            to="/series"
            aria-label="بازگشت به سریال‌ها"
          >
            <ChevronLeft size={21} />
          </Link>
          <SearchBar />
        </div>
        <div className="search-heading">
          <h1 id="search-title">نتایج جست‌وجو</h1>
        </div>
        <ContentTypeTabs />
        <div className="search-body">
          <SearchResults items={sampleSearchResults} />
          <aside className="search-filter-panel" aria-label="فیلترهای جست‌وجو">
            <SearchFilters />
            <button
              type="button"
              className="catalog-reset"
              aria-disabled="true"
            >
              <Funnel size={18} aria-hidden="true" />
              پاک کردن همه
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
