import { PromotionCreate } from '@/domain/usecases'

export class PromotionCreateSpy implements PromotionCreate {
  params: PromotionCreate.Params
  
  result = {
    link: 'https://www.fake.com.br/cadeira-de-escritorio-giratoria-preta-fortt/',
    title: 'Celular',
    price: 'R$ 172,99',
    description: 'Sansung galaxy'
  }

  async create (params: PromotionCreate.Params): Promise<PromotionCreate.Result> {
    this.params = params
    return this.result
  }
}
