import { Outlet, createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export const Route = createRoute({
  id: "layout",
  getParentRoute: () => rootRoute,
  component: () => {
    return (
      <div className="flex divide-x h-screen">
        <Sidebar />
        <div className="flex-1 divide-y">
          <Navbar />
          <div className="h-[calc(100vh-5rem)] overflow-y-auto p-2">
            <Outlet />
          </div>
        </div>
      </div>
    );
  },
});
