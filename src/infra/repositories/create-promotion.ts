import { PromotionCreateRepository } from '@/data/contracts'
import { Promotion } from '@/infra/models/promotion'
import { AppDataSource } from '@/main/typeorm/config'

export class CreatePromotionRepository implements PromotionCreateRepository {
  async create (params: PromotionCreateRepository.Params): Promise<PromotionCreateRepository.Result> {
    const userRepository = AppDataSource.getRepository(Promotion)
    const promotion = new Promotion()

    promotion.title = params.title
    promotion.price = params.preco
    promotion.description = params?.descricao
    promotion.url = params.url
    await userRepository.manager.save(promotion)

    return {
      ...promotion,
      link: promotion.url
    }
  }
}
