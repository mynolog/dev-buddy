import { Router } from 'express'
import { home, posts, newPost } from '../controllers/boardController'
import { signup, login } from '../controllers/userController'

const apiRouter = Router()

apiRouter.get('/', home)
apiRouter.post('/signup', signup)
apiRouter.post('/login', login)
apiRouter.post('/new-post', newPost)
apiRouter.get('/posts', posts)
apiRouter.get('/posts/:id', posts)

export default apiRouter
