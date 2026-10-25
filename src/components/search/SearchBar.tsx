import { Search, X } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="flex min-h-11 min-w-0 flex-1 items-center gap-2.5 rounded-3xl border border-[#3c4d41] bg-[linear-gradient(120deg,#1b2d24,#11211a)] px-3.5 focus-within:border-[#6faf8f] focus-within:shadow-[0_0_0_2px_#80c5a822] [&>button]:-mr-1.5 [&>button]:grid [&>button]:min-h-10 [&>button]:min-w-7 [&>button]:place-items-center [&>input]:w-full [&>input]:min-w-0 [&>input]:border-0 [&>input]:bg-transparent [&>input]:py-2.5 [&>input]:text-[13px] [&>input]:outline-none [&>input::-webkit-search-cancel-button]:appearance-none [&>input::placeholder]:text-[#a0aaa2] [&>svg]:shrink-0 [&>svg]:text-[#d6ded3]"
      role="search"
      dir="ltr"
    >
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
