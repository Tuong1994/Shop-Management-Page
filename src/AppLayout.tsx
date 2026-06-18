import type { FC } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { ELocale } from "./locale/enum"
import { Outlet } from "react-router"
import { localStorageKeys } from "./common/local-storage-key"
import Header from "./components/page/header"
import useLocale from "./locale/use-locale"

const AppLayout: FC = () => {
  const { locale, setLang, navigateWithLocale } = useLocale()

  const navigate = useNavigate()

  const location = useLocation()

  const supportedLocales = [ELocale.EN, ELocale.VN]

  const defaultLocale = ELocale.EN

  useEffect(() => {
    let currentLocale = locale as ELocale

    // If locale doesn't exist → redirect back to default + locale
    if (!currentLocale) {
      navigate(`/${defaultLocale}${location.pathname}`, { replace: true })
      return
    }

    // Save current locale to localStorage API
    if (typeof window !== undefined) {
      localStorage.setItem(localStorageKeys.LOCALE, JSON.stringify(currentLocale))
    }

    // If current locale invalid → redirect back to default
    if (!supportedLocales.includes(currentLocale)) navigateWithLocale(defaultLocale)
  }, [locale, navigate, location.pathname])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
