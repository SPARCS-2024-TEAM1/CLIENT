import { atom } from 'recoil';

export interface userStateType {
  phoneNumber: string;
  nickName: string;
  userId: number;
}

export const userState = atom<userStateType>({
  key: 'userState',
  default: {
    phoneNumber: '',
    nickName: '',
    userId: 0,
  },
});
