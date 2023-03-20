
export enum SitesCrawler {
  CasasBahia = 'casasbahia',
  PontoFrio = 'pontofrio',
  Magazineluiza = 'magazineluiza',
  Amaro = 'amaro',
  Natura = 'natura',
}
enum TagCasasBahia {
  Busine = 'CasasBahia',
  Price = '#product-price',
  Title = '.css-1qm1lh > h1',
  Description = '#product-description',
  IMG = '.magnify-container > div > img',
}
enum TagPontoFrio {
  Busine = 'PontoFrio',
  Price = '#product-price',
  Title = '.css-1qm1lh > h1',
  Description = '#product-description',
  IMG = '.magnify-container > div > img',
}
enum TagMagazineluiza {
  Busine = 'MagazineLuiza',
  Price = '[data-testid="price-value"]',
  Title = '[data-testid="heading-product-title"]',
  Description = '[data-testid="rich-content-container"]',
  IMG = '[data-testid="media-gallery"] > div > img',
}
enum TagAmaro {
  Busine = 'Amaro',
  Price = '.Prices_value__Ms4je',
  Title = '#productOptions > h1',
  Description = '.Description_apiMessage__7yEuU',
  IMG = '.ProductGalleryGrid_image1__VHCvs > span > img',
}
enum TagNatura {
  Busine = 'Natura',
  Price = '.Price-module__price--2QW3U > h6',
  Title = '.MuiTypography-colorTextPrimary',
  Description = '[class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary MuiTypography-alignLeft"]',
  IMG = '.MuiBox-root > img',
}

export const tuplaEnumsBusines = async (): Promise<any[]> => {
  return [{ CasasBahia: TagCasasBahia },{ Magazineluiza: TagMagazineluiza },{ PontoFrio: TagPontoFrio },{ Amaro: TagAmaro },{ Natura: TagNatura }]
}
