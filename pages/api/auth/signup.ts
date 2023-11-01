import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next';
import { RequestHandler } from 'next/dist/server/next';
import { connectDB } from 'util/database';



export default async function handler(요청:NextApiRequest, 응답:NextApiResponse) {


  if (요청.method == 'POST') {
    if(요청.body.name == '' || 요청.body.email == '' || 요청.body.password == ''){
      return 응답.status(500).json('빈칸이 있는지 확인하세요')
    }
    
    const db = (await connectDB).db("forum");
    let result = await db.collection('user_cred').findOne({email : 요청.body.email });

    if(!result) {
      let hash = await bcrypt.hash(요청.body.password, 10) 
      요청.body.password = hash
      const temp = {
        name : 요청.body.name,
        email : 요청.body.email,
        password : 요청.body.password,
        role: "normal"
      }
      let db = (await connectDB).db('forum')
      await db.collection('user_cred').insertOne(temp);
      응답.status(200).json('가입 성공');
    } else {
      응답.status(500).json('이미 가입한 이메일 입니다.')
    }

    
  }
}