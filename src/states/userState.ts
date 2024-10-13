import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface userStateType {
  phoneNumber: string;
  nickName: string;
  userId: number;
}

const { persistAtom } = recoilPersist({
  key: 'userState',
  storage: localStorage,
});

export const userState = atom<userStateType>({
  key: 'userState',
  default: {
    phoneNumber: '',
    nickName: '',
    userId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
