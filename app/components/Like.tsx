'use client'

import { ObjectId } from "mongodb"
import { useEffect, useState } from "react"


interface propsLike {
  _id: ObjectId,
  post_id: string
}

export default function Like({_id, post_id}:propsLike) {

  const [like, setLike] = useState(0)


  const temp = {
    user_id : _id,
    post_id : post_id
  }

  const getTemp = {
    get : true,
    user_id : _id,
    post_id : post_id
  }



  useEffect(() => {
    fetch('/api/post/like', {method:'POST', body : JSON.stringify(getTemp)})
    .then(r => r.json())
    .then(result => setLike(result.length))
    .then(r => console.log('useEffect'))
  }, [])
  

  




  return (
    <div>
      <button onClick={() => {
        fetch('/api/post/like', {method:'POST', body: JSON.stringify(temp)})
        .then(r => r.json())
        // .then(result => console.log('타입',typeof result.length))
        .then(result => setLike(result.length))
        .then(r => console.log('onClick'))
      }}
      >
        좋아요
        </button> : {like}
    </div>
  )
}