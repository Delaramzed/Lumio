import {
  CircleUserRound,
  Film,
  House,
  PanelsTopLeft,
  Search,
  UserRound,
} from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "@/pages/catalog.css";

const navigation = [
  { to: "/", label: "خانه", icon: House },
  { to: "/movies", label: "فیلم‌ها", icon: Film },
  { to: "/series", label: "سریال‌ها", icon: PanelsTopLeft },
  { to: "/search", label: "جست‌وجو", icon: Search },
  { to: "/profile", label: "پروفایل", icon: UserRound },
];

export default function CatalogLayout() {
  const isSearch = /^\/search\/?$/.test(useLocation().pathname);
  return (
    <div
      className={
        isSearch ? "catalog-shell catalog-shell-search" : "catalog-shell"
      }
      lang="fa"
    >
      <header className="catalog-header">
        <div className="catalog-header-actions">
          <Link to="/search" aria-label="جست‌وجوی فیلم و سریال">
            <Search size={20} />
          </Link>
          <Link to="/profile" className="catalog-avatar" aria-label="پروفایل">
            <CircleUserRound size={29} />
          </Link>
        </div>
      </header>
      <nav className="catalog-navigation" aria-label="منوی اصلی">
        {navigation.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === "/"}>
            <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <main className="catalog-main">
        <Outlet />
      </main>
    </div>
  );
}
