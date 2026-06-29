import type { EFile } from "./enum"

export type UploadError = {
  type: EFile.TYPE | EFile.MAX | EFile.SIZE
  message: string
}
