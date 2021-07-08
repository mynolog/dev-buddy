import { db } from '../config/db'
import { createPost } from '../sql/query'

export const home = (req, res) => res.json({ title: 'Hello from express.js' })

export const posts = (req, res) => {
  res.json({ title: 'This endpoint will show all posts in db ' })
}

export const newPost = (req, res) => {
  const {
    body: { title, content, userId },
  } = req
  console.log(typeof userId)
  const postContents = { title, content, user_id: userId }
  db.query(createPost, postContents, (err, row) => {
    try {
      return res.json({ result: 1, message: '포스팅 성공' })
    } catch (err) {
      return res.json({
        result: 0,
        message: '포스팅 실패, 관리자에게 문의하세요.',
      })
    }
  })
}
