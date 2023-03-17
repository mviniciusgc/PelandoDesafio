import { GetPromotionURLRepository } from '@/data/contracts'
import { Promotion } from '@/infra/models/promotion'
import { AppDataSource } from '@/main/typeorm/config'

export class GetPromotionURL implements GetPromotionURLRepository {
  async get (params: GetPromotionURLRepository.Params): Promise<GetPromotionURLRepository.Result> {
    const userRepository = AppDataSource.getRepository(Promotion)

    const promotion = await userRepository.findOneBy({
      url: params.url
    })
    return { ...promotion }
  }
}
