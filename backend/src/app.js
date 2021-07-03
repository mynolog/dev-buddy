import express from 'express'
import path from 'path'
import cors from 'cors'
import logger from 'morgan'
import apiRouter from './routers/apiRouter'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', apiRouter)

export default app
