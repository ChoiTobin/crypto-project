import Candle from './Candle'
import { Price } from './Price'
import { Layout } from '../layout/Layout'
import { OrderBook } from './OrderBook';
import '../main/MainPage.css';
export const MainPage = () => {

  return (
    <>
    <Layout>
      <div className='MainPage_Nav'>
        <div className='MainPage_Left'>
          <Price/>
        </div>
        <div className='MainPage_Center'>
          <Candle/>
        </div>
        <div className='MainPage_Right'>
          <OrderBook/>
        </div>
      </div>
        
    </Layout>
    </>
  )
}