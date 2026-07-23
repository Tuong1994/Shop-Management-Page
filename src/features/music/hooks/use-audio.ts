import useAudioStore from "@/lib/zustand/audio-store"
import { useShallow } from "zustand/shallow"

const useAudio = () => {
  const { playList, open, isPlaying, currentTrackId, setOpen, setIsPlaying, setCurrentTrackId } =
    useAudioStore(
      useShallow((state) => ({
        playList: state.playList,
        open: state.open,
        isPlaying: state.isPlaying,
        currentTrackId: state.currentTrackId,
        setOpen: state.setOpen,
        setIsPlaying: state.setIsPlaying,
        setCurrentTrackId: state.setCurrentTrackId,
      }))
    )
  return { playList, open, isPlaying, currentTrackId, setOpen, setIsPlaying, setCurrentTrackId }
}

export default useAudio
