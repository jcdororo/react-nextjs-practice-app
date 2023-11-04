'use client'

import { ObjectId } from 'mongodb'
import { getUserSession, userList } from 'pages/api/recoil/usersAtoms'
import { useRecoilValue } from 'recoil'

interface Users {
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  role: string
}

const ChatList = () => {
  const users = useRecoilValue(userList);
  const session:any = useRecoilValue(getUserSession);

  

  
  
  

  return (
    <div className="flex-grow-1 bg-yellow-200">
      <span>대화상대</span>
      {
        users.map((x:Users,i:number) => (
          x.name !== session.user.name
          ? 
          <div key={i} className='border border-solid rounded-md  border-pink-400 py-2 text-center my-1 cursor-pointer'>
            {x.name}
          </div>
          :
          <div key={i} className='hidden'></div>
        ))
       
      }
      <div className="bg-green-400">유저리스트</div>
    </div>
  )
}

export default ChatList