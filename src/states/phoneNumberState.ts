import { atom } from 'recoil';

export const phoneNumberState = atom<string>({
  key: 'phoneNumberState',
  default: '',
});
