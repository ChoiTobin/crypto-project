import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import '../main/Candle.css';
import { scaleBand, scaleLinear } from 'd3';
function Candle() {

const [time, setTime] = useState([]);

useEffect(()=>{
    fetch('https://api.upbit.com/v1/candles/minutes/5?market=KRW-BTC&count=100')
    .then((response) => response.json())
    .then((data)=> {
      setTime(data)
    })
  },[])

useEffect(() => {
  
  const svgWidth = 800
  const svgHeight = 570
  

  const svg = d3.select('.chart')
    .append("svg")
    .attr("width",svgWidth)
    .attr("height",svgHeight)
  


  
const margin = {top:20,right:20,left:100,bottom:100}
const groupWidth = 1000 - margin.left - margin.right
const groupHeight = 400 -margin.top - margin.bottom


  //------------------------------------------TOP--------------------------

  

  const chartGroup = svg.append('g')
  .attr('width', groupWidth)
  .attr('height', groupHeight)



const yScaleChart = d3.scaleLinear()
  .domain([d3.min(time, d => d.low_price), d3.max(time, d => d.high_price)])
  .range([0,400]);


chartGroup
  .selectAll('rect')
  .data(time)
  .enter()
  .append('rect')
  .attr('width', 5)
  .attr('height', d => Math.abs(yScaleChart(d.opening_price) - yScaleChart(d.trade_price))) 
  // 개시 가격과 종가의 차이의  높이 
  .attr('x', (d, i) => i *7)
  .attr('y', d => Math.min(yScaleChart(d.opening_price), yScaleChart(d.trade_price)))
  // 개시 가격과 종가 중 작은 값을 y로 설정
  .style('fill', d => d.opening_price < d.trade_price ?'red' :"white")














//------------------------------------------BOTTOM--------------------------

const volLumeGroup_active_move = -180
//볼륨 그룹을 위 아래로 움직입니다.


const volumeGroup =  svg.append('g')
  .attr('width',groupWidth)
  .attr('height',groupHeight)
  .attr("transform", `translate(${30},${0 + volLumeGroup_active_move})`)
  


//3. BarGroup에 data 추가 : append 해야하는줄 알았는데 아니네
      const y = scaleLinear()
        .domain([0,d3.max(time,d=>d.candle_acc_trade_volume)])
        .range([0,100])

      const x = scaleBand()
        .domain(time.map(item => item.candle_acc_trade_volume))
        .range([0,100])
      volumeGroup
      .selectAll('rect')
      .data(time)    
      .enter()
      .append('rect')
      .attr('width',5)
      .attr('height', d => y(d.candle_acc_trade_volume))
      .attr('x', (d, i) => i * 7)
      .attr('y', d => (svgWidth - y(d.candle_acc_trade_volume)-50)
      ) 
      // 아래에서 위로 향하도록 y 좌표 설정
      //bar막대 위로 올리면 y도 밑바닥 설정 제대로 해주기 
      .style('fill',"red")
      
  //4.거래량이랑 차트 따로 만들기 둘다 axisBottom, axisLeft 주고 아예 따로 표시하기    



  return () => {
      svg.remove(); // SVG 요소를 제거하고 해당 리소스를 정리합니다.
    };

    },[time])

  return (
    <>
        <div className="chart"/>
    </>
  );
}

export default Candle;





//마지막 저 높이 어떻게 처리해야할지..  남는부분들이 너무 많다..
//  .range([0, 1000]);

