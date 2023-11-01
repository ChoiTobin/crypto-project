import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import * as React from 'react';

import { Line } from 'react-chartjs-2';
import NewsPage from './NewsPage';
import { useRecoilState } from 'recoil';
import { resultState } from '../../share/recoil/recoilState'; // recoil.js 파일의 경로를 수정
import { CandleData } from './tsmodule';
export const OrderBook = () => {
  const [time, setTime] = useRecoilState<CandleData[]>(resultState); // Recoil을 사용하여 time 상태 가져오기
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  let priceArr: number[] = [];
  let labels: string[] = [];
  // 데이터를 가공하여 차트 데이터 생성
  try {
     priceArr = time.map((item) => item.trade_price);
     labels= time.map((item) => item.candle_date_time_kst.substr(11));
  } catch (error) {
    console.log(error);
  }

  const data = {
    labels,
    datasets: [
      {
        label: time[0]?.market,
        data: priceArr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <Line
        style={{ width: '60%', margin: '0 auto' }}
        //@ts-ignore'
        options={options}
        data={data}
      />
      <NewsPage />
    </>
  );
};
