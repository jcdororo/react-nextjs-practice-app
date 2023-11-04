'use client'

import React from 'react'

const ChatInput = () => {
  return (
    <div className="flex flex-row absolute bottom-0 w-full justify-center">
      <form className="flex flex-row m">
        <input className='w-96 h-full ' type="text" placeholder="텍스트작성란"/>
        <button className='w-24'>전송</button>
      </form>
    </div>
  )
}

export default ChatInput