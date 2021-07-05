export const joinUser = `insert into user set ?`

export const existEmail = `SELECT email FROM user WHERE email=?`

export const existEmailPw = `SELECT email , password FROM user WHERE email=?`

export const getUserInfo = `SELECT * FROM user WHERE email=?`
