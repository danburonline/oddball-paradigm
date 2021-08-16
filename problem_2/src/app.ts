import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import initRoutes from './init/init.routes'
import errorHandler from './middlewares/errorHandler'

const app = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(cors())
initRoutes(app)
app.use(errorHandler)

export default app
