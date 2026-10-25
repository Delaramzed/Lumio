import { CircleUserRound, Search } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function CatalogLayout() {
  const isSearch = /^\/search\/?$/.test(useLocation().pathname);
  return (
    <div
      className="font-catalog min-h-dvh bg-[#06100e] bg-[radial-gradient(ellipse_at_90%_0,#1a2c23_0,transparent_48%)] text-[13px] leading-normal text-[#f5f3ee] [color-scheme:dark] md:pl-[200px] lg:pl-56 [&_:is(button,a,select,input)]:[-webkit-tap-highlight-color:transparent] [&_:is(button,a,select,input):focus-visible]:outline-2 [&_:is(button,a,select,input):focus-visible]:outline-offset-3 [&_:is(button,a,select,input):focus-visible]:outline-[#6faf8f] [&_button]:cursor-pointer [&_select]:cursor-pointer"
      lang="fa"
    >
      <header
        className={`mx-auto h-16 max-w-[1264px] items-center justify-end px-[18px] py-2.5 md:h-[76px] md:px-7 md:py-4 ${isSearch ? "hidden" : "flex"}`}
      >
        <div className="flex items-center gap-[15px]">
          <Link
            className="grid h-10 min-w-8 place-items-center"
            to="/search"
            aria-label="جست‌وجوی فیلم و سریال"
          >
            <Search size={20} />
          </Link>
          <Link
            to="/profile"
            className="grid h-10 min-w-8 place-items-center text-[#c2d3c8]"
            aria-label="پروفایل"
          >
            <CircleUserRound size={29} />
          </Link>
        </div>
      </header>
      <Sidebar hideOnMobile={isSearch} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
