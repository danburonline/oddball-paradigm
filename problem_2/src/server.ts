import config from 'config'
import connectDB from './config/db/databse'
import app from './app'

const serverConfig: any = config.get('server')
const dbConfig: any = config.get('db')

connectDB()
  .then(() => {
    console.log(`Connected To Database`)
  })
  .catch(err => {
    console.log('Error Connecting To Database', err)
  })

app.listen(serverConfig.port, () => {
  console.info(`Listening on port ${serverConfig.port}`)
})
