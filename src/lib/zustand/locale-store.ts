import { create, type StateCreator } from "zustand"
import { ELocale } from "@/locale/constant"
import type { Locale } from "@/locale/type"
import { en } from "@/locale/en"
import { vn } from "@/locale/vn"

interface LocaleState {
  lang: Locale
  locale: ELocale
  setLang: (locale: ELocale) => void
}

const store: StateCreator<LocaleState> = (set) => ({
  lang: en,
  locale: ELocale.EN,
  setLang: (locale) => set(() => ({ locale, lang: locale === ELocale.EN ? en : vn })),
})

const useLocaleStore = create(store)

export default useLocaleStore
