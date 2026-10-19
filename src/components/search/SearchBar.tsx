import { Search, X } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="catalog-search-bar" role="search" dir="ltr">
      <Search size={18} aria-hidden="true" />
      <input
        type="search"
        dir="auto"
        aria-label="جست‌وجوی فیلم و سریال"
        placeholder="فیلم یا سریال مورد علاقه‌ات…"
        value="dune"
        readOnly
      />
      <button type="button" aria-label="پاک کردن جست‌وجو" aria-disabled="true">
        <X size={17} />
      </button>
    </div>
  );
}
