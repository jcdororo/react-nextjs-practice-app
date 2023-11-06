import {
  RecoilRoot,
  RecoilState,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';




export const usersState = atom({
  key: 'usersState',
  default: []
})

export const userList = selector({
  key: 'userList',
  get: ({get}) => {
    const temp = get(usersState);

    return temp;
  },
});


export const sessionState: RecoilState<{ user: { name: string; email: string; role: string } }> = atom({
  key: 'sessionState',
  default: {
    user: {
    name: '',
    email: '',
    role: ''
  }}
})

export const getUserSession:any = selector({
  key: 'getUserSession',
  get: ({get}) => {
    const temp = get(sessionState);

    return temp;
  },
});

export const selectChat = atom({
  key: 'selectChat',
  default : {
    name: '',
    receiver_id: ''
  }
})

export const chatting = selector({
  key: 'chatting',
  get: ({get}) => {
    const sender_id = get(sessionState);
    const receiver_id = get(selectChat);
    const temp = {
      sender_id: sender_id.user.email,
      receiver_id: receiver_id.receiver_id
    }
    return temp;
  }
})

export const messages = atom({
  key: 'messages',
  default: {}
})

export const getMessages = selector({
  key: 'getMessages',
  get: ({get}) => {
    const temp = get(messages)

    return temp;
  }
})