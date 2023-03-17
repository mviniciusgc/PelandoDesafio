import { Timestamp } from 'typeorm'

export interface GetPromotionURLRepository {
  get: (params: GetPromotionURLRepository.Params) => Promise<GetPromotionURLRepository.Result>
}
export namespace GetPromotionURLRepository {
  export type Params = {
    url: string
  }

  export type Result = {
    id: number
    title: string
    url: string
    description: string
    price: string
    created_at: Timestamp
    updated_at: Timestamp
  }
}
