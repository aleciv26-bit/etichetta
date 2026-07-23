/**
 * ============================================================
 *  TRADUZIONI INTERFACCIA (i18n) — 24 LINGUE UFFICIALI UE
 * ============================================================
 *
 *  Questo file contiene le traduzioni delle DICITURE FISSE
 *  dell'interfaccia (titoli delle sezioni, etichette, disclaimer)
 *  per tutte le 24 lingue ufficiali dell'Unione Europea.
 *
 *  Codici lingua (ISO 639-1):
 *    bg  Български      cs  Čeština       da  Dansk
 *    de  Deutsch         el  Ελληνικά      en  English
 *    es  Español         et  Eesti         fi  Suomi
 *    fr  Français        ga  Gaeilge       hr  Hrvatski
 *    hu  Magyar          it  Italiano      lt  Lietuvių
 *    lv  Latviešu        mt  Malti         nl  Nederlands
 *    pl  Polski          pt  Português     ro  Română
 *    sk  Slovenčina      sl  Slovenščina   sv  Svenska
 *
 *  Per aggiungere una nuova lingua:
 *    1. Aggiungi il codice in `LanguageCode`
 *    2. Aggiungi un blocco in `translations` e in `disclaimers`
 *    3. Aggiungi la lingua in `languages` (selettore)
 * ============================================================
 */

export type LanguageCode =
  | 'bg' | 'cs' | 'da' | 'de' | 'el' | 'en' | 'es' | 'et'
  | 'fi' | 'fr' | 'ga' | 'hr' | 'hu' | 'it' | 'lt' | 'lv'
  | 'mt' | 'nl' | 'pl' | 'pt' | 'ro' | 'sk' | 'sl' | 'sv';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  /** Endonym — nome della lingua nella lingua stessa */
  endonym: string;
  flag: string;
}

/** Lingue disponibili nel selettore (24 lingue UE) */
export const languages: LanguageOption[] = [
  { code: 'bg', label: 'Bulgaro',        endonym: 'Български',     flag: '🇧🇬' },
  { code: 'cs', label: 'Ceco',           endonym: 'Čeština',       flag: '🇨🇿' },
  { code: 'da', label: 'Danese',         endonym: 'Dansk',         flag: '🇩🇰' },
  { code: 'de', label: 'Tedesco',        endonym: 'Deutsch',        flag: '🇩🇪' },
  { code: 'el', label: 'Greco',           endonym: 'Ελληνικά',       flag: '🇬🇷' },
  { code: 'en', label: 'Inglese',        endonym: 'English',        flag: '🇬🇧' },
  { code: 'es', label: 'Spagnolo',       endonym: 'Español',        flag: '🇪🇸' },
  { code: 'et', label: 'Estone',         endonym: 'Eesti',          flag: '🇪🇪' },
  { code: 'fi', label: 'Finlandese',     endonym: 'Suomi',          flag: '🇫🇮' },
  { code: 'fr', label: 'Francese',       endonym: 'Français',       flag: '🇫🇷' },
  { code: 'ga', label: 'Irlandese',      endonym: 'Gaeilge',         flag: '🇮🇪' },
  { code: 'hr', label: 'Croato',         endonym: 'Hrvatski',       flag: '🇭🇷' },
  { code: 'hu', label: 'Ungherese',      endonym: 'Magyar',         flag: '🇭🇺' },
  { code: 'it', label: 'Italiano',       endonym: 'Italiano',       flag: '🇮🇹' },
  { code: 'lt', label: 'Lituano',        endonym: 'Lietuvių',       flag: '🇱🇹' },
  { code: 'lv', label: 'Lettone',        endonym: 'Latviešu',       flag: '🇱🇻' },
  { code: 'mt', label: 'Maltese',        endonym: 'Malti',          flag: '🇲🇹' },
  { code: 'nl', label: 'Olandese',       endonym: 'Nederlands',     flag: '🇳🇱' },
  { code: 'pl', label: 'Polacco',        endonym: 'Polski',         flag: '🇵🇱' },
  { code: 'pt', label: 'Portoghese',     endonym: 'Português',      flag: '🇵🇹' },
  { code: 'ro', label: 'Rumeno',         endonym: 'Română',         flag: '🇷🇴' },
  { code: 'sk', label: 'Slovacco',       endonym: 'Slovenčina',     flag: '🇸🇰' },
  { code: 'sl', label: 'Sloveno',        endonym: 'Slovenščina',    flag: '🇸🇮' },
  { code: 'sv', label: 'Svedese',        endonym: 'Svenska',        flag: '🇸🇪' },
];

export interface UITranslations {
  winery: string;
  product: string;
  designation: string;
  vintage: string;
  alcoholContent: string;
  volume: string;
  allergens: string;
  nutritionDeclaration: string;
  nutritionPer100ml: string;
  energy: string;
  fats: string;
  ofWhichSaturatedFats: string;
  carbohydrates: string;
  ofWhichSugars: string;
  proteins: string;
  salt: string;
  ingredients: string;
  ingredientsList: string;
  environmentalLabeling: string;
  packagingDisposal: string;
  component: string;
  material: string;
  disposalInstructions: string;
  bottler: string;
  bottlerName: string;
  bottlerAddress: string;
  compliance: string;
  backToTop: string;
  eLabel: string;
}

