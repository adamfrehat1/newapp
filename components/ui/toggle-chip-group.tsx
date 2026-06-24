import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ToggleChipGroupProps {
  options: string[];
  values: string[];
  onToggle: (value: string) => void;
  singleSelect?: boolean;
}

export function ToggleChipGroup({
  options,
  values,
  onToggle,
  singleSelect,
}: ToggleChipGroupProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((option) => {
        const selected = values.includes(option);
        return (
          <Button
            type="button"
            key={option}
            variant={selected ? "primary" : "outline"}
            className={cn("h-auto py-2.5", singleSelect && "col-span-1")}
            aria-pressed={selected}
            onClick={() => onToggle(option)}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
