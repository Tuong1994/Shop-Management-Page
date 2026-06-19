import { useState, useEffect } from "react";

export const breakpoints = {
  smPhone: 320,
  mdPhone: 480,
  lgPhone: 576,
  smTablet: 667,
  mdTablet: 768,
  lgTablet: 992,
  laptop: 1100,
} as const;

type Viewport = {
  screenWidth: number;
  isSmPhone: boolean;
  isPhone: boolean;
  isLgPhone: boolean;
  isSmTablet: boolean;
  isTablet: boolean;
  isLgTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  isTabletOnly: boolean;
  isDesktopOnly: boolean;
};

const useViewport = (): Viewport => {
  const [viewport, setViewport] = useState<Viewport>({
    screenWidth: 0,
    isSmPhone: false,
    isPhone: false,
    isLgPhone: false,
    isSmTablet: false,
    isTablet: false,
    isLgTablet: false,
    isLaptop: false,
    isDesktop: false,
    isMobile: false,
    isTabletOnly: false,
    isDesktopOnly: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const {
      smPhone,
      mdPhone,
      lgPhone,
      smTablet,
      mdTablet,
      lgTablet,
      laptop,
    } = breakpoints;

    // Định nghĩa các media queries
    const queries = {
      isSmPhone: `(min-width: ${smPhone}px) and (max-width: ${mdPhone - 1}px)`,
      isPhone: `(min-width: ${smPhone}px) and (max-width: ${mdPhone}px)`,
      isLgPhone: `(min-width: ${mdPhone + 1}px) and (max-width: ${lgPhone}px)`,
      isSmTablet: `(min-width: ${lgPhone + 1}px) and (max-width: ${smTablet}px)`,
      isTablet: `(min-width: ${mdPhone + 1}px) and (max-width: ${mdTablet}px)`,
      isLgTablet: `(min-width: ${mdTablet + 1}px) and (max-width: ${lgTablet}px)`,
      isLaptop: `(min-width: ${mdTablet + 1}px) and (max-width: ${laptop}px)`,
      isDesktop: `(min-width: ${laptop + 1}px)`,
    };

    const mediaQueryLists = Object.entries(queries).map(([key, query]) => ({
      key,
      mql: window.matchMedia(query),
    }));

    const updateViewport = () => {
      const newState = {
        screenWidth: window.innerWidth,
        isSmPhone: false,
        isPhone: false,
        isLgPhone: false,
        isSmTablet: false,
        isTablet: false,
        isLgTablet: false,
        isLaptop: false,
        isDesktop: false,
        isMobile: false,
        isTabletOnly: false,
        isDesktopOnly: false,
      } as Viewport;

      mediaQueryLists.forEach(({ key, mql }) => {
        (newState as any)[key] = mql.matches;
      });

      // Helper states
      newState.isMobile = newState.isSmPhone || newState.isPhone || newState.isLgPhone;
      newState.isTabletOnly = newState.isSmTablet || newState.isTablet || newState.isLgTablet;
      newState.isDesktopOnly = newState.isDesktop;

      setViewport(newState);
    };

    // Initial check
    updateViewport();

    // Listen for changes
    const listeners = mediaQueryLists.map(({ mql }) => {
      const handler = () => updateViewport();
      mql.addEventListener("change", handler);
      return { mql, handler };
    });

    return () => {
      listeners.forEach(({ mql, handler }) => {
        mql.removeEventListener("change", handler);
      });
    };
  }, []);

  return viewport;
};

export default useViewport;