/**
 * Dizionario delle diciture fisse dell'interfaccia.
 * Ogni chiave corrisponde a un elemento visibile (titolo sezione,
 * etichetta, pulsante). I valori sono tradotti per ciascuna lingua.
 */
export const translations: Record<LanguageCode, UITranslations> = {
  bg: {
    winery: 'Винарна', product: 'Продукт', designation: 'Обозначение', vintage: 'Реколта',
    alcoholContent: 'Алкохолно съдържание', volume: 'Обем', allergens: 'Алергени',
    nutritionDeclaration: 'Хранителна декларация', nutritionPer100ml: 'Хранителни стойности на 100 ml',
    energy: 'Енергия', fats: 'Мазнини', ofWhichSaturatedFats: 'от които наситени',
    carbohydrates: 'Въглехидрати', ofWhichSugars: 'от които захари', proteins: 'Протеини', salt: 'Сол',
    ingredients: 'Съставки', ingredientsList: 'Списък на съставките',
    environmentalLabeling: 'Екологично етикутиране', packagingDisposal: 'Изхвърляне на опаковки',
    component: 'Компонент', material: 'Материал', disposalInstructions: 'Инструкции за изхвърляне',
    bottler: 'Бутилировач', bottlerName: 'Име на фирмата', bottlerAddress: 'Адрес',
    compliance: 'Нормативно съответствие', backToTop: 'Нагоре', eLabel: 'Е-Етикет',
  },
  cs: {
    winery: 'Vinařství', product: 'Produkt', designation: 'Označení', vintage: 'Ročník',
    alcoholContent: 'Obsah alkoholu', volume: 'Objem', allergens: 'Alergeny',
    nutritionDeclaration: 'Výživové prohlášení', nutritionPer100ml: 'Výživové hodnoty na 100 ml',
    energy: 'Energie', fats: 'Tuky', ofWhichSaturatedFats: 'z toho nasycené',
    carbohydrates: 'Sacharidy', ofWhichSugars: 'z toho cukry', proteins: 'Bílkoviny', salt: 'Sůl',
    ingredients: 'Složení', ingredientsList: 'Seznam složek',
    environmentalLabeling: 'Ekologické značení', packagingDisposal: 'Likvidace obalů',
    component: 'Součást', material: 'Materiál', disposalInstructions: 'Pokyny k likvidaci',
    bottler: 'Stáčecí závod', bottlerName: 'Obchodní jméno', bottlerAddress: 'Adresa',
    compliance: 'Regulační shoda', backToTop: 'Nahoru', eLabel: 'E-Štítek',
  },
  da: {
    winery: 'Vingård', product: 'Produkt', designation: 'Betegnelse', vintage: 'Årgang',
    alcoholContent: 'Alkoholindhold', volume: 'Volumen', allergens: 'Allergener',
    nutritionDeclaration: 'Næringsdeklaration', nutritionPer100ml: 'Næringsværdier pr. 100 ml',
    energy: 'Energi', fats: 'Fedt', ofWhichSaturatedFats: 'heraf mættet',
    carbohydrates: 'Kulhydrater', ofWhichSugars: 'heraf sukker', proteins: 'Protein', salt: 'Salt',
    ingredients: 'Ingredienser', ingredientsList: 'Ingrediensliste',
    environmentalLabeling: 'Miljømærkning', packagingDisposal: 'Bortskaffelse af emballage',
    component: 'Komponent', material: 'Materiale', disposalInstructions: 'Bortskaffelsesinstruktioner',
    bottler: 'Tappestation', bottlerName: 'Firmanavn', bottlerAddress: 'Adresse',
    compliance: 'Lovmæssig overholdelse', backToTop: 'Til top', eLabel: 'E-Mærkat',
  },
  de: {
    winery: 'Weingut', product: 'Produkt', designation: 'Bezeichnung', vintage: 'Jahrgang',
    alcoholContent: 'Alkoholgehalt', volume: 'Volumen', allergens: 'Allergene',
    nutritionDeclaration: 'Nährwertdeklaration', nutritionPer100ml: 'Nährwerte pro 100 ml',
    energy: 'Energie', fats: 'Fett', ofWhichSaturatedFats: 'davon gesättigte Fettsäuren',
    carbohydrates: 'Kohlenhydrate', ofWhichSugars: 'davon Zucker', proteins: 'Eiweiß', salt: 'Salz',
    ingredients: 'Zutaten', ingredientsList: 'Zutatenliste',
    environmentalLabeling: 'Umweltkennzeichnung', packagingDisposal: 'Verpackungsent­sorgung',
    component: 'Bestandteil', material: 'Material', disposalInstructions: 'Entsorgungshinweise',
    bottler: 'Abfüller', bottlerName: 'Firmenname', bottlerAddress: 'Adresse',
    compliance: 'Rechtliche Konformität', backToTop: 'Nach oben', eLabel: 'E-Label',
  },
  el: {
    winery: 'Αμπελώνας', product: 'Προϊόν', designation: 'Ονομασία', vintage: 'Εσοδεία',
    alcoholContent: 'Αλκοολικός τίτλος', volume: 'Όγκος', allergens: 'Αλλεργιογόνα',
    nutritionDeclaration: 'Διατροφική δήλωση', nutritionPer100ml: 'Διατροφικές τιμές ανά 100 ml',
    energy: 'Ενέργεια', fats: 'Λιπαρά', ofWhichSaturatedFats: 'εκ των οποίων κορεσμένα',
    carbohydrates: 'Υδατάνθρακες', ofWhichSugars: 'εκ των οποίων σάκχαρα', proteins: 'Πρωτεΐνες', salt: 'Αλάτι',
    ingredients: 'Συστατικά', ingredientsList: 'Κατάλογος συστατικών',
    environmentalLabeling: 'Οικολογική σήμανση', packagingDisposal: 'Διάθεση συσκευασιών',
    component: 'Συστατικό συσκευασίας', material: 'Υλικό', disposalInstructions: 'Οδηγίες διάθεσης',
    bottler: 'Εμφιαλωτής', bottlerName: 'Επωνυμία', bottlerAddress: 'Διεύθυνση',
    compliance: 'Κανονιστική συμμόρφωση', backToTop: 'Επιστροφή επάνω', eLabel: 'E-Ετικέτα',
  },
  en: {
    winery: 'Winery', product: 'Product', designation: 'Designation', vintage: 'Vintage',
    alcoholContent: 'Alcohol content', volume: 'Volume', allergens: 'Allergens',
    nutritionDeclaration: 'Nutrition declaration', nutritionPer100ml: 'Nutritional values per 100 ml',
    energy: 'Energy', fats: 'Fat', ofWhichSaturatedFats: 'of which saturates',
    carbohydrates: 'Carbohydrates', ofWhichSugars: 'of which sugars', proteins: 'Protein', salt: 'Salt',
    ingredients: 'Ingredients', ingredientsList: 'Ingredients list',
    environmentalLabeling: 'Environmental labelling', packagingDisposal: 'Packaging disposal',
    component: 'Component', material: 'Material', disposalInstructions: 'Disposal instructions',
    bottler: 'Bottler', bottlerName: 'Company name', bottlerAddress: 'Address',
    compliance: 'Regulatory compliance', backToTop: 'Back to top', eLabel: 'E-Label',
  },
  es: {
    winery: 'Bodega', product: 'Producto', designation: 'Denominación', vintage: 'Cosecha',
    alcoholContent: 'Grado alcohólico', volume: 'Volumen', allergens: 'Alérgenos',
    nutritionDeclaration: 'Declaración nutricional', nutritionPer100ml: 'Valores nutricionales por 100 ml',
    energy: 'Energía', fats: 'Grasas', ofWhichSaturatedFats: 'de las cuales saturadas',
    carbohydrates: 'Hidratos de carbono', ofWhichSugars: 'de los cuales azúcares', proteins: 'Proteínas', salt: 'Sal',
    ingredients: 'Ingredientes', ingredientsList: 'Lista de ingredientes',
    environmentalLabeling: 'Etiquetado ambiental', packagingDisposal: 'Eliminación de envases',
    component: 'Componente', material: 'Material', disposalInstructions: 'Instrucciones de eliminación',
    bottler: 'Embotellador', bottlerName: 'Razón social', bottlerAddress: 'Dirección',
    compliance: 'Cumplimiento normativo', backToTop: 'Volver arriba', eLabel: 'E-Etiqueta',
  },
  et: {
    winery: 'Veinimõis', product: 'Toode', designation: 'Nimetus', vintage: 'Aastakäik',
    alcoholContent: 'Alkoholisisaldus', volume: 'Maht', allergens: 'Allergeenid',
    nutritionDeclaration: 'Toitumisdeklaratsioon', nutritionPer100ml: 'Toitumisväärtused 100 ml kohta',
    energy: 'Energia', fats: 'Rasvad', ofWhichSaturatedFats: 'millest küllastunud',
    carbohydrates: 'Süsivesikud', ofWhichSugars: 'millest suhkrud', proteins: 'Valgud', salt: 'Sool',
    ingredients: 'Koostisosad', ingredientsList: 'Koostisosade loetelu',
    environmentalLabeling: 'Keskkonnamärgistus', packagingDisposal: 'Pakendite kõrvaldamine',
    component: 'Komponent', material: 'Materjal', disposalInstructions: 'Kõrvaldamisjuhised',
    bottler: 'Pudeliklaasija', bottlerName: 'Ettevõtte nimi', bottlerAddress: 'Aadress',
    compliance: 'Regulatiivne vastavus', backToTop: 'Üles', eLabel: 'E-Silt',
  },
  fi: {
    winery: 'Viinitila', product: 'Tuote', designation: 'Nimitys', vintage: 'Vuosikerta',
    alcoholContent: 'Alkoholipitoisuus', volume: 'Tilavuus', allergens: 'Allergeenit',
    nutritionDeclaration: 'Ravintosisältöilmoitus', nutritionPer100ml: 'Ravintoarvot 100 ml:ta kohti',
    energy: 'Energia', fats: 'Rasvat', ofWhichSaturatedFats: 'josta tyydyttyneet',
    carbohydrates: 'Hiilihydraatit', ofWhichSugars: 'josta sokerit', proteins: 'Proteiini', salt: 'Suola',
    ingredients: 'Ainekset', ingredientsList: 'Ainesosaluettelo',
    environmentalLabeling: 'Ympäristömerkintä', packagingDisposal: 'Pakkausten jätteenkäsittely',
    component: 'Komponentti', material: 'Materiaali', disposalInstructions: 'Jätteenkäsittelyohjeet',
    bottler: 'Pullottaja', bottlerName: 'Yrityksen nimi', bottlerAddress: 'Osoite',
    compliance: 'Säännösten noudattaminen', backToTop: 'Ylös', eLabel: 'E-Merkintä',
  },
  fr: {
    winery: 'Cave', product: 'Produit', designation: 'Dénomination', vintage: 'Millésime',
    alcoholContent: 'Titre alcoométrique', volume: 'Volume', allergens: 'Allergènes',
    nutritionDeclaration: 'Déclaration nutritionnelle', nutritionPer100ml: 'Valeurs nutritionnelles pour 100 ml',
    energy: 'Énergie', fats: 'Matières grasses', ofWhichSaturatedFats: 'dont acides gras saturés',
    carbohydrates: 'Glucides', ofWhichSugars: 'dont sucres', proteins: 'Protéines', salt: 'Sel',
    ingredients: 'Ingrédients', ingredientsList: 'Liste des ingrédients',
    environmentalLabeling: 'Étiquetage environnemental', packagingDisposal: 'Élimination des emballages',
    component: 'Composant', material: 'Matériau', disposalInstructions: 'Instructions d\u2019élimination',
    bottler: 'Embouteilleur', bottlerName: 'Raison sociale', bottlerAddress: 'Adresse',
    compliance: 'Conformité réglementaire', backToTop: 'Haut de page', eLabel: 'E-Étiquette',
  },
  ga: {
    winery: 'Fíonghort', product: 'Táirge', designation: 'Ainmiú', vintage: 'Bliain',
    alcoholContent: 'Ábhar alcóil', volume: 'Imleabhar', allergens: 'Ailléirginí',
    nutritionDeclaration: 'Fógra cothaithe', nutritionPer100ml: 'Luachanna cothaithe do 100 ml',
    energy: 'Fuinneamh', fats: 'Saill', ofWhichSaturatedFats: 'lena sháithshail',
    carbohydrates: 'Carbaihiodráit', ofWhichSugars: 'lena siúcraí', proteins: 'Próitéin', salt: 'Salann',
    ingredients: 'Comhábhair', ingredientsList: 'Liosta comhábhair',
    environmentalLabeling: 'Lipéadú comhshaoil', packagingDisposal: 'Dífhabhtú pacáistithe',
    component: 'Comhpháirt', material: 'Ábhar', disposalInstructions: 'Treoracha dífhabhtaithe',
    bottler: 'Buidéalaitheoir', bottlerName: 'Ainm cuideachta', bottlerAddress: 'Seoladh',
    compliance: 'Comhlíonadh rialachán', backToTop: 'Barr an leathanaigh', eLabel: 'E-Lipéad',
  },
  hr: {
    winery: 'Vinarija', product: 'Proizvod', designation: 'Oznaka', vintage: 'Berba',
    alcoholContent: 'Alkoholni sadržaj', volume: 'Volumen', allergens: 'Alergeni',
    nutritionDeclaration: 'Nutritivna deklaracija', nutritionPer100ml: 'Nutritivne vrijednosti na 100 ml',
    energy: 'Energija', fats: 'Masti', ofWhichSaturatedFats: 'od kojih zasićene',
    carbohydrates: 'Ugljikohidrati', ofWhichSugars: 'od kojih šećeri', proteins: 'Proteini', salt: 'Sol',
    ingredients: 'Sastojci', ingredientsList: 'Popis sastojaka',
    environmentalLabeling: 'Ekološko označavanje', packagingDisposal: 'Odlaganje ambalaže',
    component: 'Komponenta', material: 'Materijal', disposalInstructions: 'Upute za odlaganje',
    bottler: 'Punionica', bottlerName: 'Naziv tvrtke', bottlerAddress: 'Adresa',
    compliance: 'Sukladnost propisima', backToTop: 'Na vrh', eLabel: 'E-Oznaka',
  },
  hu: {
    winery: 'Pince', product: 'Termék', designation: 'Megnevezés', vintage: 'Évjárat',
    alcoholContent: 'Alkoholtartalom', volume: 'Térfogat', allergens: 'Allergének',
    nutritionDeclaration: 'Táplálkozási nyilatkozat', nutritionPer100ml: 'Táplálkozási értékek 100 ml-re',
    energy: 'Energia', fats: 'Zsír', ofWhichSaturatedFats: 'ebből telített',
    carbohydrates: 'Szénhidrát', ofWhichSugars: 'ebből cukor', proteins: 'Fehérje', salt: 'Só',
    ingredients: 'Összetevők', ingredientsList: 'Összetevők listája',
    environmentalLabeling: 'Környezetvédelmi címkézés', packagingDisposal: 'Csomagolóanyag ártalmatlanítása',
    component: 'Komponens', material: 'Anyag', disposalInstructions: 'Ártalmatlanítási útmutató',
    bottler: 'Palackozó', bottlerName: 'Cégnév', bottlerAddress: 'Cím',
    compliance: 'Jogszabályi megfelelés', backToTop: 'Oldal tetejére', eLabel: 'E-Címke',
  },
  it: {
    winery: 'Cantina', product: 'Prodotto', designation: 'Denominazione', vintage: 'Annata',
    alcoholContent: 'Titolo alcolometrico', volume: 'Volume', allergens: 'Allergeni',
    nutritionDeclaration: 'Dichiarazione nutrizionale', nutritionPer100ml: 'Valori nutrizionali per 100 ml',
    energy: 'Energia', fats: 'Grassi', ofWhichSaturatedFats: 'di cui acidi grassi saturi',
    carbohydrates: 'Carboidrati', ofWhichSugars: 'di cui zuccheri', proteins: 'Proteine', salt: 'Sale',
    ingredients: 'Ingredienti', ingredientsList: 'Elenco ingredienti',
    environmentalLabeling: 'Etichettatura ambientale', packagingDisposal: 'Smaltimento imballaggi',
    component: 'Componente', material: 'Materiale', disposalInstructions: 'Istruzioni per lo smaltimento',
    bottler: 'Imbottigliatore', bottlerName: 'Ragione sociale', bottlerAddress: 'Indirizzo',
    compliance: 'Conformità normativa', backToTop: 'Torna su', eLabel: 'E-Label',
  },
  lt: {
    winery: 'Vyninė', product: 'Produktas', designation: 'Pavadinimas', vintage: 'Derliaus metai',
    alcoholContent: 'Alkoholio kiekis', volume: 'Tūris', allergens: 'Alergenai',
    nutritionDeclaration: 'Mitybos deklaracija', nutritionPer100ml: 'Mitybinės vertės 100 ml',
    energy: 'Energija', fats: 'Riebalai', ofWhichSaturatedFats: 'iš kurių sošieji',
    carbohydrates: 'Angliavandeniai', ofWhichSugars: 'iš kurių cukrūs', proteins: 'Baltymai', salt: 'Druska',
    ingredients: 'Sudėtinės dalys', ingredientsList: 'Sudėčių sąrašas',
    environmentalLabeling: 'Aplinkosaugos ženklinimas', packagingDisposal: 'Pakuočių tvarkymas',
    component: 'Komponentas', material: 'Medžiaga', disposalInstructions: 'Tvarkymo instrukcijos',
    bottler: 'Išpildytojas', bottlerName: 'Įmonės pavadinimas', bottlerAddress: 'Adresas',
    compliance: 'Teisės aktų atitiktis', backToTop: 'Į viršų', eLabel: 'E-Etiketė',
  },
  lv: {
    winery: 'Vīndarība', product: 'Produkts', designation: 'Apzīmējums', vintage: 'Ražas gads',
    alcoholContent: 'Spirta saturs', volume: 'Tilpums', allergens: 'Alergēni',
    nutritionDeclaration: 'Uztura deklarācija', nutritionPer100ml: 'Uzturvērtība uz 100 ml',
    energy: 'Enerģija', fats: 'Tauki', ofWhichSaturatedFats: 'no tiem piesātinātie',
    carbohydrates: 'Ogļhidrāti', ofWhichSugars: 'no tiem cukuri', proteins: 'Olbaltumvielas', salt: 'Sāls',
    ingredients: 'Sastāvdaļas', ingredientsList: 'Sastāvdaļu saraksts',
    environmentalLabeling: 'Vides marķējums', packagingDisposal: 'Iepakojuma utilizācija',
    component: 'Komponents', material: 'Materiāls', disposalInstructions: 'Utilizācijas norādījumi',
    bottler: 'Pudeļotājs', bottlerName: 'Uzņēmuma nosaukums', bottlerAddress: 'Adrese',
    compliance: 'Normatīvā atbilstība', backToTop: 'Uz augšu', eLabel: 'E-Etiķete',
  },
  mt: {
    winery: 'Cantina', product: 'Prodott', designation: 'Tismija', vintage: 'Vintaġġ',
    alcoholContent: 'Kontenut tal-alkoħol', volume: 'Volum', allergens: 'Allergeni',
    nutritionDeclaration: 'Dikjarazzjoni nutrittiva', nutritionPer100ml: 'Valuri nutrittivi għal kull 100 ml',
    energy: 'Enerġija', fats: 'Xaħmijiet', ofWhichSaturatedFats: 'minnhom saturi',
    carbohydrates: 'Karboidrati', ofWhichSugars: 'minnhom zokkor', proteins: 'Proteini', salt: 'Melħ',
    ingredients: 'Ingredjenti', ingredientsList: 'Lista ta\u2019 ingredjenti',
    environmentalLabeling: 'Tikkettar ambjentali', packagingDisposal: 'Rimi tal-ippakkjar',
    component: 'Komponent', material: 'Materjal', disposalInstructions: 'Istruzzjonijiet tar-rimi',
    bottler: 'Ditta li tgħammar il-fliexken', bottlerName: 'Isem tal-kumpannija', bottlerAddress: 'Indirizz',
    compliance: 'Konformità regolatorja', backToTop: 'Lura fuq', eLabel: 'E-Tikketta',
  },
  nl: {
    winery: 'Wijngaard', product: 'Product', designation: 'Aanduiding', vintage: 'Oogstjaar',
    alcoholContent: 'Alcoholgehalte', volume: 'Volume', allergens: 'Allergenen',
    nutritionDeclaration: 'Voedingswaardeverklaring', nutritionPer100ml: 'Voedingswaarden per 100 ml',
    energy: 'Energie', fats: 'Vetten', ofWhichSaturatedFats: 'waarvan verzadigde',
    carbohydrates: 'Koolhydraten', ofWhichSugars: 'waarvan suikers', proteins: 'Eiwitten', salt: 'Zout',
    ingredients: 'Ingrediënten', ingredientsList: 'Ingrediëntenlijst',
    environmentalLabeling: 'Milieuetikettering', packagingDisposal: 'Verpakking afval',
    component: 'Onderdeel', material: 'Materiaal', disposalInstructions: 'Afvalinstructies',
    bottler: 'Afvuler', bottlerName: 'Bedrijfsnaam', bottlerAddress: 'Adres',
    compliance: 'Regelgevende naleving', backToTop: 'Naar boven', eLabel: 'E-Label',
  },
  pl: {
    winery: 'Winnica', product: 'Produkt', designation: 'Oznaczenie', vintage: 'Rocznik',
    alcoholContent: 'Zawartość alkoholu', volume: 'Objętość', allergens: 'Alergeny',
    nutritionDeclaration: 'Deklaracja żywieniowa', nutritionPer100ml: 'Wartości odżywcze na 100 ml',
    energy: 'Energia', fats: 'Tłuszcze', ofWhichSaturatedFats: 'w tym nasycone',
    carbohydrates: 'Węglowodany', ofWhichSugars: 'w tym cukry', proteins: 'Białko', salt: 'Sól',
    ingredients: 'Składniki', ingredientsList: 'Lista składników',
    environmentalLabeling: 'Oznakowanie ekologiczne', packagingDisposal: 'Utylizacja opakowań',
    component: 'Komponent', material: 'Materiał', disposalInstructions: 'Instrukcje utylizacji',
    bottler: 'Rozlewacz', bottlerName: 'Nazwa firmy', bottlerAddress: 'Adres',
    compliance: 'Zgodność regulacyjna', backToTop: 'Do góry', eLabel: 'E-Etykieta',
  },
  pt: {
    winery: 'Quinta', product: 'Produto', designation: 'Denominação', vintage: 'Colheita',
    alcoholContent: 'Teor alcoólico', volume: 'Volume', allergens: 'Alérgenos',
    nutritionDeclaration: 'Declaração nutricional', nutritionPer100ml: 'Valores nutricionais por 100 ml',
    energy: 'Energia', fats: 'Gorduras', ofWhichSaturatedFats: 'das quais saturadas',
    carbohydrates: 'Hidratos de carbono', ofWhichSugars: 'dos quais açúcares', proteins: 'Proteínas', salt: 'Sal',
    ingredients: 'Ingredientes', ingredientsList: 'Lista de ingredientes',
    environmentalLabeling: 'Rotulagem ambiental', packagingDisposal: 'Eliminação de embalagens',
    component: 'Componente', material: 'Material', disposalInstructions: 'Instruções de eliminação',
    bottler: 'Engarrafador', bottlerName: 'Nome da empresa', bottlerAddress: 'Endereço',
    compliance: 'Conformidade regulamentar', backToTop: 'Voltar ao topo', eLabel: 'E-Rótulo',
  },
  ro: {
    winery: 'Cramă', product: 'Produs', designation: 'Denumire', vintage: 'Anul recoltării',
    alcoholContent: 'Conținut de alcool', volume: 'Volum', allergens: 'Alergeni',
    nutritionDeclaration: 'Declarație nutrițională', nutritionPer100ml: 'Valori nutriționale la 100 ml',
    energy: 'Energie', fats: 'Grăsimi', ofWhichSaturatedFats: 'din care saturate',
    carbohydrates: 'Glucide', ofWhichSugars: 'din care zaharuri', proteins: 'Proteine', salt: 'Sare',
    ingredients: 'Ingrediente', ingredientsList: 'Lista ingredientelor',
    environmentalLabeling: 'Etichetare ecologică', packagingDisposal: 'Eliminarea ambalajelor',
    component: 'Componentă', material: 'Material', disposalInstructions: 'Instrucțiuni de eliminare',
    bottler: 'Îmbuteliator', bottlerName: 'Denumirea firmei', bottlerAddress: 'Adresă',
    compliance: 'Conformitate reglementară', backToTop: 'Sus', eLabel: 'E-Etichetă',
  },
  sk: {
    winery: 'Vinárstvo', product: 'Produkt', designation: 'Označenie', vintage: 'Ročník',
    alcoholContent: 'Obsah alkoholu', volume: 'Objem', allergens: 'Alergény',
    nutritionDeclaration: 'Výživové vyhlásenie', nutritionPer100ml: 'Výživové hodnoty na 100 ml',
    energy: 'Energia', fats: 'Tuky', ofWhichSaturatedFats: 'z toho nasýtené',
    carbohydrates: 'Sacharidy', ofWhichSugars: 'z toho cukry', proteins: 'Bielkoviny', salt: 'Soľ',
    ingredients: 'Zloženie', ingredientsList: 'Zoznam zložiek',
    environmentalLabeling: 'Ekologické označovanie', packagingDisposal: 'Likvidácia obalov',
    component: 'Súčasť', material: 'Materiál', disposalInstructions: 'Pokyny na likvidáciu',
    bottler: 'Plniareň', bottlerName: 'Obchodný názov', bottlerAddress: 'Adresa',
    compliance: 'Súlad s predpismi', backToTop: 'Hore', eLabel: 'E-Štítok',
  },
  sl: {
    winery: 'Vinska klet', product: 'Izdelek', designation: 'Oznaka', vintage: 'Letnik',
    alcoholContent: 'Vsebnost alkohola', volume: 'Prostornina', allergens: 'Alergeni',
    nutritionDeclaration: 'Hranilna deklaracija', nutritionPer100ml: 'Hranilne vrednosti na 100 ml',
    energy: 'Energija', fats: 'Maščobe', ofWhichSaturatedFats: 'od tega nasičene',
    carbohydrates: 'Ogljikovi hidrati', ofWhichSugars: 'od tega sladkorji', proteins: 'Beljakovine', salt: 'Sol',
    ingredients: 'Sestavine', ingredientsList: 'Seznam sestavin',
    environmentalLabeling: 'Okoljsko označevanje', packagingDisposal: 'Odstranjevanje embalaže',
    component: 'Komponenta', material: 'Material', disposalInstructions: 'Navodila za odstranjevanje',
    bottler: 'Polnilec', bottlerName: 'Ime podjetja', bottlerAddress: 'Naslov',
    compliance: 'Skladnost s predpisi', backToTop: 'Na vrh', eLabel: 'E-Oznaka',
  },
  sv: {
    winery: 'Vingård', product: 'Produkt', designation: 'Beteckning', vintage: 'Årgång',
    alcoholContent: 'Alkoholhalt', volume: 'Volym', allergens: 'Allergener',
    nutritionDeclaration: 'Näringsdeklaration', nutritionPer100ml: 'Näringsvärden per 100 ml',
    energy: 'Energi', fats: 'Fett', ofWhichSaturatedFats: 'varav mättat',
    carbohydrates: 'Kolhydrater', ofWhichSugars: 'varav socker', proteins: 'Protein', salt: 'Salt',
    ingredients: 'Ingredienser', ingredientsList: 'Ingrediensförteckning',
    environmentalLabeling: 'Miljömärkning', packagingDisposal: 'Förpackningsavfall',
    component: 'Komponent', material: 'Material', disposalInstructions: 'Avfallsinstruktioner',
    bottler: 'Buteljerare', bottlerName: 'Företagsnamn', bottlerAddress: 'Adress',
    compliance: 'Regel efterlevnad', backToTop: 'Till toppen', eLabel: 'E-Märkning',
  },
};

