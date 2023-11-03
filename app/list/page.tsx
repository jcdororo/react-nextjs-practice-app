import { connectDB } from "util/database";
import ListItem from "../components/ListItem";

//force-static
//다이나믹페이지로 만들어준다.
export const dynamic = 'force-dynamic'

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection('post').find().toArray();




  return (
    <div className="bg-white p-10">
      <ListItem result={result}/>
    </div>
  )
} 