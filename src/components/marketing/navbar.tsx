import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import Logo from "../logo";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface NavItem {
  id: number;
  name: string;
  path: string;
}

const MarketingNavbar = () => {
  const navList: NavItem[] = [
    {
      id: 2,
      name: "Features",
      path: "#features",
    },
    {
      id: 4,
      name: "Pricing",
      path: "#pricing",
    },
    {
      id: 5,
      name: "Stories",
      path: "#stories",
    },
  ];

  return (
    <nav className="flex flex-wrap w-full items-center justify-between min-h-20">
      <div className="hidden lg:flex">
        <Logo />
      </div>
      <NavigationMenu className="lg:flex hidden">
        <NavigationMenuList>
          {navList.map((navItem: NavItem) => (
            <NavigationMenuItem key={navItem.id}>
              <Link to={navItem.path}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "h-9 bg-transparent"
                  )}
                >
                  {navItem.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1 lg:flex-initial flex items-center justify-between gap-4">
        <Link
          to="/sign-up"
          className={cn(buttonVariants({ variant: "secondary" }))}
        >
          Sign in
        </Link>
        <Link
          to="/sign-up"
          className={cn(
            buttonVariants({}),
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground h-9 flex items-center gap-1 shadow"
          )}
        >
          Get started <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
};

export default MarketingNavbar;
