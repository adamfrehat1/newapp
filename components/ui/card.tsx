import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-2xl border bg-card p-4 shadow-sm", className)}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";
