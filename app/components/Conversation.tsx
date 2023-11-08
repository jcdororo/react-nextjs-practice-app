'use client'

import { chatting, getUserSession, msg } from 'pages/api/recoil/usersAtoms';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil'

interface Item {
  _id: string,
  text: string,
  sender_id: string,
  receiver_id: string
}

interface Session {
  user: {
    name: string,
    email: string,
    role: string  
  }  
}

const Conversation = () => {
  
  const chattings = useRecoilValue(chatting);
  const chatContainerRef: any = useRef(null);
  const [msgState, setMsgState] = useRecoilState(msg);
  const mySession:Session = useRecoilValue(getUserSession);
  
  const [refresh, setRefresh] = useState(false);
  // let refresh = false;
  
  const idRef:any = useRef(null);


  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  
  useEffect(() => {
    fetch(`/api/post/getChat?sender_id=${chattings.sender_id}&receiver_id=${chattings.receiver_id}`)
    .then(r => r.json())
    .then(r => setMsgState(r))
    .then(scrollToBottom);


  }, [chattings,refresh])


  useEffect(() => {
    idRef.current = setInterval(() => {
      setRefresh(!refresh);

    }, 1000);

    return () => {
      clearInterval(idRef.current);
      idRef.current = null;
    }
  }, [refresh])

 
  

  useEffect(() => {
    scrollToBottom(); // Scroll to the bottom on every render
  }, [msgState]);
  



  return (
    <div className='bg-purple-300 absolute m-px w-full h-5/6 overflow-scroll' ref={chatContainerRef}>
      {
        msgState.map((x:Item, i:number) => (
          <div 
            key={i} 
            className={(x.sender_id != mySession.user.email ? 'text-left' : 'text-right')}
          >
            {x.text}            
          </div>

        ))
      }
    </div>
  )
}

export default Conversation