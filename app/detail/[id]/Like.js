'use client'

import { useEffect, useState } from "react"

export default function Like({_id, post_id}) {

  const [like, setLike] = useState(0)


  const temp = {
    user_id : _id,
    post_id : post_id
  }

  useEffect(() => {
    fetch('/api/post/like', {method:'GET'})
    .then(r => r.json())
    .then(result => setLike(result.length))
  }, [])
  

  




  return (
    <div>
      <button onClick={() => {
        fetch('/api/post/like', {method:'POST', body: JSON.stringify(temp)})
        .then(r => r.json())
        .then(result => setLike(result.length))
      }}
      >
        좋아요
        </button> : {like}
    </div>
  )
}