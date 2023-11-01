import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:qwer1234@cluster0.4eybyvy.mongodb.net/?retryWrites=true&w=majority'
const options: any = { useNewUrlParser: true }



let connectDB: any

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }