import express from 'express'
import path from 'path'
import cors from 'cors'
import logger from 'morgan'
import rootRouter from './routers/rootRouter'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', rootRouter)

export default app
