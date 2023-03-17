import { PromotionCreateService } from '@/data/services'
import { CreatePromotionRepository,CrawlerRepository,GetPromotionURL } from '@/infra/repositories'
import { PromotionCreateController } from '@/presentation/controllers'

import { Controller } from '@/presentation/contracts'

export const makePromotionCreateController = (): Controller => {
  const repo = new CreatePromotionRepository()
  const repoCrawler = new CrawlerRepository()
  const repoGetPromotionURL = new GetPromotionURL()
  const promotionService = new PromotionCreateService(repo,repoCrawler,repoGetPromotionURL)
  return new PromotionCreateController(promotionService)
}
