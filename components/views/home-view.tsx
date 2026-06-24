"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { ShopCard } from "@/components/shop-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SelectField } from "@/components/ui/select-field";
import { featuredShops, fuelBrandModels, fuelOptions, UNKNOWN_PROBLEM_TEXT, years } from "@/lib/constants";
import { filterShops } from "@/lib/matching";
import { FuelType, ProblemType } from "@/types/spare";

const problemOptions: ProblemType[] = ["ميكانيك", "كهرباء", "بودي", "دهان", UNKNOWN_PROBLEM_TEXT];

export function HomeView() {
  const [fuel, setFuel] = useState<FuelType | "">("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [problem, setProblem] = useState<ProblemType | "">("");
  const [showFeatured, setShowFeatured] = useState(true);
  const [showWizard, setShowWizard] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const stepTwoRef = useRef<HTMLDivElement>(null);
  const stepThreeRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const selectedFuel = fuel as Exclude<FuelType, "أعمل في كل الأنواع"> | "";

  const availableBrands = selectedFuel ? Object.keys(fuelBrandModels[selectedFuel]) : [];
  const availableModels = selectedFuel && brand ? fuelBrandModels[selectedFuel][brand] ?? [] : [];

  const matchedShops = useMemo(
    () =>
      filterShops(featuredShops, {
        fuel: fuel || undefined,
        brand: brand || undefined,
        problem: problem || undefined,
      }),
    [fuel, brand, problem],
  );

  useEffect(() => {
    if (brand && model && year) {
      stepThreeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [brand, model, year]);

  useEffect(() => {
    if (problem) {
      searchRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [problem]);

  return (
    <section className="space-y-4">
      {showFeatured && (
        <div className="space-y-3">
          <h2 className="text-lg font-bold">محلات مميزة</h2>
          {featuredShops.slice(0, 3).map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      )}

      {showWizard && (
        <>
          <Card className="space-y-3">
            <h2 className="text-base font-bold">من فضلك اختر نوع الوقود...</h2>
            <div className="grid grid-cols-2 gap-2">
              {fuelOptions.map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={fuel === option ? "primary" : "outline"}
                  onClick={() => {
                    setFuel(option);
                    setBrand("");
                    setModel("");
                    setYear("");
                    setProblem("");
                    setShowFeatured(false);
                    stepTwoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>

          <Card ref={stepTwoRef} className="space-y-3">
            <h2 className="text-base font-bold">تفاصيل السيارة</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <SelectField
                id="brand"
                label="النوع"
                value={brand}
                onChange={(value) => {
                  setBrand(value);
                  setModel("");
                }}
                options={availableBrands}
                placeholder="اختر النوع"
                disabled={!fuel}
              />
              <SelectField
                id="model"
                label="الفئة"
                value={model}
                onChange={setModel}
                options={availableModels}
                placeholder="اختر الفئة"
                disabled={!brand}
              />
            </div>
            <SelectField
              id="year"
              label="سنة الصنع"
              value={year}
              onChange={setYear}
              options={years}
              placeholder="اختر السنة"
              disabled={!model}
            />
          </Card>

          <Card ref={stepThreeRef} className="space-y-3">
            <h2 className="text-base font-bold">نوع المشكلة</h2>
            <div className="grid grid-cols-2 gap-2">
              {problemOptions.slice(0, 4).map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={problem === option ? "primary" : "outline"}
                  onClick={() => setProblem(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <Button
              type="button"
              variant={problem === UNKNOWN_PROBLEM_TEXT ? "primary" : "outline"}
              className="w-full"
              onClick={() => setProblem(UNKNOWN_PROBLEM_TEXT)}
            >
              {UNKNOWN_PROBLEM_TEXT}
            </Button>
          </Card>

          <Card ref={searchRef} className="space-y-2">
            <Button
              type="button"
              className="w-full"
              onClick={() => {
                setShowResults(true);
                setShowWizard(false);
              }}
              disabled={!fuel || !brand || !model || !year || !problem}
            >
              ابحث عن المحلات ({matchedShops.length})
            </Button>
          </Card>
        </>
      )}

      {showResults && (
        <div className="space-y-3">
          <h2 className="text-lg font-bold">نتائج البحث</h2>
          {matchedShops.length > 0 ? (
            matchedShops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
          ) : (
            <Card>لا توجد نتائج مطابقة حالياً.</Card>
          )}
        </div>
      )}
    </section>
  );
}
