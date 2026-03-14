export const i18nData = {
  en: {
    t: "today",
    y: "yesterday",
    wa: "week ago",
    ma: "month ago",
    ya: "year ago",
    label: "English",
  },
  pt: {
    t: "hoje",
    y: "ontem",
    wa: "semana passada",
    ma: "mês passado",
    ya: "ano passado",
    label: "Português",
  },
  ru: {
    t: "сегодня",
    y: "вчера",
    wa: "неделю назад",
    ma: "месяц назад",
    ya: "год назад",
    label: "Русский",
  },
  it: {
    t: "oggi",
    y: "ieri",
    wa: "una settimana fa",
    ma: "un mese fa",
    ya: "un anno fa",
    label: "Italiano",
  }, 
  ua: {
    t: "сьогодні",
    y: "вчора",
    wa: "тиждень тому",
    ma: "місяць тому",
    ya: "рік тому",
    label: "Українська",
  },
  de: {
    t: "heute",
    y: "gestern",
    wa: "vor 1 Woche",
    ma: "vor 1 Monat",
    ya: "vor 1 Jahr",
    label: "Deutsch",
  },
  "zh-cn": {
    t: "今天",
    y: "昨天",
    wa: "一周前",
    ma: "一个月前",
    ya: "一年前",
    label: "中文",
  },
  fr: {
    t: "aujourd'hui",
    y: "hier",
    wa: "il y a une semaine",
    ma: "il y a un mois",
    ya: "il y a un an",
    label: "Français",
  },
  es: {
    t: "hoy",
    y: "ayer",
    wa: "hace una semana",
    ma: "hace un mes",
    ya: "hace un año",
    label: "Español",
  },
  sr: {
    t: "danas",
    y: "juče",
    wa: "pre nedelju dana",
    ma: "pre mesec dana",
    ya: "pre godinu dana",
    label: "Srpski",
  },
} as const;

export type LocaleKey = keyof typeof i18nData;
export type Translation = Omit<(typeof i18nData)["en"], "label">;

export const LOCALE_OPTIONS = Object.entries(i18nData).map(([value, data]) => ({
  value: value as LocaleKey,
  label: data.label,
}));

export default i18nData;
