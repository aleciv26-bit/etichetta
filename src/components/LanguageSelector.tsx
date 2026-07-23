import { useState, useRef, useEffect, useMemo } from 'react';
import { Globe, ChevronDown, Search } from 'lucide-react';
import { languages, type LanguageCode } from '@/i18n/translations';

interface LanguageSelectorProps {
  current: LanguageCode;
  onChange: (code: LanguageCode) => void;
}

export default function LanguageSelector({ current, onChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentLang = languages.find((l) => l.code === current)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return languages;
    return languages.filter(
      (l) =>
        l.label.toLowerCase().includes(q) ||
        l.endonym.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur transition hover:border-stone-400 hover:bg-white"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 text-stone-500" />
        <span className="text-base leading-none">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.endonym}</span>
        <ChevronDown
          className={`h-4 w-4 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg">
          {/* Search bar */}
          <div className="flex items-center gap-2 border-b border-stone-100 px-3 py-2">
            <Search className="h-4 w-4 shrink-0 text-stone-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search language…"
              className="w-full bg-transparent text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none"
            />
          </div>

          {/* Scrollable language list */}
          <div className="max-h-72 overflow-y-auto py-1">
            {filtered.length === 0 && (
              <p className="px-4 py-3 text-sm text-stone-400">No results</p>
            )}
            {filtered.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onChange(lang.code);
                  setOpen(false);
                  setQuery('');
                }}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition ${
                  lang.code === current
                    ? 'bg-stone-100 font-semibold text-stone-900'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span className="flex-1 text-left">{lang.endonym}</span>
                <span className="text-xs uppercase text-stone-400">{lang.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
