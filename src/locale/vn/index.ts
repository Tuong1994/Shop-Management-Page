import bank_vn from "./bank"
import common_vn from "./common"
import header_vn from "./header"
import management_vn from "./management"
import market_vn from "./market"
import music_vn from "./music"
import pricing_vn from "./pricing"
import product_vn from "./product"

export const vn = {
  common: common_vn,
  header: header_vn,
  management: management_vn,
  market: market_vn,
  bank: bank_vn,
  pricing: pricing_vn,
  music: music_vn,
  product: product_vn
}

export type VN = typeof vn
