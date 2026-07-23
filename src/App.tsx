import { translateText } from './utils/translate';
import { useState, useEffect } from 'react';
import {
  Droplets,
  FlaskConical,
  AlertTriangle,
  Building2,
  ShieldCheck,
  Leaf,
  ChevronUp,
} from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import Logo from '@/components/Logo';
import NutritionSection from '@/components/NutritionSection';
import PackagingSection from '@/components/PackagingSection';
import { wineData } from '@/config/wineData';
import { translations, disclaimers, type LanguageCode } from '@/i18n/translations';

function App() {
  const [lang, setLang] = useState<LanguageCode>('it');
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-800">
      {/* ===== Header / Language selector ===== */}
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-bold tracking-tight text-stone-800">
              {t.eLabel}
            </span>
          </div>
          <LanguageSelector current={lang} onChange={setLang} />
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 pb-16">
        {/* ===== Hero / Wine identity ===== */}
        <section className="pt-8 pb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            {t.winery}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-stone-900">
            {wineData.wineryName}
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-stone-300" />
          <p className="mt-4 text-lg font-medium text-stone-700">
            {wineData.designation}
          </p>
          <p className="mt-1 text-stone-500">
            {t.vintage} {wineData.vintage}
          </p>
        </section>

        {/* ===== Product specs ===== */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-sm">
              <Droplets className="mx-auto h-6 w-6 text-stone-400" />
              <p className="mt-2 text-xs uppercase tracking-wide text-stone-400">
                {t.alcoholContent}
              </p>
              <p className="mt-1 text-lg font-bold text-stone-900">
                {wineData.alcoholVolume}
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-4 text-center shadow-sm">
              <FlaskConical className="mx-auto h-6 w-6 text-stone-400" />
              <p className="mt-2 text-xs uppercase tracking-wide text-stone-400">
                {t.volume}
              </p>
              <p className="mt-1 text-lg font-bold text-stone-900">
                {wineData.bottleVolume}
              </p>
            </div>
          </div>

          {/* Allergens highlight */}
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                {t.allergens}
              </p>
              <p className="text-amber-800 font-medium">
                <AutoTranslate text={wineData.allergens} targetLang={lang} />
              </p>
            </div>
          </div>
        </section>

        {/* ===== Ingredients ===== */}
        <section className="mb-6 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-stone-400" />
            <h2 className="text-lg font-bold text-stone-900">{t.ingredients}</h2>
          </div>
          <p className="text-gray-700">
            <AutoTranslate text={wineData.ingredients} targetLang={lang} />
          </p>
        </section>

        {/* ===== Nutrition declaration ===== */}
        <section className="mb-6 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-stone-400" />
            <h2 className="text-lg font-bold text-stone-900">
              {t.nutritionDeclaration}
            </h2>
          </div>
          <NutritionSection lang={lang} />
        </section>

        {/* ===== Environmental labelling ===== */}
        <section className="mb-6 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Leaf className="h-5 w-5 text-stone-400" />
            <h2 className="text-lg font-bold text-stone-900">
              {t.environmentalLabeling}
            </h2>
          </div>
          <PackagingSection lang={lang} />
        </section>

        {/* ===== Bottler ===== */}
        <section className="mb-6 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-stone-400" />
            <h2 className="text-lg font-bold text-stone-900">{t.bottler}</h2>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
                {t.bottlerName}
              </p>
              <p className="text-sm font-medium text-stone-700">
                {wineData.bottler.name}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
                {t.bottlerAddress}
              </p>
              <p className="text-sm text-stone-600">{wineData.bottler.address}</p>
            </div>
          </div>
        </section>

        {/* ===== Compliance disclaimer ===== */}
        <section className="mb-8 rounded-3xl border border-stone-200 bg-stone-50 p-5">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h2 className="text-sm font-bold uppercase tracking-wide text-stone-700">
              {t.compliance}
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-stone-500">
            {disclaimers[lang]}
          </p>
          <p className="mt-2 text-xs font-medium text-stone-400">
            Reg. (UE) 2021/2117
          </p>
        </section>

        {/* ===== Back to top ===== */}
        <button
          onClick={scrollToTop}
          className="mx-auto flex items-center gap-1.5 text-sm font-medium text-stone-400 transition hover:text-stone-600"
        >
          <ChevronUp className="h-4 w-4" />
          {t.backToTop}
        </button>
      </main>
    </div>
  );
}

// Componente di supporto per tradurre qualsiasi testo al volo
function AutoTranslate({ text, targetLang }: { text: string; targetLang: string }) {
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    let isMounted = true;
    if (targetLang === 'it') {
      setTranslatedText(text);
      return;
    }

    translateText(text, targetLang).then((res) => {
      if (isMounted) setTranslatedText(res);
    });

    return () => { isMounted = false; };
  }, [text, targetLang]);

  return <>{translatedText}</>;
}

export default App;
