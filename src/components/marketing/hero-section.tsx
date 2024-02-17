import { Link } from "@tanstack/react-router";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const MarketingHeroSection = () => {
  const reviewers = [
    {
      id: 1,
      src: "/user-1.jpg",
    },
    {
      id: 2,
      src: "/user-2.jpg",
    },
    {
      id: 3,
      src: "/user-3.jpg",
    },
    {
      id: 4,
      src: "/user-4.jpg",
    },
  ];
  return (
    <div className="flex justify-between items-center gap-4 container min-h-[calc(100vh-13rem)]">
      <div className="flex xl:items-start items-center flex-col xl:mt-0 mt-10">
        <div className="flex xl:items-start items-center flex-col w-full md:w-2/3 xl:w-[75%] gap-8">
          <h1 className="xl:text-start text-center text-5xl sm:text-7xl font-semibold text-gray-800 dark:text-gray-200">
            Unleash Your Productivity with NerdFlow
          </h1>
          <p className="xl:w-full w-full text-sm sm:text-lg xl:text-start text-center text-gray-700 dark:text-gray-300">
            Are you struggling to stay organized and focused? We know how you
            feel. That's why we've created a task managment tool that helps you
            stay on top of your to-do list and get more done in less time.
          </p>
          <div className="flex xl:justify-start items-center w-full justify-center gap-4">
            <Link
              to="/dashboard"
              className={cn(
                "flex gap-1 shadow",
                buttonVariants({
                  className: "text-base",
                })
              )}
            >
              Try for free
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex items-center">
              {reviewers.map((reviewer, index) => (
                <div
                  key={reviewer.id}
                  className={cn(
                    "w-10 h-10 rounded-full ring ring-white overflow-hidden",
                    index === 0 ? "" : "-ml-2"
                  )}
                >
                  <img src={reviewer.src} alt="User 1" />
                </div>
              ))}
            </div>
            <span className="text-gray-500 font-medium text-sm">
              Rated 4/5 from over 4 reviews
            </span>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex justify-end min-w-[35rem]">
        <div className="w-[35rem] h-[45rem] overflow-hidden rounded-xl shadow-2xl hover:scale-105 transition-all duration-500">
          <img
            src="/hero-image.jpg"
            className="w-full scale-110 hover:scale-100 transition-all duration-500"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingHeroSection;
