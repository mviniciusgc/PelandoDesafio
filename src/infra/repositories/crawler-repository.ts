
import { CrawlerHandleRepository } from '@/data/contracts'
import $ from 'cheerio'
import puppeteer, { Browser, Page } from 'puppeteer'

export class CrawlerRepository implements CrawlerHandleRepository {
  async handle (url: string): Promise<CrawlerHandleRepository.CrawlerModel> {
    const config = await createConfig()
    const html = await crowler(url,config)
    await config.browser.close()
    const price = await getPrice(html,url)
    const title = await getTitle(html,url)
    const description = await getDescription(html,url)
    return { price, title, description }
  }
}

const verifyBusinesID = async (url: string): Promise<string> => {
  if (url.includes('magazineluiza')) {
    return '[data-testid="price-value"]'
  } else if (url.includes('casasbahia') || url.includes('pontofrio')) {
    return '#product-price'
  }
}
const verifyBusinesTitle = async (url: string): Promise<string> => {
  if (url.includes('magazineluiza')) {
    return '[data-testid="heading-product-title"]'
  } else if (url.includes('casasbahia') || url.includes('pontofrio')) {
    return '.css-1qm1lh > h1'
  }
}
const verifyBusinesDescription = async (url: string): Promise<string> => {
  if (url.includes('magazineluiza')) {
    return '[data-testid="rich-content-container"]'
  } else if (url.includes('casasbahia') || url.includes('pontofrio')) {
    return '#product-description'
  }
}
const crowler = async (url: string,config: ConfigCrawl): Promise<string> => {
  await config.page.goto(url)
  return await config.page.evaluate(() => document.body.innerHTML)
}

const createConfig = async (): Promise<ConfigCrawl> => {
  const browser = await puppeteer.launch({ headless: 'new', slowMo: 10 , args: ['--proxy-auto-detect', '--no-sandbox'] })
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0)
  return { browser, page }
}

const getPrice = async (html: string, url: string): Promise<string> => {
  let price
  const id = await verifyBusinesID(url)
  $(id, html).each(function () {
    price = $(this).text()
  })
  return price
}
const getTitle = async (html: string,url: string): Promise<string> => {
  let title
  const titleID = await verifyBusinesTitle(url)
  $(titleID, html).each(function () {
    title = $(this).text()
  })
  return title
}
const getDescription = async (html: string,url: string): Promise<string> => {
  let description
  const descriptionID = await verifyBusinesDescription(url)
  $(descriptionID, html).each(function () {
    description = $(this).text
  })
  return description
}

type ConfigCrawl = {
  browser: Browser
  page: Page
}
