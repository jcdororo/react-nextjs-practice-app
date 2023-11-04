'use client'

import React, { useEffect, useMemo, useState } from 'react'
import ChatInput from "app/components/ChatInput";
import ChatList from "app/components/ChatList";
import Conversation from "app/components/Conversation";



const ChatContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/get/users', {method:'GET'})
    .then(r => r.json())
    .then(result => setUsers(result))
  }, [])

  


  return (
    <div className="flex flex-row bg-cyan-300 absolute w-11/12 h-5/6">  
      {/* 대화상대 및 유저 리스트       */}
        <ChatList users={users} />
        {/* 채팅내용, 대화내용, 텍스트작성란 */}
        <div className="flex-grow-2">
          <span>채팅내용</span>
          <Conversation />
          <ChatInput />
        </div>
      </div>
  )
}

export default ChatContainer