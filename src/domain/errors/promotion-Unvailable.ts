export class promotionUnvailable extends Error {
  constructor () {
    super('Promotion unavailable')
    this.name = 'promotionUnvailable'
  }
}
