/**
 * ============================================================
 *  CONFIGURAZIONE ETICHETTA ELETTRONICA DEL VINO (E-Label)
 *  Conforme al Regolamento (UE) 2021/2117
 * ============================================================
 *
 *  In questo file puoi modificare TUTTI i dati del vino.
 *  Le diciture fisse dell'interfaccia (titoli delle sezioni,
 *  etichette, disclaimer) sono gestite nel file:
 *    src/i18n/translations.ts
 *
 *  Le traduzioni del disclaimer di conformità si trovano in:
 *    src/i18n/translations.ts  →  `disclaimers`
 *
 *  Le istruzioni di smaltimento per ogni componente
 *  dell'imballaggio sono definite qui sotto, con una voce
 *  per ciascuna delle 24 lingue ufficiali dell'UE.
 *
 *  I dati specifici del vino (nome, annata, ingredienti, ecc.)
 *  sono uguali per tutte le lingue. Se desideri tradurre
 *  anche i dati del vino, puoi trasformare ciascun campo in
 *  un Record<LanguageCode, string>.
 * ============================================================
 */

import type { LanguageCode } from '@/i18n/translations';

export interface PackagingComponent {
  /** Nome del componente, es. "Bottiglia", "Tappo" */
  name: string;
  /** Codice di identificazione del materiale, es. "GL 71" */
  code: string;
  /** Descrizione del materiale, es. "Vetro verde" */
  material: string;
  /** Istruzione di raccolta differenziata per ciascuna lingua UE */
  disposal: Record<LanguageCode, string>;
}

export interface WineData {
  /* --- Logo personalizzato --- */
  /** Percorso del logo nella cartella public, es. "/logo.png". Lasciare vuoto per usare l'icona di default. */
  logoUrl: string;

  /* --- Dati Cantina --- */
  wineryName: string;
  wineName: string;
  designation: string;
  vintage: string;

  /* --- Caratteristiche del prodotto --- */
  alcoholVolume: string; // es. "13,5% vol"
  bottleVolume: string; // es. "750 ml"
  allergens: string; // es. "Contiene solfiti"

  /* --- Ingredienti --- */
  ingredients: string;

  /* --- Valori nutrizionali per 100 ml --- */
  nutrition: {
    energyKj: string; // es. "310 kJ"
    energyKcal: string; // es. "75 kcal"
    fats: string; // Grassi
    saturatedFats: string; // di cui acidi grassi saturi
    carbs: string; // Carboidrati
    sugars: string; // di cui zuccheri
    proteins: string; // Proteine
    salt: string; // Sale
  };

  /* --- Etichettatura ambientale (raccolta differenziata) --- */
  packaging: PackagingComponent[];

  /* --- Dati imbottigliatore --- */
  bottler: {
    name: string;
    address: string;
  };
}

