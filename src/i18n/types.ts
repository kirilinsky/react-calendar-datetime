export interface Translation {
  t: string;
  y: string;
  wa: string;
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
