const dictionaries = {
  en: () => import("../messages/en.json").then((module) => module.default),
  pt: () => import("../messages/pt.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "pt") => {
  return dictionaries[locale]()
}