'use client'

import { ObjectId } from 'mongodb'
import { chatting, getUserSession, selectChat, sessionState, userList } from 'pages/api/recoil/usersAtoms'
import { useRecoilState, useRecoilValue } from 'recoil'

interface Users {
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  role: string
}

const ChatList = () => {
  const [userSession,setUserSession]:any = useRecoilState(sessionState);
  const [select,setSelect] = useRecoilState(selectChat);
  
  const users = useRecoilValue(userList);
  const session:any = useRecoilValue(getUserSession);
  const myName = userSession.user.name;

  
  async function handleClick(e:React.MouseEvent<HTMLInputElement>, x:Users):Promise<void> {
    setSelect({
      name: x.name,
      receiver_id: x.email
    });

  }
  
  

  return (
    <div className="flex-grow-1 bg-yellow-200 w-56 text-center p-1">
      <span className="bg-green-400">
        <span className='font-bold'>{myName}</span>님의 대화상대
      </span>
      {
        users.map((x:Users,i:number) => (
          x.name !== session.user.name
          ? 
          <input 
            type='text'
            readOnly
            key={i} className='w-11/12 border border-solid rounded-md bg-orange-200 border-pink-400  text-center m-1 cursor-pointer'
            onClick={(e) => handleClick(e, x)}
            value={x.name}
          />
          :
          <div key={i} className='hidden'></div>
        ))
      }
    </div>
  )
}

export default ChatList