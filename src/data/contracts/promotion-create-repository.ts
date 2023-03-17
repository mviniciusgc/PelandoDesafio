export interface PromotionCreateRepository {
  create: (params: PromotionCreateRepository.Params) => Promise<PromotionCreateRepository.Result>
}
export namespace PromotionCreateRepository {
  export type Params = {
    url: string
    title: string
    preco: string
    descricao: string
  }

  export type Result = {
    link: string
    title: string
    price: string
    description: string
  }
}
