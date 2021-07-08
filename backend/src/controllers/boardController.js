import { db } from '../config/db'
import { allPosts, createPost } from '../sql/query'

export const home = (req, res) => res.json({ title: 'Hello from express.js' })

export const posts = (req, res) => {
  let postList = null
  db.query(allPosts, (err, row) => {
    postList = JSON.stringify(row)
    return res.json({ result: 1, postList })
  })
}

export const newPost = (req, res) => {
  const {
    body: { title, content, userId },
  } = req
  const postContents = { title, content, user_id: userId }
  db.query(createPost, postContents, (err, row) => {
    // 생성된 게시물의 아이디 값
    const newId = row['insertId']
    console.log(newId)
    try {
      return res.json({ result: 1, message: '포스팅 성공', pid: newId })
    } catch (err) {
      return res.json({
        result: 0,
        message: '포스팅 실패, 관리자에게 문의하세요.',
      })
    }
  })
}
