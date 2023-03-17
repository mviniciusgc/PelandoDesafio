import { PromotionCreate } from '@/domain/usecases'
import { PromotionCreateRepository, CrawlerHandleRepository,GetPromotionURLRepository } from '@/data/contracts'

export class PromotionCreateService implements PromotionCreate {
  constructor (
    private readonly promotionRepository: PromotionCreateRepository,
    private readonly crawlerHandleRepository: CrawlerHandleRepository,
    private readonly getPromotionURLRepository: GetPromotionURLRepository
  ) {}

  async create (params: PromotionCreate.Params): Promise<PromotionCreate.Result> {
    const promotion = await this.getPromotionURLRepository.get({ url: params.url })
 
    if (Object.keys(promotion).length === 0) {
      const resp = await this.crawlerHandleRepository.handle(params.url)
      return this.promotionRepository.create({ preco: resp.price, url: params.url, title: resp.title, descricao: resp.description })
    }
    const dateCreate = new Date(promotion.created_at.toString())
    const dataLimite = new Date(promotion.created_at.toString())
    dataLimite.setHours(+1)
    if (dateCreate > dataLimite) {
      return {
        description: promotion.description,
        link: promotion.url,
        price: promotion.price,
        title: promotion.title
      }
    }
  }
}
