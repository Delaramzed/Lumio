import MovieCard from "@/components/cards/MovieCard";
import { Search } from "lucide-react";

const MoviesPage = () => {
  return (
    <>
    
      <div className="relative w-full md:w-200">
        <input
          type="text"
          placeholder="جستجو ..."
          className="bg-surface border-surface-secondary text-text-primary w-full rounded-xl border py-2 pr-10 pl-4 text-sm outline-none"
        />

        <Search
          size={18}
          className="text-text-muted pointer-events-none absolute top-3 right-3"
        />
      </div>

      {/* Mobile Filters */}
      <div className="mt-6 flex gap-3 md:hidden">
        <select className="bg-surface-secondary text-text-secondary w-full rounded-lg px-4 py-2 text-sm outline-none">
          <option>ژانر</option>
          <option>اکشن</option>
          <option>درام</option>
          <option>کمدی</option>
          <option>علمی‌تخیلی</option>
          <option>ترسناک</option>
        </select>

        <select className="bg-surface-secondary text-text-secondary w-full rounded-lg px-4 py-2 text-sm outline-none">
          <option>امتیاز</option>
          <option>۹ به بالا</option>
          <option>۸ به بالا</option>
          <option>۷ به بالا</option>
          <option>۶ به بالا</option>
        </select>
      </div>

      {/* Desktop Filters */}
      <div className="mt-6 hidden items-center justify-between md:flex">
        <div className="flex gap-8">
          <button className="bg-surface-secondary text-text-secondary hover:bg-nav-hover-bg rounded-lg px-4 py-2 text-sm">
            اکشن
          </button>

          <button className="bg-surface-secondary text-text-secondary hover:bg-nav-hover-bg rounded-lg px-4 py-2 text-sm">
            درام
          </button>

          <button className="bg-surface-secondary text-text-secondary hover:bg-nav-hover-bg rounded-lg px-4 py-2 text-sm">
            کمدی
          </button>

          <button className="bg-surface-secondary text-text-secondary hover:bg-nav-hover-bg rounded-lg px-4 py-2 text-sm">
            علمی‌تخیلی
          </button>

          <button className="bg-surface-secondary text-text-secondary hover:bg-nav-hover-bg rounded-lg px-4 py-2 text-sm">
            ترسناک
          </button>
        </div>

        <select className="bg-surface-secondary text-text-secondary rounded-lg px-4 py-2 text-sm outline-none">
          <option>امتیاز</option>
          <option>۹ به بالا</option>
          <option>۸ به بالا</option>
          <option>۷ به بالا</option>
          <option>۶ به بالا</option>
        </select>
      </div>

     
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        <MovieCard />
      </div>
    </>
  );
};

export default MoviesPage;