import type { FC } from "react"
import { Outlet } from "react-router"
import Header from "./components/page/header"
import AppLocale from "./AppLocale"

const AppLayout: FC = () => {
  return (
    <AppLocale>
      <Header />
      <Outlet />
    </AppLocale>
  )
}

export default AppLayout
