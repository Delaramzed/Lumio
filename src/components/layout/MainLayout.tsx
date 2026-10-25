import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import CatalogLayout from "./CatalogLayout";

export default function MainLayout() {
  const { pathname } = useLocation();
  if (/^\/(series|search)\/?$/.test(pathname)) {
    return <CatalogLayout />;
  }
  return (
    <div
      className="text-foreground flex h-dvh overflow-hidden bg-[#06100e] bg-[radial-gradient(ellipse_at_90%_0,#1a2c23_0,transparent_48%)]"
      dir="ltr"
    >
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden md:ml-[200px] lg:ml-56">
        <Header />

        <main className="dark flex-1 overflow-y-auto p-4 pb-[calc(84px+env(safe-area-inset-bottom))] md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
