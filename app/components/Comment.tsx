'use client'

import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"

interface propsId {
  id: string
}

interface commentList {
  x: {
    _id: ObjectId,
    content: string,
    author: string,
    parent: string
  },
  i: number
}

export default function Comment({id}:propsId) {
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])
  
  let temp = {
    parent : id,
    content : comment
  }

  useEffect(() => {
    fetch('/api/post/getComments', {method:'POST', body:id})
    .then(r => r.json())
    .then(result => setCommentList(result))

  },[])
  

  
    
  

  return(
    <div>
      <hr></hr>
      {
        commentList.length > 0 ?
        commentList.map((x:commentList["x"], i:commentList["i"]) => (
          <div key={i}>{x.author} : {x.content}</div>
        ))
        : '댓글 없음'
      }

      <input onChange={(e)=>{ setComment(e.target.value) }} />
      <button onClick={()=>{ 
        fetch('/api/post/newComment', { method : 'POST', body : JSON.stringify(temp) } )
        .then(r => r.json())
        .then(result => setCommentList(result))
      }}
      >
        댓글전송
      </button>
    </div>
  )
}