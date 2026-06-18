import { forwardRef, type ForwardRefRenderFunction, type ReactNode } from "react"
import { Link, type LinkProps } from "react-router"
import { ELocale } from "./enum"
import useLocale from "./use-locale"

interface LocaleLinkProps extends LinkProps {
  children?: ReactNode
}

const LocaleLink: ForwardRefRenderFunction<HTMLAnchorElement, LocaleLinkProps> = (
  { children, to = "", ...restProps },
  ref
) => {
  const { locale } = useLocale()

  const currentLocale: ELocale = (locale as ELocale) || ELocale.EN

  // handle 2 case: to with / or without  /
  const getPrefixedPath = (target: string | Partial<{ pathname: string }>) => {
    if (typeof target === "string") {
      const path = target.startsWith("/") ? target : `/${target}`
      return `/${currentLocale}${path === "/" ? "" : path}`
    }
    // If to is object
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
