import { create, type StateCreator } from "zustand"
import { ELocale } from "@/locale/enum"
import { en } from "@/locale/en"
import { vn } from "@/locale/vn"
import { localStorageKeys } from "@/common/local-storage-key"
import { persist, type StorageValue } from "zustand/middleware"
import type { Locale } from "@/locale/type"

type LocaleState = {
  lang: Locale
  locale: ELocale
  setLang: (locale: ELocale) => void
}

export type LocalePersist = StorageValue<LocaleState>

const getLocale = () => {
  let locale = ELocale.EN
  if (typeof window === "undefined") return locale
  if (localStorage.getItem(localStorageKeys.LOCALE)) {
   const persistLocale = JSON.parse(localStorage.getItem(localStorageKeys.LOCALE) ?? "{}") as LocalePersist
   locale = persistLocale.state?.locale ?? ELocale.EN
  }
  return locale
}

const defaultLocale = getLocale()

const store: StateCreator<LocaleState> = (set) => ({
  lang: defaultLocale === ELocale.EN ? en : vn,
  locale: defaultLocale,
  setLang: (locale) => set(() => ({ locale, lang: locale === ELocale.EN ? en : vn })),
})

const useLocaleStore = create(
  persist(store, {
    name: localStorageKeys.LOCALE,
    partialize: (state) => ({ locale: state.locale }),
  })
)

export default useLocaleStore
