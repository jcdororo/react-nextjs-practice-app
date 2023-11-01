import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "util/database";
import { NextRequest, NextResponse } from "next/server";


export default async function handler(요청:NextRequest, 응답:NextResponse){
  let session = await getServerSession(요청, 응답, authOptions);

  if(session){
    요청.body.author = session.user.email
  }
  // console.log(요청.body)

  if (요청.method == 'POST') {
    if(요청.body.title == '' || 요청.body.content == '') {
      return 응답.status(500).json('너 제목 혹은 내용 안씀')
    }

    const client = await connectDB;
    const db = client.db("forum");
    let result = db.collection('post').insertOne(요청.body)
    응답.redirect(302, '/list')
  }
}