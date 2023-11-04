import {
  RecoilRoot,
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


export const sessionState:any = atom({
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