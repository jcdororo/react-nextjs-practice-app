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


