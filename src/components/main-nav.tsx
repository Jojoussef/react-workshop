import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { NavItem } from "@/types/nav";
import { useLocation } from "react-router-dom";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const location = useLocation();

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
                      "font-bold text-black text-md border-b-2 border-black"
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
