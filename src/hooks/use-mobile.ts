import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initial check an toàn hơn
    if (typeof window === "undefined") return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Set lại giá trị hiện tại (đôi khi matchMedia chưa sync)
    setIsMobile(mql.matches)

    mql.addEventListener("change", handleChange)

    return () => {
      mql.removeEventListener("change", handleChange)
    }
  }, [])

  return isMobile
}