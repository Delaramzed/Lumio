import {
  CircleUserRound,
  Film,
  Heart,
  Home,
  Menu,
  Tags,
  Tv,
  X,
} from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <Menu size={24} />
      </button>

     <aside
  className={`bg-on-background fixed top-0 left-0 z-50 flex h-screen w-64 flex-col  ${
    isOpen ? "flex" : "hidden"
  } md:flex`}
>
        <button onClick={() => setIsOpen(false)} className="mb-6 md:hidden">
          <X size={24} />
        </button>
        <div className="mb-10 px-3 pt-7">
          <h1 className="text-text-secondary items-center text-2xl font-bold">
            Lumio
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          <button className="text-nav-text hover:bg-nav-active-bg flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg">
            <Home size={20} />
            خانه
          </button>
          <button className="text-nav-text hover:bg-nav-hover-bg flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg transition-colors">
            <Film size={20} />
            فیلم‌ها
          </button>
          <button className="text-nav-text hover:bg-nav-hover-bg flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg transition-colors">
            <Tv size={20} />
            سریال‌ها
          </button>
          <button className="text-nav-text hover:bg-nav-hover-bg flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg transition-colors">
            <Tags size={20} />
            ژانرها
          </button>
          <button className="text-nav-text hover:bg-nav-hover-bg flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg transition-colors">
            <Heart size={20} />
            لیست من
          </button>
        </nav>

        <div className="mt-auto  pb-6">
          <button className="text-nav-text hover:bg-nav-hover-bg flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-lg transition-colors">
            <CircleUserRound size={30} />
            پروفایل
          </button>
        </div>
      </aside>
    </>
  );
}
export default Sidebar;
