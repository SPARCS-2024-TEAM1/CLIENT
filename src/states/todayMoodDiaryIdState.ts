import { atom } from 'recoil';

export const todayMoodDiaryIdState = atom<string>({
  key: 'todayMoodDiaryIdState',
  default: '',
});
