import type { FC } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { ELocale } from "./locale/enum"
import { Outlet } from "react-router"
import Header from "./components/page/header"
import useLocale from "./locale/use-locale"

const AppLayout: FC = () => {
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

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
