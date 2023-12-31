// import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { connectDB } from "util/database";


interface Edit {
  params: { id: string },
  searchParams: {} 
}

export default async function Edit(props:Edit) {

  
  const db = (await connectDB).db("forum");
  let result = await db.collection('post')
                        .findOne({
                          _id : new ObjectId(props.params.id)
                        });

    



  return (
    <div>
      <div className="px-20 py-20 bg-slate-400 flex flex-col">
        <h4>수정 페이지</h4>
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result?.title} />
          <input name="content" defaultValue={result?.content} />
          <input name="_id" style={{display:'none'}} defaultValue={result?._id.toString()} />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  )
}