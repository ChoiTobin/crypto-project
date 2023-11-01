export type ApiResponse = {
    author:string,
    content:string,
    description:string,
    publishedAt:string,
    id:string,
    source:any,
    title:string,
    url:string,
    urlToImage:string
  }
export type CandleData = {
  candle_acc_trade_price: number,
  candle_acc_trade_volume: number
  candle_date_time_kst: string,
  candle_date_time_utc: string,
  high_price: number,
  low_price: number,
  market:string,
  opening_price:number,
  timestamp:number,
  trade_price: number,
  unit: number
}