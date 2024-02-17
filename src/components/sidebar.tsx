import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LayoutGrid,
  LogOut,
  Users,
  Presentation,
  KanbanSquare,
} from "lucide-react";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
}

const Sidebar = () => {
  const router = useRouterState();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate({ to: "/" });
  };

  const navlist: NavItem[] = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutGrid className="w-4" />,
    },
    {
      name: "Team",
      path: "/team",
      icon: <Users className="w-4" />,
    },
    {
      name: "Tasks",
      path: "/task",
      icon: <KanbanSquare className="w-4" />,
    },
    {
      name: "Projects",
      path: "/project",
      icon: <Presentation className="w-4" />,
    },
  ];

  return (
    <div className="flex flex-col w-72 px-4 divide-y">
      <div className="flex items-center h-20">
        <Logo />
      </div>
      <ul className="flex-1 flex flex-col gap-y-2 py-4">
        {navlist.map((navItem: NavItem) => (
          <Link key={navItem.path} to={navItem.path}>
            <li
              className={cn(
                "flex items-center gap-2 p-3 py-2 bg-background text-sm text-foreground rounded",
                router.location.pathname === navItem.path
                  ? "bg-primary text-background shadow text-white"
                  : "hover:bg-secondary hover:text-foreground"
              )}
            >
              {navItem.icon}
              <span className="font-medium leading-5">{navItem.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex items-center h-20">
        <li
          className={cn(
            "flex w-full items-center gap-2 p-3 py-2 bg-background text-sm text-foreground rounded cursor-pointer",
            "hover:bg-secondary hover:text-foreground"
          )}
          onClick={handleLogout}
        >
          <LogOut className="w-4" />
          <span className="font-medium leading-5">Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
