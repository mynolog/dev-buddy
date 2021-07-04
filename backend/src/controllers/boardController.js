export const home = (req, res) => res.json({ title: 'Hello from express.js' })

export const posts = (req, res) => {
  res.json({ title: 'This endpoint will show all posts in db ' })
}
