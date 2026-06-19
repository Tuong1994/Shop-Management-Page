import type { FC, ReactNode } from "react"

interface ContentLayoutBottomProps {
  bottomContent?: ReactNode
}

const ContentLayoutBottom: FC<ContentLayoutBottomProps> = ({ bottomContent }) => {
  return <div className="bg-primary-foreground px-2.5 py-2.5 lg:px-16">{bottomContent}</div>
}

export default ContentLayoutBottom
