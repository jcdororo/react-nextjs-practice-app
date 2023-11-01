'use client'

import { ObjectId } from "mongodb"
import Link from "next/link"

interface propsListitem {
  result: [
    {
      _id: ObjectId,
      title: string,
      content: string
    }
  ]
}

export default function ListItem({result}:propsListitem) {

  return(
    <div>
      {
        result.map((a, i) =>
        <div className="list-item" key={i}>
          <Link href={'/detail/' + result[i]._id}>
            <h4>{result[i].title}</h4>
          </Link>
          <Link href={'/edit/' + result[i]._id}>✏️</Link>
          <span className="delete" onClick={(e:any)=>{
                                    fetch('/api/post/delete', { method: 'DELETE', body : result[i]._id })
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
          <p>1월 1일</p>
        </div>
        )
      }
    </div>
  )
}