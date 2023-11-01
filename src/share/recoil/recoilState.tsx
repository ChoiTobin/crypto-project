import { atom } from 'recoil';
import { ApiResponse } from '../../components/main/tsmodule';
import { CandleData } from '../../components/main/tsmodule';

export const newsRecoil = atom({
  key: 'newsRecoil', // 고유한 문자열 키
  default: [] as ApiResponse[], // 초기값
});
export const resultState = atom({
  key: 'resultState', // 다른 새로운 고유한 문자열 키
  default: [] as CandleData[], // 초기값 (필요에 따라 설정)
});
