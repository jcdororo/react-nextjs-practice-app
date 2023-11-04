'use client'

import React from 'react'

const ChatInput = () => {
  return (
    <div>
      <form className="flex flex-row">
        <input type="text" placeholder="텍스트작성란"/>
        <button>전송</button>
      </form>
    </div>
  )
}

export default ChatInput