import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
// import bodyParser from 'body-parser';
import cors from 'cors'
import initRoutes from './init/init.routes'
import errorHandler from './middlewares/errorHandler'

// const options = {
//   allowedHeaders: '*',
//   credentials: true,
//   methods: '*',
//   origin: '*',
//   preflightContinue: false,
//   optionsSuccessStatus: 200,
// };

const app = express()
// app.use(express.json());
// app.use(express.urlencoded());
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
