import { db } from '../config/db'
import { allPosts, createPost, findPostById } from '../sql/query'

export const home = (req, res) => res.json({ title: 'Hello from express.js' })

export const posts = (req, res) => {
  let postList = null
  db.query(allPosts, (err, row) => {
    postList = JSON.stringify(row)
    console.log(postList)
    return res.json({ result: 1, postList })
  })
}

export const newPost = (req, res) => {
  const {
    body: { title, content, userId },
  } = req
  const postContents = { title, content, user_id: userId }
  db.query(createPost, postContents, (err, row) => {
    console.log(row)
    try {
      // 생성된 게시물의 아이디 값
      const newId = row['insertId']
      return res.json({
        result: 1,
        message: '포스팅 성공했습니다.',
        pid: newId,
      })
    } catch (err) {
      console.log(err)
      return res.json({
        result: 0,
        message: '포스팅 실패, 관리자에게 문의하세요.',
      })
    }
  })
}

export const postDetail = (req, res) => {
  const {
    params: { id },
  } = req
  db.query(findPostById, [id], (err, row) => {
    const post = JSON.stringify(row[0])
    if (post === undefined) {
      const message = '해당 포스팅이 존재하지 않습니다.'
      return res.json({ result: 0, message })
    }
    const message = '포스팅 불러오기 성공'
    return res.json({ result: 1, message, post })
  })
}
