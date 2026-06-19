import type { FC, ReactNode } from "react"

interface ContentLayoutActionsProps {
  actions?: ReactNode;
}

const ContentLayoutActions: FC<ContentLayoutActionsProps> = ({ actions }) => {
  return <div>{actions}</div>
}

export default ContentLayoutActions
