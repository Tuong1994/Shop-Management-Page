import { create, type StateCreator } from "zustand"
import { ELocale } from "@/locale/enum"
import { en } from "@/locale/en"
import { vn } from "@/locale/vn"
import { localStorageKeys } from "@/common/local-storage-key"
import type { Locale } from "@/locale/type"

interface LocaleState {
  lang: Locale
  locale: ELocale
  setLang: (locale: ELocale) => void
}

const defaultLocale = () => {
  let locale = ELocale.EN
  if(typeof window === undefined) return locale;
  if(localStorage.getItem(localStorageKeys.LOCALE)) {
    locale = JSON.parse(localStorage.getItem(localStorageKeys.LOCALE) ?? ELocale.EN)
  }
  return locale
}

const store: StateCreator<LocaleState> = (set, get) => ({
  lang: en,
  locale: defaultLocale(),
  setLang: (locale) => {
    const currentLocale = get().locale
    if (locale === currentLocale) return
    localStorage.setItem(localStorageKeys.LOCALE, JSON.stringify(locale))
    set(() => ({ locale, lang: locale === ELocale.EN ? en : vn }))
  },
})

const useLocaleStore = create(store)

export default useLocaleStore
