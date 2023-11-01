import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function handler(요청, 응답){
  
  if(요청.method == 'POST') {
    요청.body = JSON.parse(요청.body);
    const temp = {
      user_id : new ObjectId(요청.body.user_id),
      post_id : new ObjectId(요청.body.post_id)
    }
    
    const client = await connectDB;
    const db = client.db("forum");
    let userResult = await db.collection('like').findOne({user_id : temp.user_id})
  
    if(!userResult) {
      let result = await db.collection('like').insertOne(temp)
    } else {
      let result = await db.collection('like').deleteOne({user_id : temp.user_id})
    }

    let userList = await db.collection('like').find().toArray();

    return 응답.status(200).json(userList);
  }

  if(요청.method == 'GET') {
    const client = await connectDB;
    const db = client.db("forum");
    let userResult = await db.collection('like').find().toArray();

    return 응답.status(200).json(userResult);
  }


  

  
  return 응답.status(500).json('잘못된 요청입니다.');
  

}