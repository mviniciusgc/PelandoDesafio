export interface GetPromotionURLRepository {
  get: (params: GetPromotionURLRepository.Params) => Promise<GetPromotionURLRepository.Result>
}
export namespace GetPromotionURLRepository {
  export type Params = {
    url: string
  }

  export type Result = {
    promotion_id: number
    title: string
    url: string
    img: string
    description: string
    price: string
    created_at: Date
    updated_at: Date
  }
}
