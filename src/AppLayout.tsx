import type { FC } from "react"
import { Outlet } from "react-router"
import Header from "./components/page/header"
import AppLocale from "./AppLocale"
import MusicAudio from "./features/music/components/music-audio"

const AppLayout: FC = () => {
  return (
    <AppLocale>
      <Header />
      <Outlet />
      <MusicAudio />
    </AppLocale>
  )
}

export default AppLayout
