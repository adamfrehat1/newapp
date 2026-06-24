import { ReactNode } from "react";

import { Heart, Home, MessageCircle, Plus, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewType = "home" | "messages" | "add" | "favorites" | "profile";

interface BottomNavProps {
  activeView: ViewType;
  onChange: (view: ViewType) => void;
}

const navItems: Array<{ key: ViewType; label: string; icon: ReactNode }> = [
  { key: "home", label: "الرئيسية", icon: <Home className="size-5" /> },
  { key: "messages", label: "الرسائل", icon: <MessageCircle className="size-5" /> },
  { key: "favorites", label: "المفضلة", icon: <Heart className="size-5" /> },
  { key: "profile", label: "حسابي", icon: <UserRound className="size-5" /> },
];

export function BottomNav({ activeView, onChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t bg-card/95 px-4 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 backdrop-blur">
      <div className="mx-auto grid max-w-xl grid-cols-5 items-end gap-1">
        {navItems.slice(0, 2).map((item) => (
          <Button
            key={item.key}
            type="button"
            variant="outline"
            onClick={() => onChange(item.key)}
            className={cn(
              "h-14 border-0 bg-transparent px-1 py-1 text-xs",
              activeView === item.key && "text-primary",
            )}
          >
            <span className="flex flex-col items-center gap-1">
              {item.icon}
              {item.label}
            </span>
          </Button>
        ))}
        <Button
          type="button"
          aria-label="إضافة محل"
          onClick={() => onChange("add")}
          className="mx-auto -mt-6 size-14 rounded-full shadow-xl"
        >
          <Plus className="size-7" />
        </Button>
        {navItems.slice(2).map((item) => (
          <Button
            key={item.key}
            type="button"
            variant="outline"
            onClick={() => onChange(item.key)}
            className={cn(
              "h-14 border-0 bg-transparent px-1 py-1 text-xs",
              activeView === item.key && "text-primary",
            )}
          >
            <span className="flex flex-col items-center gap-1">
              {item.icon}
              {item.label}
            </span>
          </Button>
        ))}
      </div>
    </nav>
  );
}
