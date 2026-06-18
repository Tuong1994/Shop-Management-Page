import { forwardRef, type ForwardRefRenderFunction, type ReactNode } from "react"
import { Link, useParams, type LinkProps } from "react-router"
import { ELocale } from "./enum"

interface LocaleLinkProps extends LinkProps {
  children?: ReactNode
}

const LocaleLink: ForwardRefRenderFunction<HTMLAnchorElement, LocaleLinkProps> = (
  { children, to = "", ...restProps },
  ref
) => {
  const { locale } = useParams()

  const currentLocale: ELocale = (locale as ELocale) || ELocale.EN

  // Xử lý cả hai trường hợp: to có / hoặc không có /
  const getPrefixedPath = (target: string | Partial<{ pathname: string }>) => {
    if (typeof target === "string") {
      const path = target.startsWith("/") ? target : `/${target}`
      return `/${currentLocale}${path === "/" ? "" : path}`
    }
    // Nếu to là object
    return {
      ...target,
      pathname: `/${currentLocale}${target.pathname?.startsWith("/") ? target.pathname : `/${target.pathname || ""}`}`
    }
  }

  return (
    <Link ref={ref} {...restProps} to={getPrefixedPath(to)}>
      {children}
    </Link>
  )
}

export default forwardRef(LocaleLink)
