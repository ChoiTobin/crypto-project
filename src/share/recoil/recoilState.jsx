import { atom } from 'recoil';

export const newsRecoil = atom({
  key: 'newsRecoil', // 고유한 문자열 키
  default: '',    // 초기값
});
