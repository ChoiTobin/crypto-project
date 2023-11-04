import * as React from 'react';
import { useWebSocket } from '../../hook/useWebSocket';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil'; // useRecoilValue 추가
import { resultState } from '../../share/recoil/recoilState'; // Recoil 설정 파일 경로를 수정
import axios from 'axios';
import { CandleData } from './tsmodule';
interface PriceSocketProps {
  data: string;
}
export const PriceSocket:React.FC <PriceSocketProps> = ({ data }) => {

  const coinData = useWebSocket(); // useWebSocket 훅에서 받아온 데이터를 coinData로 저장
  const setResult = useSetRecoilState<CandleData[]>(resultState); // useSetRecoilState를 사용하여 set 함수 가져오기

  const filterData = (coinData:any, data:string):any[]=> {
    data = data.toUpperCase();
    //소문자도 대문자
    const filteredData = Object.values(coinData).filter((item) => {
      const found = item.code.toUpperCase().indexOf(data);
      if (found !== -1) {
        return item.code;
      }
    });
    return filteredData;
  };
  // filter 함수를 사용하여 조건에 맞는 데이터만 반환합니다.
  const filteredCoinData = filterData(coinData, data); // 필터된 데이터를 저장

  const renderCoinData =  (coin:any):React.ReactNode => {
    if (!coin) return null;

    return (
      <PriceSocketLine key={coin.code} onClick={() => sandChart(coin)}>
        <div>
          <span>★</span>
          {coin.code}
        </div>
        <div>{coin.trade_price}</div>
        {floatCal(coin.signed_change_rate)}
      </PriceSocketLine>
    );
  };


  const floatCal = (item:number):React.ReactNode => {
    if (item * 100 > 0) {
      return <div style={{ color: 'green' }}>{(item * 100).toFixed(2)}%</div>;
    } else if (item * 100 < 0) {
      return <div style={{ color: 'red' }}>{(item * 100).toFixed(2)}%</div>;
    } else {
      return <div style={{ color: 'white' }}>{(item * 100).toFixed(2)}%</div>;
    }
  };

  const apiPost = (code:string) => {
    const url = 'http://localhost:3000/order';
    return axios
      .post(url, { data: code })
      .then((response) => setResult(response.data));
  };

  const sandChart = (coinData:any) => {
    const { code } = coinData;

      apiPost(code);
  };

  return (
    <PriceSocketBody>
      {
        filteredCoinData.length > 0 // 데이터가 필터링되었는지 확인
          ? filteredCoinData.map(renderCoinData) // 필터된 데이터를 렌더링
          : Object.values(coinData).map(renderCoinData) // 필터된 데이터가 없을 경우 모든 데이터 렌더링
      }
    </PriceSocketBody>
  );
};
const PriceSocketBody = styled.div`
  color: white;
  font-size: 13px;
`;

const PriceSocketLine = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid rgb(40, 40, 80);

  &:hover {
    background-color: rgb(54, 54, 54);
  }
`;

