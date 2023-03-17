import { adaptRoute } from '@/main/adapter'
import { makePromotionCreateController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/promotion', adaptRoute(makePromotionCreateController()))
}
