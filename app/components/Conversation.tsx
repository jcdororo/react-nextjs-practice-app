'use client'

import React from 'react'

const Conversation = () => {
  return (
    <div className='bg-purple-300 absolute m-px w-full h-5/6'>
      <div className='text-left'>
        <div>이름</div>
        상대대화
      </div>      
      <div className='text-right'>
        <div>이름</div>
        내 대화
      </div>
    </div>
  )
}

export default Conversation