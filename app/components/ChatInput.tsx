'use client'

import { chatting, msg } from 'pages/api/recoil/usersAtoms';
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';

const ChatInput = () => {
  const chattings = useRecoilValue(chatting);
  const [input, setInput] = useState('');
  
  const [msgState, setMsgState] = useRecoilState(msg);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = async (e:React.FormEvent<HTMLElement>) => {
    event?.preventDefault();
    if(input !== ''){
      setInput('');
      await fetch(`/api/post/sendChat?sender_id=${chattings.sender_id}&receiver_id=${chattings.receiver_id}`, { method: 'POST', body : input })

      const result = await fetch(`/api/post/getChat?sender_id=${chattings.sender_id}&receiver_id=${chattings.receiver_id}`)
                       .then(r => r.json())
                       .then(r => setMsgState(r))
    }
    
  }



  

  return (
    <div className="flex flex-row absolute bottom-0 w-full justify-center">
      <form 
        className="flex flex-row m"
        onSubmit={handleSubmit}
      >
        <input 
          className='w-96 h-full' 
          type="text" 
          placeholder="텍스트작성란"
          value={input}
          onChange={handleChange}
        />
        <button className='w-24'>전송</button>
      </form>
    </div>
  )
}

export default ChatInput