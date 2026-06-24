export type FuelType = "بنزين" | "كهرباء" | "هايبرد" | "ديزل" | "أعمل في كل الأنواع";

export type ProblemType =
  | "ميكانيك"
  | "كهرباء"
  | "بودي"
  | "دهان"
  | "لا أعرف أين المشكلة بالضبط - أريد محل قادر على تحديد المشكلة";

export type OriginType =
  | "أمريكي"
  | "ياباني"
  | "كوري"
  | "صيني"
  | "ألماني"
  | "أوروبي آخر"
  | "أعمل في كل الأنواع";

export type FieldType = "ميكانيك" | "كهرباء" | "بودي" | "دهان" | "أعمل في كل المجالات";

export type ThemeName = "default" | "classic-blue" | "orange" | "dark";

export interface Shop {
  id: number;
  name: string;
  fuels: string;
  fields: string;
  origins: string;
  governorate: string;
  area: string;
  rating: number;
}

export interface SearchCriteria {
  fuel?: FuelType;
  brand?: string;
  problem?: ProblemType;
}
