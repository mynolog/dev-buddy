import express from 'express'
import path from 'path'
import cors from 'cors'
import session from 'express-session'
import logger from 'morgan'
import apiRouter from './routers/apiRouter'
import MySQLStore from 'express-mysql-session'

// 개선 필요
const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME,
}

MySQLStore(session)
const sessionStore = new MySQLStore(options)

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(logger('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(
  session({
    key: process.env.COOKIE_NAME,
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
  })
)
app.get('/', (req, res) => res.sendFile('/index.html'))
app.use('/api', apiRouter)

export default app
