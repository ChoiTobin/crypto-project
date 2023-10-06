import Candle from './Candle'
import { Price } from './Price'
import { Layout } from '../layout/Layout'
import { OrderBook } from './OrderBook';
import CandleRight from './Candle_Right';
import '../main/MainPage.css';
import NewsPage from './NewsPage';

export const MainPage = () => {

  return (
    <>
    <Layout>
      <div className='MainPage_Nav'>
          <div className='MainPage_Left '>
            <Price/>
          </div>
          <div className='MainPage_Center'>
              <Candle/>
          </div>
          <div className='MainPage_Center_Right'>
              <CandleRight/>
          </div>
          <div>
          </div>
          <div className='MainPage_Right'>
              <OrderBook/>
          </div>
          <div className='MainPage_NewsPage'>
            <NewsPage/>
          </div>
        </div>
    </Layout>
    </>
  )
}
