
export enum SitesCrawler {
  CasasBahia = 'casasbahia',
  PontoFrio = 'pontofrio',
  Magazineluiza = 'magazineluiza',
  Amaro = 'amaro',
  Natura = 'natura',
}
enum TagCasasBahia { // funciona
  Busine = 'CasasBahia',
  Price = '#product-price',
  Title = '.css-1qm1lh > h1',
  Description = '#product-description',
  IMG = '.magnify-container > div > img',
}
enum TagPontoFrio { // funciona
  Busine = 'PontoFrio',
  Price = '#product-price',
  Title = '.css-1qm1lh > h1',
  Description = '#product-description',
  IMG = '.magnify-container > div > img',
}
enum TagMagazineluiza { // funciona
  Busine = 'MagazineLuiza',
  Price = '[data-testid="price-value"]',
  Title = '[data-testid="heading-product-title"]',
  Description = '[data-testid="rich-content-container"]',
  IMG = '[data-testid="media-gallery"] > div > img',
}
enum TagAmaro { // funcionou +-
  Busine = 'Amaro',
  Price = '.Prices_value__Ms4je',
  Title = '#productOptions > h1',
  Description = '.Description_apiMessage__7yEuU',
  IMG = '.ProductGalleryGrid_image1__VHCvs > span > img',
}
enum TagNatura { /// não funciona o tito e price
  Busine = 'Natura',
  Price = '[class="MuiBox-root natds186 natds42 natds185 Price-module__price--2QW3U"] > h6',
  Title = '[class="MuiBox-root natds165 natds42 natds164 natds148"] > h1',
  Description = '[class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary MuiTypography-alignLeft"]',
  IMG = '[class="MuiBox-root natds260 natds42 natds259 natds257 natds258"] > img',
}

export const tuplaEnumsBusines = async (): Promise<any[]> => {
  return [{ CasasBahia: TagCasasBahia },{ Magazineluiza: TagMagazineluiza },{ PontoFrio: TagPontoFrio },{ Amaro: TagAmaro },{ Natura: TagNatura }]
}
