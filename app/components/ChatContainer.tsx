'use client'

import ChatInput from "app/components/ChatInput";
import ChatList from "app/components/ChatList";
import Conversation from "app/components/Conversation";
import {useRecoilState, useRecoilValue} from 'recoil'
import { chatting, selectChat, sessionState, usersState } from 'pages/api/recoil/usersAtoms';
import { useEffect, useState } from "react";

interface Session {
  user: {
    name: string,
    email: string,
    role: string  
  }  
}

interface ChatContainerProps {
  session: Session | null;
}


const ChatContainer = ({session}:any) => {
  const chattings = useRecoilValue(chatting);
  const [users, setUsers] = useRecoilState(usersState); 
  const [userSession,setUserSession] = useRecoilState(sessionState);
  const [select,setSelect] = useRecoilState(selectChat);

  useEffect(() => {
    fetch('/api/get/users', {method:'GET'})
    .then(r => r.json())
    .then(result => setUsers(result));

    setUserSession(session);
    setSelect({
      name: '',
      receiver_id: ''
    });


  }, [])
 

  
  
  
  return (
    <div className="flex flex-row bg-cyan-300 absolute w-11/12 h-5/6">  
      {/* 대화상대 및 유저 리스트       */}
        <ChatList />
        {/* 채팅내용, 대화내용, 텍스트작성란 */}
        {
          select.name == ''
          ?
          <div className="flex justify-center items-center">
            채팅상대를 선택하세요
          </div>
          :
          <div className="flex-grow-2 relative w-full absolute">
            <span>
              <span className="font-bold">
                {select.name}</span>님과의 채팅</span>
            {chattings ? <Conversation /> : ''}
            <ChatInput />
          </div>
        }
        
    </div>
  )
}

export default ChatContainer