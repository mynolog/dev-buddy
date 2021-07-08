export const joinUser = `insert into user set ?`

export const existEmail = `SELECT email FROM user WHERE email=?`

export const existEmailPw = `SELECT email , password FROM user WHERE email=?`

export const existUserInfo = `SELECT * FROM user WHERE email=?`

export const createPost = `INSERT INTO post set ?`

export const allPosts = `SELECT user.uid, user.name, post.pid, post.title, post.content FROM user, post ORDER BY pid DESC`

export const findPostById = `SELECT * FROM post WHERE pid=?`
