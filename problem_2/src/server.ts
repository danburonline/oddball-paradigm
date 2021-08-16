// import config from 'config'
import connectDB from './config/db/database'
import app from './app'

// const serverConfig: any = config.get('server')
// const dbConfig: any = config.get('db')

connectDB()
  .then(() => {
    console.log(`Connected To Database`)
  })
  .catch((err: string) => {
    console.log('Error Connecting To Database', err)
  })

app.listen(process.env.PORT, () => {
  console.info(`Listening on port ${process.env.PORT}`)
})
