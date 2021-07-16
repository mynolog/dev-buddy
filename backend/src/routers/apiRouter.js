import { Router } from 'express'
import {
  posts,
  newPost,
  postDetail,
  editPost,
  deletePost,
} from '../controllers/boardController'
import { signup, login, logout } from '../controllers/userController'

const apiRouter = Router()

apiRouter.post('/signup', signup)
apiRouter.post('/login', login)
apiRouter.post('/new-post', newPost)
apiRouter.get('/posts', posts)
apiRouter.route('/posts/:id').get(postDetail).put(editPost).delete(deletePost)
apiRouter.post('/logout', logout)

export default apiRouter
