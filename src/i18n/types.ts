export interface Translation {
  y: string;
  t: string; 
  wa: string;
  tm: string;
  ma: string;
  ya: string;
}

export interface I18nLocale extends Translation {
  label: string;
}

export type LocaleKey =
  | "en"
  | "pt"
  | "ru"
  | "it"
  | "ua"
  | "de"
  | "zh-cn"
  | "fr"
  | "es"
  | "sr";
