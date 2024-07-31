import { atom } from 'recoil';

export const characterState = atom<string>({
  key: 'characterState',
  default: '',
});
