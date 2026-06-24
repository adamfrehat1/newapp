import { MapPin, Star } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Shop } from "@/types/spare";

export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <Card className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold">{shop.name}</h3>
        <span className="inline-flex items-center gap-1 rounded-lg bg-muted px-2 py-1 text-sm">
          <Star className="size-4 fill-current text-yellow-500" /> {shop.rating}
        </span>
      </div>
      <p className="text-sm text-foreground/80">الوقود: {shop.fuels}</p>
      <p className="text-sm text-foreground/80">التخصص: {shop.fields}</p>
      <p className="text-sm text-foreground/80">الأصول: {shop.origins}</p>
      <p className="inline-flex items-center gap-1 text-sm text-foreground/80">
        <MapPin className="size-4" />
        {shop.governorate}، {shop.area}
      </p>
    </Card>
  );
}
