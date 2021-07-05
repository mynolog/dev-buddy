import db from '../config/db'
import bcrypt from 'bcrypt'
import { joinUser, existEmail } from '../sql/query'

export const signup = (req, res) => {
  const {
    body: { email, name, password },
  } = req
  db.query(existEmail, [email], (err, row) => {
    if (row[0] === undefined) {
      const saltedPw = bcrypt.hashSync(password, 10)
      const user = { email, name, password: saltedPw }
      db.query(joinUser, user, (err, row2) => {
        if (err) throw err
        return res.json({ result: 1, message: '회원가입 성공' })
      })
    } else {
      return res.json({ result: 0, message: '이미 등록된 이메일 주소입니다.' })
    }
  })
}

// export const login = async (req, res) => {
//   // TODO: 세션을 활용하여 로그인 상태 유지하기 구현

//   const {
//     body: { email, password },
//   } = req
//   const user = await User.findOne({ email })
//   if (!user) {
//     return res.json({
//       result: 0,
//       errorMessage: '회원가입 정보가 없는 이메일 주소입니다.',
//     })
//   }
//   const confirmedUser = await bcrypt.compare(password, user.password)
//   if (!confirmedUser) {
//     return res.json({
//       result: 0,
//       errorMessage: '비밀번호를 다시 입력하세요.',
//     })
//   }
//   console.log(req.session)
//   return res.json({
//     result: 1,
//   })
// }
