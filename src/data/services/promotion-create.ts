import { PromotionCreate } from '@/domain/usecases'
import { PromotionCreateRepository, CrawlerHandleRepository,GetPromotionURLRepository } from '@/data/contracts'

export class PromotionCreateService implements PromotionCreate {
  constructor (
    private readonly promotionRepository: PromotionCreateRepository,
    private readonly crawlerHandleRepository: CrawlerHandleRepository,
    private readonly getPromotionURLRepository: GetPromotionURLRepository
  ) {}

  async create (params: PromotionCreate.Params): Promise<PromotionCreate.Result> {
    let data: number | null
    data = null
    const promotion = await this.getPromotionURLRepository.get({ url: params.url })

    if (Object.keys(promotion).length > 0) {
      const dataSegundos = new Date(promotion.created_at.toString()).getSeconds()
      data = new Date().getSeconds() - dataSegundos
    }
    
    if (data === null || (data != null && data > 60)) {
      const resp = await this.crawlerHandleRepository.handle(params.url)
      return await this.promotionRepository.create({ preco: resp.price, url: params.url, title: resp.title, descricao: resp.description, img: resp.img })
    }
    return {
      title: promotion.title,
      price: promotion.price,
      description: promotion.description,
      url: promotion.url,
      img: promotion.img
    }
  }
}
