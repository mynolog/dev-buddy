import { db } from '../config/db'
import {
  allPosts,
  countPostView,
  createPost,
  deletePostById,
  findPostById,
  updatePostById,
} from '../sql/query'

export const posts = (req, res) => {
  let postList = null
  db.query(allPosts, (err, row) => {
    postList = JSON.stringify(row)
    return res.status(200).json({ result: 1, postList })
  })
}

export const newPost = (req, res) => {
  const {
    body: { title, content, userId },
  } = req
  const postContents = { title, content, user_id: userId }
  db.query(createPost, postContents, (err, row) => {
    try {
      // 생성된 게시물의 아이디 값
      const newId = row['insertId']
      return res.status(200).json({
        result: 1,
        message: '포스팅 성공했습니다.',
        pid: newId,
      })
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        result: 0,
        message: '포스팅 실패, 관리자에게 문의하세요.',
      })
    }
  })
}

// TODO: 동일한 페이지 접속 시 조회수 증가하지 않도록 개선
export const postDetail = (req, res) => {
  const {
    params: { id },
    session,
  } = req

  if (!session.visitedPage || session.visitedPage.indexOf(id) === -1) {
    db.query(countPostView, [id], (err, row) => {
      session.visitedPage = []
      session.visitedPage.push(id)
      if (row['affectedRows'] > 0) {
        db.query(findPostById, [id], (err, row2) => {
          try {
            const post = JSON.stringify(row2[0])
            const message = '포스팅 불러오기 성공'
            return res.status(200).json({ result: 1, message, post })
          } catch (err) {
            return res.status(400).json({ result: 0, message })
          }
        })
      }
    })
  } else {
    db.query(findPostById, [id], (err, row) => {
      try {
        const post = JSON.stringify(row[0])
        const message = '포스팅 불러오기 성공'
        return res.status(200).json({ result: 1, message, post })
      } catch (err) {
        return res.status(400).json({ result: 0, message })
      }
    })
  }
}

export const editPost = (req, res) => {
  const {
    body: { title, content, pid },
  } = req
  db.query(updatePostById, [title, content, pid], (err, row) => {
    if (row['affectedRows'] > 0) {
      const message = '포스팅 수정 완료했습니다.'
      return res.status(200).json({
        result: 1,
        message,
      })
    } else {
      return res.status(400).json({
        result: 0,
      })
    }
  })
}

export const deletePost = (req, res) => {
  const {
    body: { pid },
  } = req
  db.query(deletePostById, [pid], (err, row) => {
    if (row['affectedRows'] > 0) {
      const message = '포스팅 삭제 완료했습니다.'
      return res.status(200).json({
        result: 1,
        message,
      })
    } else {
      return res.status(400).json({
        result: 0,
      })
    }
  })
}
