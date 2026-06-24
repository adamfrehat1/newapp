import { brandOriginMap } from "@/lib/constants";
import { SearchCriteria, Shop } from "@/types/spare";

function containsOption(value: string, wanted: string, wildcard: string) {
  return value.includes(wildcard) || value.includes(wanted);
}

export function filterShops(shops: Shop[], criteria: SearchCriteria): Shop[] {
  return shops.filter((shop) => {
    const fuelMatches = criteria.fuel
      ? containsOption(shop.fuels, criteria.fuel, "أعمل في كل الأنواع")
      : true;

    const originMatches = criteria.brand
      ? containsOption(
          shop.origins,
          brandOriginMap[criteria.brand] ?? "",
          "أعمل في كل الأنواع",
        )
      : true;

    const fieldMatches = criteria.problem
      ? criteria.problem ===
        "لا أعرف أين المشكلة بالضبط - أريد محل قادر على تحديد المشكلة"
        ? shop.fields.includes("ميكانيك") || shop.fields.includes("أعمل في كل المجالات")
        : containsOption(shop.fields, criteria.problem, "أعمل في كل المجالات")
      : true;

    return fuelMatches && originMatches && fieldMatches;
  });
}
