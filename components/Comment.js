'use client'

import { useEffect, useState } from "react"

export default function Comment({id}) {
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
        commentList.map((x, i) => (
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