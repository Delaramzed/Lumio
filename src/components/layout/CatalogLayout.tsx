import { CircleUserRound, Search } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@/pages/catalog.css";

export default function CatalogLayout() {
  const isSearch = /^\/search\/?$/.test(useLocation().pathname);
  return (
    <div
      className={
        isSearch
          ? "sidebar-layout catalog-shell catalog-shell-search"
          : "sidebar-layout catalog-shell"
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
      <Sidebar hideOnMobile={isSearch} />
      <main className="catalog-main">
        <Outlet />
      </main>
    </div>
  );
}
