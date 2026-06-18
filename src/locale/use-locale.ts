import { useShallow } from "zustand/shallow"
import { useNavigate, useParams } from "react-router"
import { useLocation } from "react-router"
import type { ELocale } from "./enum"
import useLocaleStore from "@/lib/zustand/locale-store"

const useLocale = () => {
  const { locale } = useParams()

  const navigate = useNavigate()

  const location = useLocation()

  const { lang, setLang } = useLocaleStore(
    useShallow((state) => ({
      lang: state.lang,
      setLang: state.setLang,
    }))
  )

  const navigateWithLocale = (newLocale?: ELocale) => {
    const localeParam = newLocale ?? locale

    const pathWithoutLocale = location.pathname.replace(/^\/[^/]+/, "") || "/"

    const newPath = `/${localeParam}${pathWithoutLocale}`

    navigate(newPath, { replace: true })
  }

  return { lang, locale: locale as ELocale, setLang, navigateWithLocale }
}

export default useLocale
