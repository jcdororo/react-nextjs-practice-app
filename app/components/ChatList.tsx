'use client'

import { ObjectId } from 'mongodb'
import { userList } from 'pages/api/recoil/usersAtoms'
import { useRecoilValue } from 'recoil'

interface propsUsers {
  _id: ObjectId,
  name: string,
  email: string,
  password: string,
  role: string
}

const ChatList = () => {
  const users = useRecoilValue(userList);
  

  
  
  

  return (
    <div className="flex-grow-1 bg-yellow-200">
      <span>대화상대</span>
      {
        users.map((x:propsUsers,i:number) => (
          <div key={i} className='border border-solid rounded-md  border-pink-400 py-2 text-center my-1 cursor-pointer'>
            {x.name}
          </div>
        ))
       
      }
      <div className="bg-green-400">유저리스트</div>
    </div>
  )
}

export default ChatList