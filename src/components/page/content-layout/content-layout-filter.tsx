import type { FC, ReactNode } from "react"

interface ContentLayoutFilterProps {
  filter?: ReactNode
}

const ContentLayoutFilter: FC<ContentLayoutFilterProps> = ({ filter }) => {
  return <div className="bg-primary-foreground px-2.5 py-2.5 lg:px-16">{filter}</div>
}

export default ContentLayoutFilter
