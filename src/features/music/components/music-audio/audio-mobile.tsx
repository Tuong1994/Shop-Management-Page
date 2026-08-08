import { forwardRef, type ForwardRefRenderFunction } from "react"
import { FastForward, Pause, Play, Rewind } from "lucide-react"
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player"
import useAudio from "../../hooks/use-audio"

interface AudioMobileProps {
  onPrevTrack?: () => void
  onNextTrack?: () => void
}

const AudioMobile: ForwardRefRenderFunction<AudioPlayer, AudioMobileProps> = ({ onPrevTrack, onNextTrack }, ref) => {
  const { playList, currentTrackIdx, setIsPlaying } = useAudio()

  return (
    <>
      <AudioPlayer
        autoPlay
        muted
        ref={ref}
        src={playList[currentTrackIdx]?.src}
        layout="horizontal"
        className="audio-player-custom audio-player-mobile p-0!"
        showFilledVolume
        showSkipControls={false}
        showJumpControls={false}
        customAdditionalControls={[]}
        customProgressBarSection={[RHAP_UI.CURRENT_TIME]}
        customVolumeControls={[RHAP_UI.VOLUME]}
        customIcons={{
          play: <Play size={12} />,
          pause: <Pause size={12} />,
          forward: <FastForward size={12} />,
          rewind: <Rewind size={12} />,
        }}
        onClickPrevious={onPrevTrack}
        onClickNext={onNextTrack}
        onEnded={onNextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </>
  )
}

export default forwardRef(AudioMobile)
