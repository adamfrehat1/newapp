import { CircleDashed } from "lucide-react";

export function Header() {
  return (
    <header className="mb-4 flex items-center gap-3">
      <span className="rounded-full bg-secondary/20 p-2 text-secondary" aria-hidden>
        <CircleDashed size={24} />
      </span>
      <div>
        <h1 className="text-2xl font-bold">سبير</h1>
        <p className="text-sm text-foreground/75">دليلك لمحلات الميكانيك في الأردن</p>
      </div>
    </header>
  );
}
