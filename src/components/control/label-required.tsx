import type { FC } from "react"
import { FieldLabel } from "../ui/field"

const LabelRequired: FC<React.ComponentProps<typeof FieldLabel>> = ({ children, ...restProps }) => {
  return (
    <FieldLabel {...restProps}>
      {children}
      <span className="text-destructive">*</span>
    </FieldLabel>
  )
}

export default LabelRequired
