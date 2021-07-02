import { Router } from 'express'
import { home } from '../controllers/boardController'

const rootRouter = Router()

rootRouter.get('/api', home)

export default rootRouter
