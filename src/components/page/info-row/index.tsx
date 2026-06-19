import { forwardRef, type ForwardRefRenderFunction, type HTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  name?: ReactNode
  descript?: ReactNode
  nameProps?: HTMLAttributes<HTMLDivElement>
  descriptProps?: HTMLAttributes<HTMLDivElement>
}

const InfoRow: ForwardRefRenderFunction<HTMLDivElement, InfoRowProps> = (
  { className, name = "Name", descript = "Descript", nameProps, descriptProps, ...restProps },
  ref
) => {
  const defaultClassName = cn("mb-2 flex min-w-max items-center justify-between", className)

  const nameDefaultClassName = cn("font-semibold", nameProps?.className)

  const descriptDefaultClassName = cn("font-semibold", descriptProps?.className)

  return (
    <div ref={ref} {...restProps} className={defaultClassName}>
      <div {...nameProps} className={nameDefaultClassName}>
        {name}
      </div>
      <div {...descriptProps} className={descriptDefaultClassName}>
        {descript}
      </div>
    </div>
  )
}

export default forwardRef(InfoRow)
