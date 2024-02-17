import { MessageSquareQuote, Quote } from "lucide-react";
import Logo from "../logo";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";

const MarketingFooter = () => {
  return (
    <footer className="flex flex-col items-center min-h-80 p-2 xl:px-10 xl:py-6 bg-slate-200 text-secondary-foreground dark:bg-slate-900 dark:text-primary-foreground ">
      <div className="flex flex-col justify-between container pt-4">
        <div className="flex flex-wrap justify-between gap-y-10">
          <div className="">
            <Logo />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="flex gap-2 items-center font-medium">
                <MessageSquareQuote className="w-5 h-5" />
                Join our newsletter
              </span>
              <Quote strokeWidth={1.5} className="w-8 h-8" />
            </div>
            <div className="flex items-center">
              <Input
                className={cn(
                  "text-foreground w-full text-sm h-12 px-6 pr-36 border-none shadow",
                  "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
                )}
                placeholder="hello@example.com"
              />
              <Button className="bg-primary h-12 text-sm -ml-[8.5rem] border-none rounded-l-none">
                Subscribe now
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-4 bg-gray-400 dark:bg-gray-800" />
        <div className="flex items-start flex-wrap justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={buttonVariants({
                    variant: "ghost",
                    className: "cursor-pointer",
                  })}
                >
                  Contact us
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={buttonVariants({
                    variant: "ghost",
                    className: "cursor-pointer",
                  })}
                >
                  Teams & condition
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={buttonVariants({
                    variant: "ghost",
                    className: "cursor-pointer",
                  })}
                >
                  Privacy policy
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </footer>
  );
};

export default MarketingFooter;
