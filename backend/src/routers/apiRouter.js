import { Router } from 'express'
import { home, posts, signup } from '../controllers/boardController'

const apiRouter = Router()

apiRouter.get('/', home)
apiRouter.post('/signup', signup)
apiRouter.get('/posts', posts)

export default apiRouter
