import { PromotionCreateRepository } from '@/data/contracts'
import { Promotion } from '@/infra/models/promotion'
import { AppDataSource } from '@/main/typeorm/config'

export class CreatePromotionRepository implements PromotionCreateRepository {
  async create (params: PromotionCreateRepository.Params): Promise<PromotionCreateRepository.Result> {
    const userRepository = AppDataSource.getRepository(Promotion)
    let promotion = new Promotion()

    promotion = await this.adapterCreate(promotion, params)

    await userRepository.manager.save(promotion)

    delete promotion.created_at
    delete promotion.updated_at
    delete promotion.promotion_id
    return promotion
  }

  async adapterCreate (promotion: Promotion, params: PromotionCreateRepository.Params): Promise<Promotion> {
    promotion.title = params.title
    promotion.price = params.preco
    promotion.description = params?.descricao
    promotion.url = params.url
    promotion.img = params.img

    return promotion
  }
}
