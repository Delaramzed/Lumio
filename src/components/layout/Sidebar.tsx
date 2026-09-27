import { CircleUserRound, Film, Heart, Home, Tags, Tv } from "lucide-react";

function Sidebar() {
  return (
    <aside className="bg-on-background fixed bottom-0 left-0 z-50 w-full md:top-0 md:bottom-auto md:h-screen md:w-64">
      {/* Logo */}
      <div className="hidden px-5 pt-7 md:block">
        <h1 className="text-text-secondary text-2xl font-bold">Lumio</h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-around px-2 py-3 md:mt-10 md:flex-col md:items-stretch md:gap-2 md:px-3">
        <button className="text-nav-text hover:bg-nav-hover-bg flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-sm md:flex-row md:gap-3 md:px-4 md:py-3 md:text-lg">
          <Home size={21} />
          <span>خانه</span>
        </button>

        <button className="text-nav-text hover:bg-nav-hover-bg flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-sm md:flex-row md:gap-3 md:px-4 md:py-3 md:text-lg">
          <Film size={21} />
          <span>فیلم‌ها</span>
        </button>

        <button className="text-nav-text hover:bg-nav-hover-bg flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-sm md:flex-row md:gap-3 md:px-4 md:py-3 md:text-lg">
          <Tv size={21} />
          <span>سریال‌ها</span>
        </button>

        <button className="text-nav-text hover:bg-nav-hover-bg flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-sm md:flex-row md:gap-3 md:px-4 md:py-3 md:text-lg">
          <Tags size={21} />
          <span>ژانرها</span>
        </button>

        <button className="text-nav-text hover:bg-nav-hover-bg flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-sm md:flex-row md:gap-3 md:px-4 md:py-3 md:text-lg">
          <Heart size={21} />
          <span>لیست من</span>
        </button>

        <button className="text-nav-text hover:bg-nav-hover-bg flex flex-col items-center gap-1 rounded-xl px-3 py-2 text-sm md:flex-row md:gap-3 md:px-4 md:py-3 md:text-lg">
          <CircleUserRound size={21} />
          <span>پروفایل</span>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
