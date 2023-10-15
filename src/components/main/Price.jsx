import '../main/Price.css';
import Search from '../../../public/Search.png';
import { PriceSocket } from './PriceSocket.jsx';

export const INFO_LIST = [
  { id: 1, content: '★' },
  { id: 2, content: 'BTC' },
  { id: 3, content: 'NEO' },
  { id: 4, content: 'DAI' },
  { id: 5, content: 'USDT' },
  { id: 6, content: 'DAI' },
];
// 함수 안에 뒀을때 리렌더 될때 마다 변수가 새로 항당 될 수 있어서 밖이나 파일 분리
export const Price = () => {
  return (
    <>
      <div className="Price_Search">
        <span>
          <img src={Search} />
        </span>
        <input placeholder="Search"></input>
      </div>
      <div className="Price_CoinTitle">
        {INFO_LIST.map((info) => {
          return (
            <>
              <div id={info.id}>{info.content}</div>
            </>
          );
        })}
      </div>
      <div className="Price_CoinHead">
        <div>Pairs</div>
        <div>Price</div>
        <div>%</div>
      </div>
      <PriceSocket />
    </>
  );
};
