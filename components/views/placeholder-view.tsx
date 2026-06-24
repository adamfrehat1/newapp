import { Card } from "@/components/ui/card";

export function PlaceholderView({ title }: { title: string }) {
  return (
    <Card className="text-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm text-foreground/70">هذه الواجهة ستتوفر قريباً.</p>
    </Card>
  );
}
