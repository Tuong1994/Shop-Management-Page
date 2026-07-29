import { useEffect, useRef, useState, type FC } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { Paragraph } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { FastForward, Minus, Pause, Play, Rewind } from "lucide-react"
import { useLocation } from "react-router"
import { getRouteSubname } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import { cn } from "@/lib/utils"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player"
import Image from "@/components/page/image"
import useAudio from "../hooks/use-audio"

const MusicAudio: FC = () => {
  const {
    playList,
    currentTrackId,
    currentTrackIdx,
    isPlaying,
    setCurrentTrackId,
    setCurrentTrackIdx,
    setIsPlaying,
  } = useAudio()

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const location = useLocation()

  const playerRef = useRef<AudioPlayer>(null)

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

  useEffect(() => {
    if (!playerRef.current) return
    const audio = playerRef.current.audio.current
    if (!audio) return
    if (isPlaying) audio.play()
    else audio.pause()
  }, [isPlaying])

  return (
    <Drawer
      modal={false}
      showSwipeHandle
      disablePointerDismissal
      open={currentTrackId !== null}
      onOpenChange={handleCloseAudio}
    >
      <DrawerContent className={cn("transition-[width] delay-75", isCollapsed && "w-50")}>
        <div className="p-3 pt-5">
          <Accordion>
            <AccordionItem>
              <div className="flex items-center gap-8 p-2">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="ghost" onClick={handleCollapse}>
                        <Minus />
                      </Button>
                    }
                  />
                  <TooltipContent>Collapse</TooltipContent>
                </Tooltip>

                <>
                  <Separator orientation="vertical" />
                </>

                <div
                  className={cn(
                    "flex flex-1 items-center gap-8 transition-opacity",
                    isCollapsed && "opacity-0"
                  )}
                >
                  <Separator orientation="vertical" />
                  <Image imgWidth="65px" imgHeight="65px" src={playList[currentTrackIdx]?.img} />
                  <Separator orientation="vertical" />
                  <Paragraph className="text-[16px]">{playList[currentTrackIdx]?.name}</Paragraph>
                  <Separator orientation="vertical" />
                  <div className="flex-1">
                    <AudioPlayer
                      autoPlay
                      muted
                      showFilledVolume
                      showJumpControls={false}
                      showSkipControls={false}
                      ref={playerRef}
                      src={playList[currentTrackIdx]?.src}
                      layout="horizontal-reverse"
                      className="audio-player-custom"
                      customAdditionalControls={[]}
                      customVolumeControls={[]}
                      customProgressBarSection={[]}
                      customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                      customIcons={{
                        play: <Play size={18} />,
                        pause: <Pause size={18} />,
                        forward: <FastForward size={18} />,
                        rewind: <Rewind size={18} />,
                      }}
                      onClickPrevious={handlePrevTrack}
                      onClickNext={handleNextTrack}
                      onEnded={handleNextTrack}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                  </div>

                  {showList && (
                    <>
                      <Separator orientation="vertical" />
                      <AccordionTrigger>List</AccordionTrigger>
                    </>
                  )}
                </div>
              </div>

              {showList && !isCollapsed && (
                <AccordionContent>
                  {playList.map((audio, index) => {
                    const isCurrent = currentTrackId === audio.id
                    return (
                      <Card key={audio.id} className="p-0 not-last:mb-2">
                        <CardContent className="flex items-center justify-center gap-8 p-1">
                          <Image imgWidth="45px" imgHeight="45px" src={audio.img} />
                          <Separator orientation="vertical" />
                          <Paragraph>{audio.name}</Paragraph>
                          <Separator orientation="vertical" />
                          <>
                            {isCurrent && isPlaying ? (
                              <Button variant="secondary" onClick={() => handlePlay(audio.id, false, index)}>
                                <Pause />
                              </Button>
                            ) : (
                              <Button variant="secondary" onClick={() => handlePlay(audio.id, true, index)}>
                                <Play />
                              </Button>
                            )}
                          </>
                        </CardContent>
                      </Card>
                    )
                  })}
                </AccordionContent>
              )}
            </AccordionItem>
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default MusicAudio
