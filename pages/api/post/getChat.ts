import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "util/database";

export default async function handler(request:NextApiRequest, response:NextApiResponse) {
  const db = (await connectDB).db("forum");

  console.log(request.query.receiver_id)

  const findTemp = [
    { sender_id : request.query.sender_id, reciver_id : request.query.receiver_id, },
    { sender_id : request.query.receiver_id, receiver_id: request.query.sender_id }
  ]

  // const findTemp = 
  //   { sender_id : request.query.sender_id, reciver_id : request.query.receiver_id, }
  

  const messages = await db.collection('chat_message').find({
    $or: findTemp
  }).toArray();


  return response.status(200).json(messages)

}