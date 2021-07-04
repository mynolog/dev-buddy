import User from '../models/User'

export const home = (req, res) => res.json({ title: 'Hello from express.js' })

export const posts = (req, res) => {
  res.json({ title: 'This endpoint will show all posts in db ' })
}

export const signup = async (req, res) => {
  // TODO: 입력한 email, username이 DB에 이미 존재할 경우 분기 처리
  const {
    body: { email, name, username, password },
  } = req
  console.log(email, name, username, password)
  try {
    await User.create({
      email,
      name,
      username,
      password,
    })
    console.log('signup success from backend')
    return res.json({ result: 1 })
  } catch (err) {
    console.log(err)
    return res.json({ result: 0 })
  }
}
