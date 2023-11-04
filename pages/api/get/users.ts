import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "util/database";

export default async function handler(request:NextApiRequest, response:NextApiResponse) {
  const db = (await connectDB).db("forum");
  let result = await db.collection('user_cred').find().toArray();
  
  return response.status(200).json(result);
}