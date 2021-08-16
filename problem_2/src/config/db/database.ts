import mongoose, { Mongoose } from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

const connectDB = (): Promise<Mongoose> => {
  const mongoURI = process.env.DB_URI

  return mongoose.connect(`${mongoURI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    ssl: true
  })
}

export default connectDB
