import { useEffect, useRef, useState, type FC } from "react"
import { useLocation } from "react-router"
import { useViewport } from "@/hooks"
import { cn } from "@/lib/utils"
import { getRouteSubname } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import type { ControlPosition, DraggableData } from "react-draggable"
import AudioPlayer from "react-h5-audio-player"
import AudioDesktop from "./audio-desktop"
import AudioMobile from "./audio-mobile"
import DrawerDraggale from "@/components/page/drawer-draggable"
import useAudio from "../../hooks/use-audio"

const MusicAudio: FC = () => {
  const {
    playList,
    isPlaying,
    currentTrackId,
    currentTrackIdx,
    setCurrentTrackId,
    setCurrentTrackIdx,
    setIsPlaying,
  } = useAudio()

  const { isMobile } = useViewport()

  const location = useLocation()

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const [position, setPosition] = useState<ControlPosition>({ x: 0, y: 0 })

  const playerRef = useRef<AudioPlayer>(null)

  const pathname = getRouteSubname(location)

  const showList = pathname !== routerPaths.MUSIC

  const disabled = !isMobile ? !isCollapsed : false

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
    e.stopPropagation()
    setPosition({ x: data.x, y: data.y })
  }

  useEffect(() => {
    if (!isCollapsed) setPosition({ x: 0, y: 0 })
  }, [isCollapsed])

  useEffect(() => {
    if (!playerRef.current) return
    const audio = playerRef.current.audio.current
    if (!audio) return
    if (isPlaying) audio.play()
    else audio.pause()
  }, [isPlaying])

  return (
    <DrawerDraggale
      className={cn("transition-[width]", isCollapsed && "w-120 min-w-max", isMobile && "w-75")}
      position={position}
      disabled={disabled}
      open={currentTrackId !== null}
      onDrag={handleDrag}
      onClose={handleCloseAudio}
    >
      {!isMobile ? (
        <AudioDesktop
          ref={playerRef}
          isCollapsed={isCollapsed}
          showList={showList}
          onCollapsed={handleCollapse}
          onPrevTrack={handlePrevTrack}
          onNextTrack={handleNextTrack}
          onPlay={handlePlay}
        />
      ) : (
        <AudioMobile ref={playerRef} onPrevTrack={handlePrevTrack} onNextTrack={handleNextTrack} />
      )}
    </DrawerDraggale>
  )
}

export default MusicAudio
