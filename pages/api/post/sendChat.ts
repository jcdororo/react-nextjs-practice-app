import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "util/database";


export default async function handler(request:NextApiRequest, response:NextApiResponse) {
  const db = (await connectDB).db("forum");

  /*
    _id: 고유아이디
    text : 실제 text,
    sender_id : 발신자
    reciver_id : 수신자
    timestamp : 보낸시간
  */ 
  const temp = {
    text : request.body,
    sender_id : request.query.sender_id,
    receiver_id : request.query.receiver_id,
    timestamp : Date.now().toString()
  }

  await db.collection('chat_message').insertOne(temp);

  return response.status(200).json('성공')

  
 



  /*
    _id: 고유아이디
    text : 실제 text,
    sender_id : 발신자
    reciver_id : 수신자
    timestamp : 보낸시간
   
      const temp = {
        name : 요청.body.name,
        email : 요청.body.email,
        password : 요청.body.password,
        role: "normal"
      
      let db = (await connectDB).db('forum')
      await db.collection('user_cred').insertOne(temp);

      */
}