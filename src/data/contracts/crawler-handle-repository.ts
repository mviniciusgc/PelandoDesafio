export interface CrawlerHandleRepository {
  handle: (url: string) => Promise<CrawlerHandleRepository.CrawlerModel>
}

export namespace CrawlerHandleRepository {
  export type CrawlerModel = {
    price: string
    title: string
    description: string
  }
}
