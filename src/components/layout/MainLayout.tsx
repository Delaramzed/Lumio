import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CatalogLayout from "./CatalogLayout";

export default function MainLayout() {
  const { pathname } = useLocation();
  if (/^\/(series|search)\/?$/.test(pathname)) {
    return <CatalogLayout />;
  }
  return (
    <div className="bg-on-background text-foreground md:bg-background flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden md:ml-64">
        <Header />

        <main className="flex-1 overflow-y-auto p-4 pb-20 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
