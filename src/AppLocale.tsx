import { useEffect, type FC, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router"
import { ELocale } from "./locale/enum"
import useLocale from "./locale/use-locale"

interface AppLocaleProps {
  children?: ReactNode
}

const AppLocale: FC<AppLocaleProps> = ({ children }) => {
    const { locale: currentLocale, setLang, navigateWithLocale } = useLocale()

  const navigate = useNavigate()

  const location = useLocation()

  const supportedLocales = [ELocale.EN, ELocale.VN]

  const defaultLocale = ELocale.EN

  useEffect(() => {
    // If locale doesn't exist → redirect back to default + locale
    if (!currentLocale) {
      setLang(defaultLocale)
      navigateWithLocale(defaultLocale)
      return
    }

    // If current locale invalid → redirect back to default
    if (!supportedLocales.includes(currentLocale)) {
      setLang(defaultLocale)
      navigateWithLocale(defaultLocale)
      return
    }

    setLang(currentLocale)
  }, [currentLocale, navigate, location.pathname, setLang, navigateWithLocale])

  return <>{children}</>
}

export default AppLocale
