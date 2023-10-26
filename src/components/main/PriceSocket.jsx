import './PriceSocket.css';
import { useWebSocket } from '../../hook/useWebSocket';
import { useEffect } from 'react';

export const PriceSocket = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  const coinData = useWebSocket(); // useWebSocket 훅에서 받아온 데이터를 coinData로 저장

  const floatCal = (item) => {
    if (item * 100 > 0) {
      return <div style={{ color: 'green' }}>{(item * 100).toFixed(2)}%</div>;
    } else if (item * 100 < 0) {
      return <div style={{ color: 'red' }}>{(item * 100).toFixed(2)}%</div>;
    } else {
      return <div style={{ color: 'white' }}>{(item * 100).toFixed(2)}%</div>;
    }
  };

  const filterData = (coinData, data) => {
    data = data.toUpperCase();
    //소문자도 대문자

    const filteredData = Object.values(coinData).filter((item) => {
      for (const char of data) {
        if (item.code.includes(char)) return item.code;
      }
    });
    return filteredData;
  };
  // filter 함수를 사용하여 조건에 맞는 데이터만 반환합니다.

  const renderCoinData = (coin) => {
    if (!coin) return null;
    return (
      <div key={coin.code} className="PriceSocket_Line">
        <div>
          <span>★</span>
          {coin.code}
        </div>
        <div>{coin.trade_price}</div>
        {floatCal(coin.signed_change_rate)}
      </div>
    );
  };

  const filteredCoinData = filterData(coinData, data); // 필터된 데이터를 저장

  return (
    <div className="PriceSocket_body">
      {
        filteredCoinData.length > 0 // 데이터가 필터링되었는지 확인
          ? filteredCoinData.map(renderCoinData) // 필터된 데이터를 렌더링
          : Object.values(coinData).map(renderCoinData) // 필터된 데이터가 없을 경우 모든 데이터 렌더링
      }
    </div>
  );
};
