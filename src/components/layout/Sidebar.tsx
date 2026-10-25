import { Film, House, PanelsTopLeft, Search, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

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
      className={
        hideOnMobile ? "app-sidebar app-sidebar-desktop-only" : "app-sidebar"
      }
      aria-label="منوی اصلی"
      dir="ltr"
      lang="fa"
    >
      {navigation.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} end={to === "/"}>
          <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
          <span dir="rtl">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
