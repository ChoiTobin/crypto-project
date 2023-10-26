// import Candle from './Candle';
import { Price } from './Price';
import { Layout } from '../layout/Layout';
import { OrderBook } from './OrderBook';
// import Candle from './Candle';
// import CandleRight from './Candle_Right';
import '../main/MainPage.css';
// import CandleStick from './CandleStick';
export const MainPage = () => {
  return (
    <>
      <Layout>
        <div className="MainPage_Nav">
          <div className="MainPage_Left ">
            <Price />
          </div>
          <div className="MainPage_Right">
            <OrderBook />
          </div>
        </div>
      </Layout>
    </>
  );
};
