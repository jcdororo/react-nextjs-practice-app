import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { connectDB } from "util/database";

export default async function handler (요청:NextRequest, 응답:NextApiResponse) {

  // console.log(요청.body)

  const db = (await connectDB).db("forum");
  let commentResult = await db.collection('comment')
                       .find({ 
                         parent : 요청.body
                       }).toArray()
                       

  응답.status(200).json(commentResult)
}