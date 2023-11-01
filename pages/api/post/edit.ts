import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "util/database";

export default async function handler(요청:NextApiRequest, 응답:NextApiResponse) {
  if (요청.method == 'POST') {
    let temp = { title : 요청.body.title, content : 요청.body.content }
    const db = (await connectDB).db("forum");
    let result = await db.collection('post').updateOne(
      {_id : new ObjectId(요청.body._id)},
      {$set : temp}
    )

    응답.redirect(302, '/list')

    
  }
}