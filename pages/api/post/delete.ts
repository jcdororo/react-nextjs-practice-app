import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "util/database";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

interface 요청 extends NextApiRequest{ 
  _id : string
}

export default async function handler(요청:요청, 응답:NextApiResponse) {


  if(요청.method == 'DELETE'){
    const _id = 요청.query._id;
    let session:any = await getServerSession(요청, 응답, authOptions);

    const db = (await connectDB).db("forum");
    let result = await db.collection('post').findOne({_id : new ObjectId(_id?.toString())});
    if(session.user.email == result.author || session.user.role == 'admin') {
      let result = await db.collection('post').deleteOne({_id : new ObjectId(_id?.toString())});
      응답.status(200).json('삭제완료')
    } else {
      응답.status(500).json('삭제실패')
    }
    

  }

}