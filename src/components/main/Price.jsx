import "../main/Price.css";
import Search from'../../../public/Search.png'
import { PriceSocket } from './PriceSocket.jsx';



export const Price = () => {
    
  return (
    <>
      <div className="Price_Search">
        <span>
          <img src={Search}/>
        </span>
        <input placeholder="Search"></input>
      </div>
      <div className='Price_CoinTitle'>
        <div>★</div>
        <div>BTC</div>
        <div>ETH</div>
        <div>NEO</div>
        <div>DAI</div>
        <div>USDT</div>
        <div>DAI</div>
      </div>
      <div className='Price_CoinHead'>
        <div>Pairs</div>
        <div>Price</div>
        <div>%</div>
      </div>
      <PriceSocket/>
    </>
  )
}
