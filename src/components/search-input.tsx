import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        className={cn(
          "rounded-full px-10 p-5 pl-10 bg-secondary w-[28rem]",
          "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0"
        )}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
