import { useState } from 'react';
import { Wine } from 'lucide-react';
import { wineData } from '@/config/wineData';

/**
 * Mostra il logo personalizzato definito in wineData.logoUrl.
 * Se l'immagine non esiste o fallisce il caricamento (onError),
 * mostra automaticamente l'icona del calice di vino di default.
 *
 * L'immagine viene contenuta (object-contain) e centrata in un
 * cerchio di 36px, senza sformarsi.
 */
export default function Logo() {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = wineData.logoUrl && !logoFailed;

  return (
    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-stone-800">
      {showLogo ? (
        <img
          src={wineData.logoUrl}
          alt="Logo"
          onError={() => setLogoFailed(true)}
          className="h-full w-full object-contain p-0.5"
        />
      ) : (
        <Wine className="h-5 w-5 text-amber-50" />
      )}
    </div>
  );
}
