import { Card } from "@/components/ui/card";

export function Banner() {
  return (
    <Card className="mb-4 flex min-h-[120px] items-center bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
      <p className="text-lg font-semibold">أهلاً بك في تطبيق سبير</p>
    </Card>
  );
}
