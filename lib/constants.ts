import { FuelType, OriginType, Shop } from "@/types/spare";

export const UNKNOWN_PROBLEM_TEXT =
  "لا أعرف أين المشكلة بالضبط - أريد محل قادر على تحديد المشكلة";

export const featuredShops: Shop[] = [
  {
    id: 1,
    name: "كراج البيادر الهايبرد",
    fuels: "هايبرد",
    fields: "ميكانيك",
    origins: "ياباني وكوري",
    governorate: "عمان",
    area: "البيادر الصناعية",
    rating: 4.8,
  },
  {
    id: 2,
    name: "مركز الفن للدهان",
    fuels: "أعمل في كل الأنواع",
    fields: "بودي ودهان",
    origins: "أعمل في كل الأنواع",
    governorate: "الزرقاء",
    area: "الحرفيين",
    rating: 4.5,
  },
  {
    id: 3,
    name: "كهرباء الرمثا الحديثة",
    fuels: "أعمل في كل الأنواع",
    fields: "كهرباء",
    origins: "ألماني وأوروبي آخر",
    governorate: "إربد",
    area: "الرمثا",
    rating: 4.2,
  },
  {
    id: 4,
    name: "المعلم الشامل",
    fuels: "أعمل في كل الأنواع",
    fields: "أعمل في كل المجالات",
    origins: "أعمل في كل الأنواع",
    governorate: "عمان",
    area: "وادي الرمم",
    rating: 4.9,
  },
];

export const fuelBrandModels: Record<
  Exclude<FuelType, "أعمل في كل الأنواع">,
  Record<string, string[]>
> = {
  بنزين: {
    تويوتا: ["كامري", "كورولا"],
    هيونداي: ["سوناتا"],
  },
  كهرباء: {
    تسلا: ["موديل 3"],
    "بي واي دي": ["هان"],
  },
  هايبرد: {
    تويوتا: ["بريوس"],
    كيا: ["نيرو"],
  },
  ديزل: {
    إيسوزو: ["دي ماكس"],
  },
};

export const brandOriginMap: Record<string, OriginType> = {
  تويوتا: "ياباني",
  هيونداي: "كوري",
  تسلا: "أمريكي",
  "بي واي دي": "صيني",
  كيا: "كوري",
  إيسوزو: "ياباني",
};

export const fuelOptions: FuelType[] = ["بنزين", "كهرباء", "هايبرد", "ديزل"];

export const governorates = [
  "عمان",
  "الزرقاء",
  "إربد",
  "السلط",
  "المفرق",
  "عجلون",
  "مادبا",
  "الكرك",
  "الطفيلة",
  "معان",
  "العقبة",
  "جرش",
];

export const areasByGovernorate: Record<string, string[]> = {
  عمان: ["البيادر الصناعية", "القويسمة", "صويلح", "وادي الرمم", "ماركا"],
  الزرقاء: ["الحرفيين", "وسط الزرقاء", "جبل الأمير حسن", "الهاشمية"],
  إربد: ["الرمثا", "الحي الشرقي", "وسط المدينة"],
};

const currentYear = new Date().getFullYear();

export const years = Array.from({ length: 20 }, (_, index) => String(currentYear - index));
