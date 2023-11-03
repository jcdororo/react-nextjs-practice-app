import { ObjectId } from "mongodb";
import { NextApiResponse } from "next";
import { connectDB } from "util/database";

interface mapItem {
  _id: ObjectId,
  user_id: string,
  post_id: string  
}

interface 요청 {
  method: string
  body: string
}


export default async function handler(요청:요청, 응답:NextApiResponse){

  
  if(요청.method == 'POST') {
    // 요청.body = JSON.parse(요청.body);
    const 요청temp = JSON.parse(요청.body);
    const temp = {
      user_id : 요청temp.user_id,
      post_id : 요청temp.post_id
    }

    
    const client = await connectDB;
    const db = client.db("forum");

    if(!요청temp.get) {
      let userResult = await db.collection('like').findOne({user_id : temp.user_id})
      if(!userResult) {
        let result = await db.collection('like').insertOne(temp)
      } else {
        let result = await db.collection('like').deleteOne({user_id : temp.user_id})
      }
    }

    let userList = await db.collection('like').find().toArray();
    userList = userList.filter((x:mapItem) => x.post_id == temp.post_id);
    return await 응답.status(200).json(userList);
  }

  
  return 응답.status(500).json('잘못된 요청입니다.');
  

}