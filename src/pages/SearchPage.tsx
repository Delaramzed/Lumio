import { Link } from "react-router-dom";
import { ChevronLeft, Funnel } from "lucide-react";
import SearchBar from "@/components/search/SearchBar";
import SearchFilters, {
  ContentTypeTabs,
} from "@/components/search/SearchFilters";
import SearchResults from "@/components/search/SearchResults";
import { sampleSearchResults } from "@/lib/catalog";

export default function SearchPage() {
  return (
    <section
      className="px-4 pt-[22px] pb-[max(22px,env(safe-area-inset-bottom))] md:px-7 md:pt-7 md:pb-10 lg:px-9"
      dir="rtl"
      lang="fa"
      aria-labelledby="search-title"
    >
      <div className="mx-auto flex min-h-[calc(100dvh-44px)] max-w-[1200px] flex-col md:min-h-[calc(100dvh-68px)]">
        <div className="mb-7 flex flex-row-reverse items-center gap-3 md:max-w-[640px]">
          <Link
            className="grid h-11 w-6 shrink-0 place-items-center"
            to="/series"
            aria-label="بازگشت به سریال‌ها"
          >
            <ChevronLeft size={21} />
          </Link>
          <SearchBar />
        </div>
        <div className="mb-[18px] [&>h1]:text-[14px] [&>h1]:font-medium">
          <h1 id="search-title">نتایج جست‌وجو</h1>
        </div>
        <ContentTypeTabs />
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start lg:gap-9 lg:[direction:ltr] lg:[&>*]:[direction:rtl]">
          <SearchResults items={sampleSearchResults} />
          <aside
            className="flex min-h-[214px] flex-1 flex-col md:min-h-[250px] lg:mt-6 lg:rounded-2xl lg:border lg:border-[#263c33] lg:bg-[#10221b80] lg:p-5"
            aria-label="فیلترهای جست‌وجو"
          >
            <SearchFilters />
            <button
              type="button"
              className="mt-auto flex min-h-12 w-full items-center justify-between rounded-[15px] border border-[#354f3f] bg-[#10221ba8] px-4 py-3 text-[12px] hover:bg-[#203a2d] lg:mt-10"
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
