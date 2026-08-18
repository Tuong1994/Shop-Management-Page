export const routerPaths = {
  HOME: "/",
  MARKET: {
    INDEX: "market",
    PRODUCTS: "products",
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
    STAFFS: "staffs",
  },
  BANK: "bank",
  PRICING: "pricing",
  MUSIC: "music",
  AUTH: {
    LOGIN: "login",
    REGISTER: "register",
    FORGOT_PASSWORD: "forgotPassword",
    RESET_PASSWORD: "resetPassword/:token",
  },
} as const
