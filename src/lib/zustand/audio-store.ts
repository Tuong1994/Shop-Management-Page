import { create, type StateCreator } from "zustand"
import type { AudioList } from "@/models/audio/audio.type"

const playList: AudioList = [
  {
    id: "1",
    name: "music - 1",
    author: "author",
    img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
  },
  {
    id: "2",
    name: "music - 2",
    author: "author",
    img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
  },
  {
    id: "3",
    name: "music - 3",
    author: "author",
    img: "https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
  },
  {
    id: "4",
    name: "music - 4",
    author: "author",
    img: "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
  },
  {
    id: "5",
    name: "music - 5",
    author: "author",
    img: "https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
  },
]

type AudioState = {
  playList: AudioList
  open: boolean
  isPlaying: boolean
  currentTrackId: string | null
  setOpen: (open: boolean) => void
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentTrackId: (id: string | null) => void
}

const store: StateCreator<AudioState> = (set) => ({
  playList,
  open: false,
  isPlaying: false,
  currentTrackId: null,
  setOpen: (open: boolean) => set(() => ({ open })),
  setIsPlaying: (isPlaying: boolean) => set(() => ({ isPlaying })),
  setCurrentTrackId: (id: string | null) => set(() => ({ currentTrackId: id })),
})

const useAudioStore = create(store);

export default useAudioStore