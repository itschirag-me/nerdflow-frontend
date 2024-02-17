import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

interface LogoProps {
  size?: "lg" | "md" | "sm";
  mode?: "dark" | "light";
  allowMode?: boolean;
}

const Logo = ({ size, allowMode, mode }: PropsWithChildren<LogoProps>) => {
  const variantImage = (val?: "lg" | "md" | "sm") => {
    const options = {
      lg: "w-14 h-14",
      md: "w-10 h-10",
      sm: "w-6 h-6",
    };

    if (!val) return "";

    return options[val];
  };

  const variant = (val?: "lg" | "md" | "sm") => {
    const options = {
      lg: "text-4xl leading-none",
      md: "text-2xl leading-none",
      sm: "text-lg leading-none",
    };

    if (!val) return "";

    return options[val];
  };

  return (
    <Link to="/">
      <div className="flex items-end gap-1">
        <img
          className={cn(
            "w-10 h-10",
            variantImage(size),
            allowMode ? "flex dark:hidden" : ""
          )}
          src={mode === "dark" ? "/logo-dark.svg" : "/logo.svg"}
          alt="Nerdflow"
        />
        {allowMode && (
          <img
            className={cn(
              "w-10 h-10",
              variantImage(size),
              allowMode ? "hidden dark:flex" : ""
            )}
            src="/logo-dark.svg"
            alt="Nerdflow"
          />
        )}
        <span
          className={cn(
            "text-2xl font-bold uppercase leading-none",
            variant(size)
          )}
        >
          erdflow
        </span>
      </div>
    </Link>
  );
};

export default Logo;
