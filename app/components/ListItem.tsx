'use client'

import { ObjectId } from "mongodb"
import Link from "next/link"

interface Listitem {
  result: [
    {
      _id: ObjectId,
      title: string,
      content: string
    }
  ]
}

export default function ListItem({result}:Listitem) {

  return(
    <div>
      {
        result.map((a, i) =>
        // <div className="list-item" key={i}>
        <div className="bg-white border-10 p-21 mb-5 shadow-[0_2px_4px_0_rgb(224,224,224)] opacity-100 duration-1000" key={i}>
          <Link href={'/detail/' + result[i]._id}>
            <h4 className="text-20 font-[800] m-0">{result[i].title}</h4>
          </Link>
          <Link href={'/edit/' + result[i]._id}>✏️</Link>
          <span className="cursor-pointer" onClick={(e:any)=>{
                                    fetch(`/api/post/delete?_id=${result[i]._id}`, { method: 'DELETE' })
                                    .then((r)=>{
                                      if(r.status == 200) {
                                        return r.json()
                                      } else {
                                        //서버가 에러코드전송시 실행할코드
                                        return r.json();
                                      }
                                    })
                                    .then(()=>{ 
                                      //성공시 실행할코드
                                      e.target.parentElement.style.opacity = 0;
                                      setTimeout(()=>{
                                      e.target.parentElement.style.display = 'none';
                                      },1000)
                                    }).catch((error)=>{
                                      //인터넷문제 등으로 실패시 실행할코드
                                      console.log(error)
                                    })
          }} >삭제</span>
          <p className="text-gray my-5 mx-0">1월 1일</p>
        </div>
        )
      }
    </div>
  )
}