export const wineData: WineData = {
  /* ============================================================
   *  LOGO PERSONALIZZATO
   *  Posiziona il file (es. logo.png) nella cartella `public/`
   *  e inserisci qui il percorso, es. "/logo.png".
   *  Se il file non esiste o non carica, viene mostrata
   *  automaticamente l'icona del calice di vino.
   * ============================================================ */
  logoUrl: '/logo.png',

  /* ============================================================
   *  DATI CANTINA
   * ============================================================ */
  wineryName: 'NOME CANTINA',
  wineName: 'Vino Rosso',
  designation: 'DENOMINAZIONE DI ORIGINE CONTROLLATA',
  vintage: '2023',

  /* ============================================================
   *  CARATTERISTICHE DEL PRODOTTO
   * ============================================================ */
  alcoholVolume: '13,5% vol',
  bottleVolume: '750 ml',
  allergens: 'Contiene solfiti',

  /* ============================================================
   *  INGREDIENTI
   *  Elencare in ordine decrescente di quantità.
   * ============================================================ */
  ingredients:
    'Uva, regolatori di acidità (acido tartarico), conservanti e antiossidanti (SOLFITI / Anidride solforosa)',

  /* ============================================================
   *  VALORI NUTRIZIONALI PER 100 ml
   * ============================================================ */
  nutrition: {
    energyKj: '310 kJ',
    energyKcal: '75 kcal',
    fats: '0 g',
    saturatedFats: '0 g',
    carbs: '1,5 g',
    sugars: '0,8 g',
    proteins: '0 g',
    salt: '0 g',
  },

  /* ============================================================
   *  ETICHETTATURA AMBIENTALE - RACCOLTA DIFFERENZIATA
   *  Ogni componente dell'imballaggio con codice materiale
   *  e istruzione di smaltimento in 24 lingue UE.
   * ============================================================ */
  packaging: [
    {
      name: 'Bottiglia',
      code: 'GL 71',
      material: 'Vetro verde',
      disposal: {
        bg: 'Събирайте в стъкло / Разделно събиране на стъкло',
        cs: 'Odevzdejte do skla / Tříděný sběr skla',
        da: 'Indsamles i glas / Glas til separat indsamling',
        de: 'Glas-Recycling / Glas getrennt sammeln',
        el: 'Συλλογή στο γυαλί / Διαχωριστική συλλογή γυαλιού',
        en: 'Collect in glass / Glass separate collection',
        es: 'Recoger en vidrio / Recogida selectiva de vidrio',
        et: 'Koguge klaasi / Klaasi eraldi kogumine',
        fi: 'Kerää lasiin / Lasin erilliskeräys',
        fr: 'Collecter dans le verre / Collecte sélective du verre',
        ga: 'Bailigh i ngloine / Bailiúchán scartha gloine',
        hr: 'Odložite u staklo / Odvojeno prikupljanje stakla',
        hu: 'Gyűjtse az üvegbe / Az üveg külön gyűjtése',
        it: 'Raccogliere nel vetro / Raccolta differenziata del vetro',
        lt: 'Surinkite į stiklą / Atskirą stiklo rinkimą',
        lv: 'Vāciet stiklā / Stikla atsevišķa vākšana',
        mt: 'Iġbor fiċ-ċirasa / Ġbir separat taċ-ċirasa',
        nl: 'Inzamelen bij glas / Gescheiden inzameling van glas',
        pl: 'Wyrzuć do szkła / Zbieranie szkła osobno',
        pt: 'Colocar no vidro / Recolha seletiva de vidro',
        ro: 'Colectați în sticlă / Colectare separată a sticlei',
        sk: 'Odovzdajte do skla / Triedený zber skla',
        sl: 'Odložite v steklo / Ločeno zbiranje stekla',
        sv: 'Samla in i glas / Separat insamling av glas',
      },
    },
    {
      name: 'Tappo',
      code: 'FOR 51',
      material: 'Sughero',
      disposal: {
        bg: 'Изхвърлете в разделно събиране на корк или органични отпадъци',
        cs: 'Odevzdejte do tříděného sběru korku nebo bioodpadu',
        da: 'Indsaml i kork til separat indsamling eller bioaffald',
        de: 'In der Kork- oder Bioabfall-Sammlung entsorgen',
        el: 'Συλλογή στη διαχωριστική συλλογή φελλού ή οργανικών αποβλήτων',
        en: 'Collect in cork separate collection or organic waste',
        es: 'Recoger en la recogida selectiva de corcho o residuos orgánicos',
        et: 'Korgi eraldi kogumine või orgaaniliste jäätmete hulka',
        fi: 'Kerää korkkiin erilliskeräys tai biojätteeseen',
        fr: 'Collecter dans la collecte sélective du liège ou des déchets organiques',
        ga: 'Bailigh i gcorcaigh scartha nó in ábhar orgánach',
        hr: 'Odložite u odvojeno prikupljanje pluta ili biorazgradivog otpada',
        hu: 'Gyűjtse a parafa vagy a biológiai hulladék külön gyűjtésébe',
        it: 'Raccogliere nella raccolta differenziata del sughero o dell\u2019organico',
        lt: 'Išmeskite į kamščių ar bioatliekų atskirą rinkimą',
        lv: 'Izmetiet korķa atsevišķajā vākšanā vai organiskajos atkritumos',
        mt: 'Iġbor fil-kork jew fir-riżidwi organiċi',
        nl: 'Inzamelen bij kurk of bio-afval',
        pl: 'Wyrzuć do korka lub bioodpadów',
        pt: 'Colocar na recolha seletiva de cortiça ou resíduos orgânicos',
        ro: 'Colectați în colectarea separată a plutelor sau a deșeurilor organice',
        sk: 'Odovzdajte do triedeného zberu korku alebo bioodpadu',
        sl: 'Odložite v ločeno zbiranje plute ali bioloških odpadkov',
        sv: 'Samla in kork separat eller som biologiskt avfall',
      },
    },
    {
      name: 'Capsula',
      code: 'C/ALU 90',
      material: 'Alluminio',
      disposal: {
        bg: 'Изхвърлете в разделно събиране на метали/пластмаси',
        cs: 'Odevzdejte do tříděného sběru kovů/plastů',
        da: 'Indsaml i metal/plast til separat indsamling',
        de: 'In der Metall/Kunststoff-Sammlung entsorgen',
        el: 'Συλλογή στη διαχωριστική συλλογή μετάλλων/πλαστικών',
        en: 'Collect in metal/plastic separate collection',
        es: 'Recoger en la recogida selectiva de metales/plásticos',
        et: 'Koguge metallide/plastikute eraldi kogumises',
        fi: 'Kerää metalliin/muoviin erilliskeräys',
        fr: 'Collecter dans la collecte sélective des métaux/plastiques',
        ga: 'Bailigh i miotal/plaisteach bailiúchán scartha',
        hr: 'Odložite u odvojeno prikupljanje metala/plastike',
        hu: 'Gyűjtse a fém/műanyag külön gyűjtésébe',
        it: 'Raccogliere nella raccolta differenziata dei metalli/plastica',
        lt: 'Išmeskite į metalų/plastiko atskirą rinkimą',
        lv: 'Izmetiet metālu/plastmasu atsevišķajā vākšanā',
        mt: 'Iġbor fil-metall/plastik ġbir separat',
        nl: 'Inzamelen bij metaal/plastic',
        pl: 'Wyrzuć do metali/tworzyw sztucznych',
        pt: 'Colocar na recolha seletiva de metais/plásticos',
        ro: 'Colectați în colectarea separată a metalelor/plasticelor',
        sk: 'Odovzdajte do triedeného zberu kovov/plastov',
        sl: 'Odložite v ločeno zbiranje kovin/plastike',
        sv: 'Samla in metall/plast separat',
      },
    },
  ],

  /* ============================================================
   *  DATI IMBOTTIGLIATORE
   * ============================================================ */
  bottler: {
    name: 'Nome Azienda Agricola S.r.l.',
    address: 'Via del Vigneto 10, 50022 Greve in Chianti (FI) - Italia',
  },
};
