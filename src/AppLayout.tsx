import { type FC } from "react"
import { Outlet } from "react-router"
import Header from "./components/page/header"
import AppLocale from "./AppLocale"
import MusicAudio from "./features/music/components/music-audio"
import DrawerDraggale from "./components/page/drawer-draggable"

const AppLayout: FC = () => {
  return (
    <AppLocale>
      <Header />
      <Outlet />
      <MusicAudio />
      <DrawerDraggale />
    </AppLocale>
  )
}

export default AppLayout
