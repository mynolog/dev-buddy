import { Router } from 'express'
import { home, posts } from '../controllers/boardController'
import { signup } from '../controllers/userController'

const apiRouter = Router()

apiRouter.get('/', home)
apiRouter.post('/signup', signup)
// apiRouter.post('/login', login)
apiRouter.get('/posts', posts)

export default apiRouter
