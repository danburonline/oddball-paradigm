import connectDB from './config/db/database'
import app from './app'

connectDB()
  .then(() => {
    console.info(`✅ MongoDB database is connected`)
  })
  .catch((err: string) => {
    console.error('Error connecting to the MongoDB database', err)
  })

app.listen(process.env.PORT, () => {
  console.info(`⚡️ Server is live: http://localhost:${process.env.PORT}`)
})
