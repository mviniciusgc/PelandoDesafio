import { Promotion } from '@/infra/models/promotion'

export class AppDataSourceSpy {
  params: Promotion
  result: Promotion = {
    url: 'https://www.fake.com.br/cadeira-de-escritorio-giratoria-preta-fortt/',
    img: 'https://www.fake.com.br/image/',
    title: 'Celular',
    price: 'R$ 172,99',
    description: 'Sansung galaxy',
    promotion_id: 123,
    created_at: new Date(),
    updated_at: new Date()
  }

  async getRepository (params: Promotion): Promise<Promotion> {
    this.params = params
    return this.result
  }
  
  async manager (): Promise<any> {
    return null
  }
}