/**
 * Disclaimer di conformità al Reg. (UE) 2021/2117
 * per ciascuna delle 24 lingue UE.
 */
export const disclaimers: Record<LanguageCode, string> = {
  bg: 'Тази електронна етикетка отговаря на Регламент (ЕС) 2021/2117. Страницата е без проследяване на данни: не използва бисквитки, анализи или инструменти за профилиране. Не съдържа промоционално или рекламно съдържание.',
  cs: 'Tento elektronický štítek je v souladu s nařízením (EU) 2021/2117. Tato stránka je bez sledování dat: nepoužívá soubory cookie, analytiku ani profilovací nástroje. Neobsahuje žádný propagační ani reklamní obsah.',
  da: 'Denne elektroniske etiket overholder forordning (EU) 2021/2117. Siden er fri for datasporing: den bruger ikke cookies, analytics eller profileringsværktøjer. Den indeholder ingen promoverende eller reklameindhold.',
  de: 'Dieses elektronische Etikett entspricht der Verordnung (EU) 2021/2117. Die Seite ist frei von Datenverfolgung: Sie verwendet keine Cookies, Analytics oder Profiling-Tools. Sie enthält keine Werbe- oder Promotional-Inhalte.',
  el: 'Αυτή η ηλεκτρονική ετικέτα συμμορφώνεται με τον Κανονισμό (ΕΕ) 2021/2117. Η σελίδα είναι απαλλαγμένη από παρακολούθηση δεδομένων: δεν χρησιμοποιεί cookies, αναλυτικά εργαλεία ή εργαλεία προφίλ. Δεν περιέχει προωθητικό ή διαφημιστικό περιεχόμενο.',
  en: 'This electronic label complies with Regulation (EU) 2021/2117. The page is free from data tracking: it does not use cookies, analytics or profiling tools. It contains no promotional or advertising content.',
  es: 'Esta etiqueta electrónica cumple el Reglamento (UE) 2021/2117. La página está libre de seguimiento de datos: no utiliza cookies, analytics ni herramientas de perfilado. No contiene contenido promocional ni publicitario.',
  et: 'See elektrooniline silt vastab määrusele (EL) 2021/2117. Leht on vaba andmete jälgimisest: see ei kasuta küpsiseid, analüütikat ega profileerimistööriistu. See ei sisalda promotsioonilist ega reklaamisisu.',
  fi: 'Tämä sähköinen etiketti noudattaa asetuusta (EU) 2021/2117. Sivusto on vapaa tietojen seurannasta: se ei käytä evästeitä, analytiikkaa tai profilointityökaluja. Se ei sisällä mainos- tai promootiosisältöä.',
  fr: 'Cette étiquette électronique est conforme au Règlement (UE) 2021/2117. La page est exempte de suivi de données : elle n\u2019utilise ni cookies, ni analytics, ni outils de profilage. Elle ne contient aucun contenu promotionnel ou publicitaire.',
  ga: 'Comhlíonann an lipéad leictreonach seo an Rialachán (AE) 2021/2117. Tá an leathanach saor ó rianú sonraí: ní úsáideann sé fianáin, anailísíocht ná uirlisí próifílithe. Níl aon ábhar fuirseach ná fógraí air.',
  hr: 'Ova elektronička oznica sukladna je s Uredbom (EU) 2021/2117. Stranica je lišena praćenja podataka: ne koristi kolačiće, analitiku ni alate za profiliranje. Ne sadrži promotivni ili reklamni sadržaj.',
  hu: 'Ez az elektronikus címke megfelel a 2021/2117. (EU) rendeletnek. Az oldal mentes az adatkövetéstől: nem használ sütiket, analitikát vagy profilozó eszközöket. Nem tartalmaz promóciós vagy reklámtartalmat.',
  it: 'Questa etichetta elettronica è conforme al Regolamento (UE) 2021/2117. La pagina è esente da tracciamento dati: non utilizza cookie, analytics né strumenti di profilazione. È priva di contenuti promozionali o pubblicitari.',
  lt: 'Ši elektroninė etiketė atitinka Reglamentą (ES) 2021/2117. Puslapis neturi duomenų stebėjimo: nenaudoja slapukų, analizės ar profiliavimo įrankių. Jame nėra jokios reklamos ar skelbimų.',
  lv: 'Šī elektroniskā etiķete atbilst Regulai (ES) 2021/2117. Lapa ir bez datu izsekošanas: tā neizmanto sīkdatnes, analītiku vai profilēšanas rīkus. Tajā nav reklāmas vai publicitācijas satura.',
  mt: 'Din it-tikketta elettronika tikkonforma mar-Regolament (UE) 2021/2117. Il-paġna hija eżentata mit-traċċar tad-dejta: ma tużax cookies, analytics jew għodod ta\u2019 profiljar. M’għandhiex kontenut promozzjonali jew reklam.',
  nl: 'Dit elektronische etiket voldoet aan Verordening (EU) 2021/2117. De pagina is vrij van datatracking: het gebruikt geen cookies, analytics of profilingtools. Het bevat geen promotionele of reclameteksten.',
  pl: 'Ta elektroniczna etykieta jest zgodna z rozporządzeniem (UE) 2021/2117. Strona jest wolna od śledzenia danych: nie używa plików cookie, analityki ani narzędzi profilowania. Nie zawiera treści promocyjnych ani reklamowych.',
  pt: 'Esta etiqueta eletrónica está em conformidade com o Regulamento (UE) 2021/2117. A página está isenta de rastreio de dados: não utiliza cookies, analítica ou ferramentas de perfilização. Não contém conteúdo promocional ou publicitário.',
  ro: 'Această etichetă electronică este conformă cu Regulamentul (UE) 2021/2117. Pagina este lipsită de urmărire a datelor: nu folosește cookie-uri, analitici sau instrumente de profilare. Nu conține conținut promoțional sau publicitar.',
  sk: 'Tento elektronický štítok je v súlade s nariadením (EÚ) 2021/2117. Stránka je bez sledovania údajov: nepoužíva cookies, analytiku ani nástroje na profilovanie. Neobsahuje žiadny propagačný ani reklamný obsah.',
  sl: 'Ta elektronska oznaka je v skladu z Uredbo (EU) 2021/2117. Stran je brez sledenja podatkov: ne uporablja piškotkov, analitike ali orodij za profiliranje. Ne vsebuje promocijske ali reklamne vsebine.',
  sv: 'Denna elektroniska etikett överensstämmer med förordning (EU) 2021/2117. Sidan är fri från datauppföljning: den använder inte cookies, analys eller profileringsverktyg. Den innehåller ingen marknadsföring eller reklam.',
};
