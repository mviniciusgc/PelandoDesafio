export interface PromotionCreate {
  create: (params: PromotionCreate.Params) => Promise<PromotionCreate.Result>
}
export namespace PromotionCreate {
  export type Params = {
    url: string
  }

  export type Result = {
    link: string
    title: string
    price: string
    description: string
  }
}
