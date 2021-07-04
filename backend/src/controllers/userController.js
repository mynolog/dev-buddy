import User from '../models/User'

export const signup = async (req, res) => {
  // TODO: 입력한 email, username이 DB에 이미 존재할 경우 분기 처리
  const {
    body: { email, name, username, password },
  } = req
  const existEmail = await User.exists({ email })
  if (existEmail) {
    return res.json({
      result: 0,
      errorMessage: '사용중인 이메일 주소입니다.',
    })
  }
  const existUsername = await User.exists({ username })
  if (existUsername) {
    return res.json({
      result: 0,
      errorMessage: '사용중인 닉네임입니다.',
    })
  }

  try {
    await User.create({
      email,
      name,
      username,
      password,
    })
    console.log('백엔드 회원가입 성공')
    return res.json({ result: 1 })
  } catch (err) {
    console.log(err)
    return res.json({
      result: 0,
      errorMessage: '회원가입에 실패했습니다.',
    })
  }
}
