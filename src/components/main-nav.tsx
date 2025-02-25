import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { NavItem } from "@/types/nav";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const location = useLocation();
  const { theme } = useTheme();
  console.log("theme", theme);

  return (
    <div className="flex gap-6 md:gap-10">
      <a href="/" className="flex items-center space-x-2">
        <Icons.laptop className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </a>
      {items?.length ? (
        <nav className="flex gap-6 ">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center h-16 text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                    location.pathname === item.href &&
                      cn(
                        "font-bold",
                        theme !== "dark" ? " text-black" : "text-white",
                        "text-md border-b-2",
                        theme !== "dark" ? "border-black" : "border-white"
                      )
                  )}
                >
                  {item.title}
                </a>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
