import { wineData } from '@/config/wineData';
import { translations, type LanguageCode } from '@/i18n/translations';

interface NutritionSectionProps {
  lang: LanguageCode;
}

export default function NutritionSection({ lang }: NutritionSectionProps) {
  const t = translations[lang];
  const n = wineData.nutrition;

  const rows: { label: string; value: string; indent?: boolean }[] = [
    { label: t.energy, value: `${n.energyKj} / ${n.energyKcal}` },
    { label: t.fats, value: n.fats },
    { label: t.ofWhichSaturatedFats, value: n.saturatedFats, indent: true },
    { label: t.carbohydrates, value: n.carbs },
    { label: t.ofWhichSugars, value: n.sugars, indent: true },
    { label: t.proteins, value: n.proteins },
    { label: t.salt, value: n.salt },
  ];

  return (
    <div>
      <div className="mb-3 text-right">
        <span className="text-sm font-medium text-stone-500">
          {t.nutritionPer100ml}
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-stone-200">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between px-4 py-3 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/80'
            } ${idx === 0 ? 'border-b-2 border-stone-300' : 'border-b border-stone-100 last:border-b-0'}`}
          >
            <span
              className={`text-sm text-stone-700 ${
                row.indent ? 'pl-4 text-stone-500' : 'font-medium'
              }`}
            >
              {row.label}
            </span>
            <span
              className={`text-sm ${
                row.indent ? 'text-stone-500' : 'font-semibold text-stone-900'
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
