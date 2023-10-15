import './PriceSocket.css';
import { useWebSocket } from '../../hook/useWebSocket';

export const PriceSocket = () => {
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

  return (
    <div className="PriceSocket_body">
      {Object.values(coinData).map(renderCoinData)}
    </div>
  );
};
