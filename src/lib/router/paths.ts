export const routerPaths = {
  HOME: "/",
  MARKET: {
    INDEX: "market",
    PRODUCTS: 'products',
    FURNITURES: "furnitures",
    PAINTS: "paints",
    FLOOR: "floor",
    TOOLS: "tools",
    VEHICLES: "vehicles",

  },
  MANAGEMENT: {
    INDEX: "management",
    BILLS: "bills",
    GROWTH: "growth",
    STORAGE: "storage",
    HIRING: "hiring",
  },
  BANK: "bank",
  PRICING: "pricing",
  MUSIC: "music",
  AUTH_SIGN_IN: "/auth/signIn",
  AUTH_FORGOT_PASSWORD: "/auth/forgotPassword",
  AUTH_RESET_PASSWORD: "/auth/resetPassword/:token",
} as const
