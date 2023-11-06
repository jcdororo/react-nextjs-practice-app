'use client'

import { chatting } from 'pages/api/recoil/usersAtoms';
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';

const ChatInput = () => {
  const chattings = useRecoilValue(chatting);

  const [input, setInput] = useState('');

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = async (e:React.FormEvent<HTMLElement>) => {
    event?.preventDefault();
    if(input !== ''){
      setInput('');
      await fetch(`/api/post/sendChat?sender_id=${chattings.sender_id}&receiver_id=${chattings.receiver_id}`, { method: 'POST', body : input })
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