import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import '../main/Candle.css';

function Candle() {
  
  const [time, setTime] = useState([]);

  useEffect(()=>{
    fetch('https://api.upbit.com/v1/candles/minutes/10?market=KRW-BTC&count=60')
    .then((response) => response.json())
    .then((data)=> {
      setTime(data)
    })
  },[])

  useEffect(() => {
  const width = 600;
  const height = 500;
  const marginBottom =50;
  var padding = 20;

  const lowPrice = d3.min(time, d => d.low_price);
  const highPrice = d3.max(time, d => d.high_price);

  const timeDate = time.map((item =>
      new Date(item.candle_date_time_kst)))



      //한번에 볼 수 있게 해야할것 같은데 스크롤이아니고 줌을 통해서 데이터를 땡겨와야할듯.
      


    //SVG 생성
    const svg = d3.select(".chart")
    .append("svg")
    .attr("width",width)
    .attr("height",height)

    //x축
    var xScale = d3.scaleTime()
    .domain([d3.min(timeDate),d3.max(timeDate)])
    .range([80, width-10])
    //x축 - 데이터
    var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(d3.timeHour.every(1))
    .tickFormat(d3.timeFormat("%H:%M"))// 시간 형식을 조정할 수 있습니다.
  
    
    //x축 - 축
    const gx = svg.append("g")
    .attr("transform",`translate(0,${height - marginBottom})`)
    .call(xAxis)
    .selectAll("text") // x 축의 눈금 선 선택
    .style("fill", "white") // 눈금 선의 스타일을 흰색으로 변경

    //x축 - 그룹화 ,style

    //y축
    const yScale = d3.scaleLinear()
    .domain([lowPrice, highPrice])
    .range([height-100,10])
    


    //y축
    const yAxis = d3.axisLeft()
    .scale(yScale)
    //y축 그룹화
    const gy = svg.append("g")
    .attr("transform",`translate(${padding+50},0)`)
    .call(yAxis)
    


//시작
//     if (time.length === 0) return;

//     const width = 670
//     const height = 470;
//     const padding =90;
//     const yAxisVolumePadding=400;
// //width height차트 크기변경시 Volume padding줄이기

//     // 스케일 설정
//     const timeData = time.map(d => new Date(d.candle_date_time_kst));
//     const xScale = d3.scaleTime()
//       .domain([d3.min(timeData), d3.max(timeData)])
//       .range([padding, width - padding]);

//     const yScalePrice = d3.scaleLinear()
//       .domain([d3.min(time, function (d) { return d.low_price }), d3.max(time, function (d) { return d.high_price })])
//       .range([yAxisVolumePadding, 0]);

//     const yScaleVolume = d3.scaleLinear()
//       .domain([ d3.max(time, function (d) { return d.candle_acc_trade_volume }),0])
//       .range([yAxisVolumePadding,height - padding+50, height - padding / 3]); // 거래량 스케일을 높이의 반절로 조정

//     // 축 생성
//     const xAxis = d3.axisBottom(xScale)
//       .tickFormat(d3.timeFormat("%H:%M"));

//     const yAxisPrice = d3.axisRight(yScalePrice)
//       .ticks(14)
//       .tickSize(0)


//     const yAxisVolume = d3.axisRight(yScaleVolume)
//       .ticks(9)
//       .tickSize(6)
//       .tickPadding(0) // 거래량 표시를 100단위로 조정

//     // SVG 요소 생성 및 크기 설정
//     const svg = d3.select(".chart")
//       .append("svg")
//       .attr("width", width)
//       .attr("height", height)
//       ;

//     svg.append('g')
//       .attr('transform', `translate(0,${height - 20})`)
//       .call(xAxis)
//       .selectAll('text')
//       .style('fill', 'white')

//     svg.append('g')
//       .attr('transform', `translate(${width - 60},0)`)
//       .call(yAxisPrice)
//       .selectAll('text')
//       .style('fill', 'white');

//     svg.append('g')
//       .attr('transform', `translate(${width-1370 },0)`)
//       .call(yAxisVolume)
//       .selectAll('text')
//       .style('fill', 'white');

//     // 막대 그래프로 거래량 표시
//     svg.selectAll("rect")
//       .data(time)
//       .enter()
//       .append("rect")
//       .attr("x", function (d) { return xScale(new Date(d.candle_date_time_kst	)); })
//       .attr("y", function (d) { return yScaleVolume(d.candle_acc_trade_volume); })
//       .attr("width", 1) // 막대의 너비
//       .attr("height", function (d) { return (height - padding / 5) - yScaleVolume(d.candle_acc_trade_volume); })
//       .attr("fill", d => d.opening_price > d.trade_price ? "red" : "green")
// // 봉 차트 그리기
// svg.selectAll(".bar")
//   .data(time)
//   .enter()
//   .append("line")
//   .attr("x1", d => xScale(new Date(d.candle_date_time_kst)))
//   .attr("y1", d => yScalePrice(d.high_price))
//   .attr("x2", d => xScale(new Date(d.candle_date_time_kst)))
//   .attr("y2", d => yScalePrice(d.low_price))
//   .attr("stroke","white")
//   .attr("stroke-width", 0.2)
//   .attr("class", "bar")
//   .attr("opacity",1);

// // 캔들 차트 그리기
// svg.selectAll(".candle")
//   .data(time)
//   .enter()
//   .append("rect")
//   .attr("x", d => xScale(new Date(d.candle_date_time_kst)) -0.8)
//   .attr("y", d => yScalePrice(Math.max(d.opening_price, d.trade_price)))
//   .attr("width",2)
//   .attr("height", d => yScalePrice(Math.min(d.opening_price, d.trade_price)) - yScalePrice(Math.max(d.opening_price, d.trade_price)))
//   .attr("fill", d => d.opening_price > d.trade_price ? "red" : "green")
//   .attr("class", "candle")
//   .attr("opacity",0.9);
  


  
// //줌인
// const zoom = d3.zoom()
// .scaleExtent([1, 10]) // 최소 및 최대 확대/축소 배율 설정
// .translateExtent([[width, height], [0, 0]]) // 화면 이동 범위 제한
// .on("zoom", function () {
//   svg.attr("transform", d3.event.transform);
// })


// svg.call(zoom)



//

    return () => {
      svg.remove(); // SVG 요소를 제거하고 해당 리소스를 정리합니다.
    };
  }, [time]
  //time이 원래는 들어간다. 아마 위에 svg.remove 풀어주면 괜찮을듯
  );


  return (
    <>
    
      <div className="chart"></div>

    </>
  );
}

export default Candle;