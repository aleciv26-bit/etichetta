// Cache in memoria per non ritradurre le stesse parole durante la stessa sessione
const translationCache: Record<string, string> = {};

/**
 * Funzione che chiama l'API gratuita di Google Translate
 */
export async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || targetLang === 'it') {
    return text;
  }

  const cacheKey = `${targetLang}_${text}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data && data[0]) {
      const translatedText = data[0].map((item: any) => item[0]).join('');
      translationCache[cacheKey] = translatedText;
      return translatedText;
    }
  } catch (error) {
    console.error("Errore traduzione automatica:", error);
  }

  return text; // Fallback in italiano se fallisce la chiamata
}
