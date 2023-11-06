'use client'

import { getMessages } from 'pages/api/recoil/usersAtoms';
import { useState } from 'react';
import { useRecoilValue } from 'recoil'

const Conversation = () => {
  const [isLoading, setIsLoading] = useState(true)
  const messages = useRecoilValue(getMessages);

  
  // console.log('messages',messages)
  


   



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

      {
        messages.map((x, i) => {
          <div key={i} className='text-left'>
            <div>이름 : {x.sender_id}</div>
            {x.text}
          </div>  
        })
      }
    </div>
  )
}

export default Conversation