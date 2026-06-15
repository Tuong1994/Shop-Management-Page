import { useShallow } from "zustand/shallow"
import useLocaleStore from "@/store/locale-store"

const useLocale = () => {
  const { lang, locale, setLang } = useLocaleStore(
    useShallow((state) => ({
      lang: state.lang,
      locale: state.locale,
      setLang: state.setLang,
    }))
  )
  return { lang, locale, setLang }
}

export default useLocale
