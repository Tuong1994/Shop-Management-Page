import { useShallow } from "zustand/shallow"
import useAudioStore from "@/lib/zustand/audio-store"

const useAudio = () => {
  const {
    playList,
    open,
    isPlaying,
    currentTrackId,
    currentTrackIdx,
    setOpen,
    setIsPlaying,
    setCurrentTrackId,
    setCurrentTrackIdx,
  } = useAudioStore(
    useShallow((state) => ({
      playList: state.playList,
      open: state.open,
      isPlaying: state.isPlaying,
      currentTrackId: state.currentTrackId,
      currentTrackIdx: state.currentTrackIdx,
      setOpen: state.setOpen,
      setIsPlaying: state.setIsPlaying,
      setCurrentTrackId: state.setCurrentTrackId,
      setCurrentTrackIdx: state.setCurrentTrackIdx,
    }))
  )
  return {
    playList,
    open,
    isPlaying,
    currentTrackId,
    currentTrackIdx,
    setOpen,
    setIsPlaying,
    setCurrentTrackId,
    setCurrentTrackIdx,
  }
}

export default useAudio
