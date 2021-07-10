import { dbConfig } from './config/db'
import express from 'express'
import path from 'path'
import cors from 'cors'
import session from 'express-session'
import logger from 'morgan'
import apiRouter from './routers/apiRouter'
import MySQLStore from 'express-mysql-session'
import history from 'connect-history-api-fallback'

MySQLStore(session)
const sessionStore = new MySQLStore(dbConfig)

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(
  history({
    verbose: true,
  })
)
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
