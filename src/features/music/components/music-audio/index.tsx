import { useEffect, useState, type FC } from "react"
import { useLocation } from "react-router"
import { useViewport } from "@/hooks"
import { cn } from "@/lib/utils"
import { getRouteSubname } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import type { ControlPosition, DraggableData } from "react-draggable"
import AudioDesktop from "./audio-desktop"
import AudioMobile from "./audio-mobile"
import DrawerDraggale from "@/components/page/drawer-draggable"
import useAudio from "../../hooks/use-audio"

const MusicAudio: FC = () => {
  const { playList, currentTrackId, currentTrackIdx, setCurrentTrackId, setCurrentTrackIdx, setIsPlaying } =
    useAudio()

  const { isMobile } = useViewport()

  const location = useLocation()

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const [position, setPosition] = useState<ControlPosition>({ x: 0, y: 0 })

  const pathname = getRouteSubname(location)

  const showList = pathname !== routerPaths.MUSIC

  const handlePlay = (id: string, isPlaying: boolean, idx: number) => {
    setIsPlaying(isPlaying)
    setCurrentTrackId(id)
    setCurrentTrackIdx(idx)
  }

  const handleCloseAudio = () => {
    setCurrentTrackId(null)
    setCurrentTrackIdx(-1)
    setIsPlaying(false)
  }

  const handlePrevTrack = () => {
    let idx = currentTrackIdx
    setCurrentTrackIdx(idx === 0 ? playList.length - 1 : idx - 1)
  }

  const handleNextTrack = () => {
    let idx = currentTrackIdx
    setCurrentTrackIdx(idx < playList.length - 1 ? idx + 1 : 0)
  }

  const handleCollapse = () => setIsCollapsed(!isCollapsed)

  const handleDrag = (e: MouseEvent, data: DraggableData) => {
    e.preventDefault()
    setPosition({ x: data.x, y: data.y })
  }

  useEffect(() => {
    if (!isCollapsed) setPosition({ x: 0, y: 0 })
  }, [isCollapsed])

  return (
    <DrawerDraggale
      className={cn("transition-[width]", isCollapsed && "w-120 min-w-max")}
      position={position}
      disabled={!isCollapsed}
      open={currentTrackId !== null}
      onDrag={handleDrag}
      onClose={handleCloseAudio}
    >
      <div className="p-3 pt-5">
        {!isMobile ? (
          <AudioDesktop
            isCollapsed={isCollapsed}
            showList={showList}
            onCollapsed={handleCollapse}
            onPrevTrack={handlePrevTrack}
            onNextTrack={handleNextTrack}
            onPlay={handlePlay}
          />
        ) : (
          <AudioMobile />
        )}
      </div>
    </DrawerDraggale>
  )
}

export default MusicAudio
