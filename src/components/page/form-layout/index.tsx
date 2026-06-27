import type { FC, ReactNode } from "react"

interface FormLayoutProps {
  left?: ReactNode
  right?: ReactNode
}

const FormLayout: FC<FormLayoutProps> = ({ left, right }) => {
  return (
    <form className="grid w-full grid-cols-3 gap-2">
      <div className="col-span-2">{left}</div>
      <div className="col-span-1">{right}</div>
    </form>
  )
}

export default FormLayout
