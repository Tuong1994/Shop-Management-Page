import bank_en from "./bank"
import common_en from "./common"
import header_en from "./header"
import management_en from "./management"
import market_en from "./market"
import music_en from "./music"
import pricing_en from "./pricing"

export const en = {
  common: common_en,
  header: header_en,
  management: management_en,
  market: market_en,
  bank: bank_en,
  pricing: pricing_en,
  music: music_en
}

export type EN = typeof en