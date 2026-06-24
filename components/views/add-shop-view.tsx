"use client";

import { useMemo, useState } from "react";

import { SelectField } from "@/components/ui/select-field";
import { ToggleChipGroup } from "@/components/ui/toggle-chip-group";
import { areasByGovernorate, governorates } from "@/lib/constants";

const fuelOptions = ["بنزين", "كهرباء", "هايبرد", "ديزل", "أعمل في كل الأنواع"];
const fieldOptions = ["ميكانيك", "كهرباء", "بودي", "دهان", "أعمل في كل المجالات"];
const originOptions = ["أمريكي", "ياباني", "كوري", "صيني", "ألماني", "أوروبي آخر", "أعمل في كل الأنواع"];

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

export function AddShopView() {
  const [fuels, setFuels] = useState<string[]>([]);
  const [fields, setFields] = useState<string[]>([]);
  const [origins, setOrigins] = useState<string[]>([]);
  const [governorate, setGovernorate] = useState("");
  const [area, setArea] = useState("");

  const areaOptions = useMemo(() => areasByGovernorate[governorate] ?? [], [governorate]);

  return (
    <section className="space-y-4">
      <p className="rounded-2xl border bg-card p-4 text-sm leading-7">
        وسّع شغلك مع سبير! أضف محلك الآن وخلّي أصحاب السيارات يندلّوا عليك ويصلولك بكل سهولة.
      </p>

      <div className="space-y-2">
        <h2 className="font-bold">أنواع الوقود</h2>
        <ToggleChipGroup options={fuelOptions} values={fuels} onToggle={(value) => setFuels(toggleValue(fuels, value))} />
      </div>

      <div className="space-y-2">
        <h2 className="font-bold">المجالات</h2>
        <ToggleChipGroup options={fieldOptions} values={fields} onToggle={(value) => setFields(toggleValue(fields, value))} />
      </div>

      <div className="space-y-2">
        <h2 className="font-bold">الأصول</h2>
        <ToggleChipGroup
          options={originOptions}
          values={origins}
          onToggle={(value) => setOrigins(toggleValue(origins, value))}
        />
      </div>

      <div className="space-y-3 rounded-2xl border bg-card p-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="shopName" className="text-sm font-medium">
            اسم المحل
          </label>
          <input id="shopName" className="h-11 rounded-xl border bg-background px-3" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="shopPhone" className="text-sm font-medium">
            الهاتف
          </label>
          <input id="shopPhone" type="tel" className="h-11 rounded-xl border bg-background px-3" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="shopImage" className="text-sm font-medium">
            صورة المحل
          </label>
          <input id="shopImage" type="file" accept="image/*" className="rounded-xl border bg-background p-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 rounded-2xl border bg-card p-4 sm:grid-cols-2">
        <SelectField
          id="governorate"
          label="المحافظة"
          value={governorate}
          onChange={(value) => {
            setGovernorate(value);
            setArea("");
          }}
          options={governorates}
          placeholder="اختر المحافظة"
        />
        <SelectField
          id="area"
          label="المنطقة"
          value={area}
          onChange={setArea}
          options={areaOptions}
          placeholder={governorate ? "اختر المنطقة" : "اختر المحافظة أولاً"}
          disabled={!governorate}
        />
      </div>
    </section>
  );
}
