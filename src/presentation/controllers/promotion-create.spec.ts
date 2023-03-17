import { PromotionCreateController } from './index'
import { PromotionCreateSpy } from '@/presentation/mocks'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'

const mockRequest = (): PromotionCreateController.Request => {
  return {
    url: 'https://www.fake.com.br/cadeira-de-escritorio-giratoria-preta-fortt/'
  }
}
export const throwError = (): never => {
  throw new Error()
}
describe('PromotionCreateController', () => {
  test('Should return sucess', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    await sut.handle(request)
    expect(promotionCreateSpy.params).toEqual({
      url: request.url
    })
  })
  test('Should return 400 if url not exist', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('')
    const httpRequest = await sut.handle({ ...request, url: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 500 if AddSurvey throws', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    jest.spyOn(promotionCreateSpy, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(500)
  })
})
