import { PromotionCreate } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'

export class PromotionCreateController implements Controller {
  constructor (private readonly promotionCreate: PromotionCreate) {}

  async handle (request: PromotionCreateController.Request): Promise<HttpResponse> {
    try {
      const { url } = request
      if (url === '') {
        return badRequest(new MissingParamError(url))
      }
      const promotion = await this.promotionCreate.create({ url })
      return ok(promotion)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace PromotionCreateController {
  export type Request = {
    url: string
  }
}
