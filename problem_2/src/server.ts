import connectDB from './config/db/database'
import app from './app'

connectDB()
  .then(() => {
    console.info(`✅ Connected To Database`)
  })
  .catch((err: string) => {
    console.error('Error Connecting To Database', err)
  })

app.listen(process.env.PORT, () => {
  console.info(`⚡️ Server is live: http://localhost:${process.env.PORT}`)
})
