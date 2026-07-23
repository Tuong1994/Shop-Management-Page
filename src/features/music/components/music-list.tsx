import type { ColumnDef } from "@tanstack/react-table"
import type { Audio, AudioList } from "@/models/audio/audio.type"
import { useMemo, type FC } from "react"
import { Button } from "@/components/ui/button"
import { Pause, Play } from "lucide-react"
import Image from "@/components/page/image"
import DataTable from "@/components/page/data-table"
import useLocale from "@/locale/use-locale"
import useAudio from "../hooks/use-audio"

interface MusicListProps {
  playList: AudioList
  onPlay?: (id: string) => void
  onPlayingChange?: (isPlaying: boolean) => void
}

const MusicList: FC<MusicListProps> = ({ playList, onPlay, onPlayingChange }) => {
  const { lang } = useLocale()

  const { currentTrackId, isPlaying, setIsPlaying } = useAudio()

  const handlePlay = (id: string, isPlaying: boolean) => {
    setIsPlaying(isPlaying)
    onPlay?.(id)
    // onPlayingChange?.(isPlaying)
  }

  const columns: ColumnDef<Audio>[] = useMemo(
    () => [
      {
        accessorKey: "img",
        header: () => <div className="font-bold">{lang.common.table.head.image}</div>,
        cell: ({ row }) => <Image src={row.original.img} imgWidth="60px" imgHeight="60px" />,
      },
      {
        accessorKey: "name",
        header: () => <div className="font-bold">Name</div>,
      },
      {
        accessorKey: "writer",
        header: () => <div className="font-bold">Writer</div>,
      },
      {
        id: "action",
        cell: ({ row }) => {
          const isCurrent = currentTrackId === row.original.id
          return (
            <>
              {isCurrent && isPlaying ? (
                <Button variant="secondary" onClick={() => handlePlay(row.original.id, false)}>
                  <Pause size={20} />
                </Button>
              ) : (
                <Button variant="secondary" onClick={() => handlePlay(row.original.id, true)}>
                  <Play size={20} />
                </Button>
              )}
            </>
          )
        },
      },
    ],
    [lang, currentTrackId, isPlaying]
  )

  return <DataTable<Audio> data={playList} columns={columns} />
}

export default MusicList
