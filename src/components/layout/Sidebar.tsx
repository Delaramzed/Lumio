import { Film, House, PanelsTopLeft, Search, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { to: "/", label: "خانه", icon: House },
  { to: "/movies", label: "فیلم‌ها", icon: Film },
  { to: "/series", label: "سریال‌ها", icon: PanelsTopLeft },
  { to: "/search", label: "جست‌وجو", icon: Search },
  { to: "/profile", label: "پروفایل", icon: UserRound },
];

export default function Sidebar({
  hideOnMobile = false,
}: {
  hideOnMobile?: boolean;
}) {
  return (
    <nav
      className={`font-catalog fixed inset-x-0 bottom-0 z-30 min-h-[68px] items-center justify-around border-t border-[#20362d] bg-[#06100ef5] px-2 pt-2 pb-[max(8px,env(safe-area-inset-bottom))] leading-normal [color-scheme:dark] backdrop-blur-[14px] md:inset-y-0 md:right-auto md:left-0 md:flex md:w-[200px] md:flex-col md:justify-start md:gap-3 md:overflow-y-auto md:border-t-0 md:border-r md:px-4 md:py-8 lg:w-56 ${hideOnMobile ? "hidden" : "flex"}`}
      aria-label="منوی اصلی"
      dir="ltr"
      lang="fa"
    >
      {navigation.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className="flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center gap-1.5 text-[10px] text-[#b5b8af] no-underline [-webkit-tap-highlight-color:transparent] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#6faf8f] aria-[current=page]:text-[#98cdae] md:w-full md:flex-none md:flex-row md:justify-start md:gap-3.5 md:rounded-[10px] md:p-3 md:text-[13px] md:aria-[current=page]:bg-[#1a3227] aria-[current=page]:[&>svg]:fill-[#6faf8f35] aria-[current=page]:[&>svg]:stroke-2"
        >
          <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
          <span dir="rtl">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
