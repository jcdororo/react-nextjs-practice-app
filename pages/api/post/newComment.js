import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(요청, 응답){
  let session = await getServerSession(요청, 응답, authOptions);

  // console.log(JSON.parse(요청.body).parent);
  if(!session){
    return 응답.status(500).json('로그인 후 작성 해 주세요');
  }

  if (요청.method == 'POST') {
    if(요청.body == '') {
      return 응답.status(500).json('댓글을 입력하지 않았습니다.')
    }

    const temp = {
      content : JSON.parse(요청.body).content,
      author : session.user.email,
      parent : JSON.parse(요청.body).parent
    }

    // console.log('temp',temp)

    const client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection('comment').insertOne(temp)
    // 응답.status(200).json(result)
    let commentResult = await db.collection('comment')
                       .find({ 
                         parent : temp.parent
                       }).toArray()
                       

    응답.status(200).json(commentResult)
  }
}