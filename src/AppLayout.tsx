import type { FC } from "react"
import { Outlet } from "react-router"
import Header from "./components/page/header"

const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
