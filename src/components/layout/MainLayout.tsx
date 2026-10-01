import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function MainLayout() {
  return (
    <div
      className="bg-on-background text-foreground md:bg-background flex h-screen overflow-hidden"
      dir="ltr"
    >
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
