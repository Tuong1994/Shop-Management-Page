import type { FC, ReactNode } from "react"

interface ContentLayoutActionsProps {
  actions?: ReactNode;
}

const ContentLayoutActions: FC<ContentLayoutActionsProps> = ({ actions }) => {
  return <div className="">{actions}</div>
}

export default ContentLayoutActions
