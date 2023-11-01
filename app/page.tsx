import { connectDB } from "util/database";

// 60초동안 페이지가 캐싱된다.
// 60초 지나면 다시 캐싱함.
export const revalidate = 60;

export default async function Home() {
  // const client = await connectDB;
  const db = (await connectDB).db("forum");
  let result = await db.collection('post').find().toArray();

  // GET요청 결과 캐싱 가능
  // 'no-store' 캐싱된결과 사용하지 않겠습니다 : 실시간 데이터가 중요할 때
  // revalidate : 60  -> 60초마다 캐싱된 데이터 갱신해줌.
  // await fetch('/URL', {cache : 'force-cache'})

  return (
    <div>
      
    </div>
  )
}
