import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { scaleBand, scaleLinear } from 'd3';
import "../main/Candle2.css"
function Candle2() {

//하단 거래량 , x,y좌표
const [time, setTime] = useState([]);

//0.data 받아옴
useEffect(()=>{
    fetch('https://api.upbit.com/v1/candles/minutes/5?market=KRW-BTC&count=100')
    .then((response) => response.json())
    .then((data)=> {
      setTime(data)
    })
  },[])

useEffect(() => {
  
  const svgWidth = 100
  const svgHeight = 570
  

  const svg = d3.select('.chart2')
    .append("svg")
    .attr("width",svgWidth)
    .attr("height",svgHeight)
  //------------------------------------------TOP--------------------------
  const Price_Chart = d3.scaleLinear()
  .domain([d3.min(time, d => d.low_price), d3.max(time, d => d.high_price)])
  .range([400,0])  

  svg.append("g")
  .attr("transform", `translate(${0},${0})`)
  .call(d3.axisRight(Price_Chart))
  //------------------------------------------BOTTOM--------------------------

  const volLumeGroup_active_move = -180
  //볼륨 그룹을 위 아래로 움직입니다.

  const Left_volume = d3.scaleLinear()
            .domain([0,100])
            .range([100,0])  
            
  svg.append("g")
          .attr("transform", `translate(${0},${800-155+volLumeGroup_active_move})`)
            //#@! 여기 같이 움직이기
          .call(d3.axisRight(Left_volume));
  


  return () => {
      svg.remove(); // SVG 요소를 제거하고 해당 리소스를 정리합니다.
    };

    },[time])

  return (
    <>
    
      <div className="chart2"></div>
    
    </>
  );
}

export default Candle2;





//마지막 저 높이 어떻게 처리해야할지..  남는부분들이 너무 많다..
//  .range([0, 1000]);

