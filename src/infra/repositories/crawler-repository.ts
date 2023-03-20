
import { CrawlerHandleRepository } from '@/data/contracts'
import $ from 'cheerio'
import puppeteer, { Browser, Page } from 'puppeteer'
import { SitesCrawler, tuplaEnumsBusines } from '@/infra/enum'

export class CrawlerRepository implements CrawlerHandleRepository {
  async handle (url: string): Promise<CrawlerHandleRepository.CrawlerModel> {
    const config = await createConfig()
    const html = await crowler(url,config)

    const busine = await getBusineForURL(url)
    const tagBusines = await verifyBusines(busine)

    const price = await getPriceAndTitle(html, tagBusines.Price)
    await new Promise(resolve => setTimeout(resolve, 1000))

    const title = await getPriceAndTitle(html, tagBusines.Title)
    await new Promise(resolve => setTimeout(resolve, 1000))

    const description = await getDescription(tagBusines.Description, config)
    const img = await getImage(tagBusines.IMG ,config)
    await config.browser.close()

    return { price, title, description, img }
  }
}

const verifyBusines = async (busine: string): Promise<any> => {
  const enumsBusines = await tuplaEnumsBusines()
  const [CasasBahia, Magazineluiza, pontofrio, amaro, natura] = enumsBusines
  switch (busine) {
    case SitesCrawler.CasasBahia:
      return CasasBahia.CasasBahia
    case SitesCrawler.Magazineluiza:
      return Magazineluiza.Magazineluiza
    case SitesCrawler.PontoFrio:
      return pontofrio.PontoFrio
    case SitesCrawler.Amaro:
      return amaro.Amaro
    case SitesCrawler.Natura:
      return natura.Natura
    default:
  }
}

const crowler = async (url: string,config: ConfigCrawl): Promise<string> => {
  await config.page.goto(url)
  return await config.page.evaluate(() => document.body.innerHTML)
}

const createConfig = async (): Promise<ConfigCrawl> => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 10, ignoreHTTPSErrors: true ,args: ['--proxy-auto-detect', '--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0)
  await page.setViewport({ width: 0, height: 0, deviceScaleFactor: 1 })

  return { browser, page }
}

const getPriceAndTitle = async (html: string, tagBusine: string): Promise<string> => {
  let value
  $(tagBusine, html).each(function () {
    value = $(this).text()
  })
  return value
}
const getDescription = async (tagBusine: string, config: ConfigCrawl): Promise<any> => {
  const { page } = config

  await page.waitForSelector(tagBusine)

  const links = await page.evaluate(tagBusine => {
    const anchor = document.querySelector(tagBusine)
    return anchor.textContent.split('|')[0].trim()
  }, tagBusine)

  return links
}

const getImage = async (tagBusine: string, config: ConfigCrawl): Promise<any> => {
  const { page } = config
  await page.waitForSelector(tagBusine)
  const links = await page.evaluate(tagBusine => {
    const anchor = document.querySelector(tagBusine)
    return anchor.getAttribute('src')
  }, tagBusine)
  console.log(links)
  return links
}
const getBusineForURL = async (url: string): Promise<string> => {
  const indexofFinal = url.indexOf('.com')
  let indexofTexto = url.indexOf('www.')

  indexofTexto = indexofTexto === -1 ? (url.indexOf('//') + 2) : (indexofTexto + 4)
  console.log(indexofTexto)
  
  return url.substring(indexofTexto,indexofFinal)
}

type ConfigCrawl = {
  browser: Browser
  page: Page
}
