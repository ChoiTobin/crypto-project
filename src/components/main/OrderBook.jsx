import React from 'react'
import './OrderBook.css'
import { useEffect, useState } from 'react';

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
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


export const OrderBook = () => {
  const [time, setTime] = useState([]);
  
  useEffect(()=>{
    fetch('https://api.upbit.com/v1/candles/minutes/60?market=KRW-BTC&count=3')
    .then((response) => response.json())
    .then((data)=> {
      setTime(data)
    })
  },[])
  console.log(time)


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


const priceArr =[] 
const labels =[];

time.map((item)=>{return (
  priceArr.push(item.trade_price),
  labels.push(item.candle_date_time_utc.substr(12))
  )})
const data = {
  labels,
  datasets: [
    {
      label: 'BTC',
      data: priceArr,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};

  return (
    <>
      <Line options={options} data={data} />;
      

    </>
  )
}
