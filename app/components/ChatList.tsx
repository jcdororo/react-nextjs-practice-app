'use client'

import { ObjectId } from 'mongodb'
import React from 'react'

interface propsUsers {
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  role: string
}
const ChatList = async ({users}:propsUsers) => {
  
  

  return (
    <div className="flex-grow-1 bg-yellow-200">
      <span>대화상대</span>
      <div className="bg-green-400">유저리스트</div>
    </div>
  )
}

export default ChatList