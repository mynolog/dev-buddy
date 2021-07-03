import { Router } from 'express'
import { home, posts } from '../controllers/boardController'

const apiRouter = Router()

apiRouter.get('/', home)
apiRouter.get('/posts', posts)

export default apiRouter
