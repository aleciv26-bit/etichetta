import { Recycle } from 'lucide-react';
import { wineData } from '@/config/wineData';
import { translations, type LanguageCode } from '@/i18n/translations';

interface PackagingSectionProps {
  lang: LanguageCode;
}

export default function PackagingSection({ lang }: PackagingSectionProps) {
  const t = translations[lang];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-stone-500">
        <Recycle className="h-5 w-5" />
        <p className="text-sm">{t.packagingDisposal}</p>
      </div>

      <div className="space-y-3">
        {wineData.packaging.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-stone-200 bg-stone-50/60 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="font-semibold text-stone-800">
                  {item.name} — {item.material}
                </p>
                <p className="mt-0.5 text-sm text-stone-500">
                  {t.component}: {item.name} · {t.material}: {item.material}
                </p>
              </div>
              <span className="shrink-0 rounded-lg bg-emerald-100 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">
                {item.code}
              </span>
            </div>
            <div className="mt-3 border-t border-stone-200/70 pt-2.5">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
                {t.disposalInstructions}
              </p>
              <p className="mt-1 text-sm text-stone-600">
                {item.disposal[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
