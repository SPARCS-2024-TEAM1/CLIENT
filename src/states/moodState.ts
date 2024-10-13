import { atom } from 'recoil';

export const moodState = atom<string>({
  key: 'moodState',
  default: '',
});
