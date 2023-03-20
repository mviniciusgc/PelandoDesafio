export interface PromotionCreateRepository {
  create: (params: PromotionCreateRepository.Params) => Promise<PromotionCreateRepository.Result>
}
export namespace PromotionCreateRepository {
  export type Params = {
    url: string
    img: string
    title: string
    preco: string
    descricao: string
  }

  export type Result = {
    url: string
    img: string
    title: string
    price: string
    description: string
  }
}
