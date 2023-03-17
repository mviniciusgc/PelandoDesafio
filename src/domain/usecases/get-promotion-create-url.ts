export interface GetPromotionURL {
  get: (params: GetPromotionURL.Params) => Promise<GetPromotionURL.Result>
}
export namespace GetPromotionURL {
  export type Params = {
    url: string
  }

  export type Result = {
    exist: boolean
  }
}
