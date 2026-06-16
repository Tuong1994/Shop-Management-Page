import common_vn from "./common"
import header_vn from "./header"
import management_vn from "./management"
import market_vn from "./market"

export const vn = {
  common: common_vn,
  header: header_vn,
  management: management_vn,
  market: market_vn
}

export type VN = typeof vn
