export interface Translation {
  t: string;
  y: string;
  wa: string;
  ma: string;
  ya: string;
}

export type LocaleKey =
  | "ru"
  | "en"
  | "ua"
  | "de"
  | "zh-cn"
  | "fr"
  | "es"
  | "sr";

export type I18nData = Record<LocaleKey, Translation> & {
  [key: string]: Translation;
};

const data: I18nData = {
  ru: {
    t: "сегодня",
    y: "вчера",
    wa: "неделю назад",
    ma: "месяц назад",
    ya: "год назад",
  },
  en: {
    t: "today",
    y: "yesterday",
    wa: "week ago",
    ma: "month ago",
    ya: "year ago",
  },
  ua: {
    t: "сьогодні",
    y: "вчора",
    wa: "тиждень тому",
    ma: "місяць тому",
    ya: "рік тому",
  },
  de: {
    t: "heute",
    y: "gestern",
    wa: "vor 1 Woche",
    ma: "vor 1 Monat",
    ya: "vor 1 Jahr",
  },
  "zh-cn": {
    t: "今天",
    y: "昨天",
    wa: "一周前",
    ma: "一个月前",
    ya: "一年前",
  },
  fr: {
    t: "aujourd'hui",
    y: "hier",
    wa: "il y a une semaine",
    ma: "il y a un mois",
    ya: "il y a un an",
  },
  es: {
    t: "hoy",
    y: "ayer",
    wa: "hace una semana",
    ma: "hace un mes",
    ya: "hace un año",
  },
  sr: {
    t: "danas",
    y: "juče",
    wa: "pre nedelju dana",
    ma: "pre mesec dana",
    ya: "pre godinu dana",
  },
};

export default data;
