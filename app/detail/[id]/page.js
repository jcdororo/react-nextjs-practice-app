import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import Like from "./Like";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function Detail(props) {



  // const client = await connectDB;
  const db = (await connectDB).db("forum");
  let result = await db.collection('post')
                       .findOne({ 
                          _id : new ObjectId(props.params.id)
                        })

  if (result == null) {
    return notFound()
  }

  // let commentResult = await db.collection('comment')
  //                      .find({ 
  //                        parent : props.params.id
  //                      }).toArray()
                       

  //                      console.log('commentResult',commentResult)
  
  
  let session = await getServerSession(authOptions);

  if(!session) {
    return (
      <div>
        로그인 먼저 하세요
      </div>
      )
    }
  let user = await db.collection('user_cred')
                      .findOne({email : session.user.email})


  console.log('sessionqqqqqqqqqqqqqqqqqqqks',session)
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Like _id={user._id} post_id={props.params.id} />
      <Comment id={props.params.id} />
    </div>
  )
}