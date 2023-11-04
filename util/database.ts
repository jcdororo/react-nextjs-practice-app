import { MongoClient } from 'mongodb'
// const url = 'mongodb+srv://admin:qwer1234@cluster0.4eybyvy.mongodb.net/?retryWrites=true&w=majority'
const url = 'mongodb://localhost:27017'; // MongoDB 컨테이너의 주소 및 포트

// const options: any = { useNewUrlParser: true }



let connectDB: MongoClient | Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }