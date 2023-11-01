import * as React from 'react';
import Search from '../../../public/Search.png';
import { PriceSocket } from './PriceSocket.jsx';
import { useState } from 'react';
import styled from 'styled-components';
export const INFO_LIST = [
  { id: 1, content: '★' },
  { id: 2, content: 'BTC' },
  { id: 3, content: 'NEO' },
  { id: 4, content: 'DAI' },
  { id: 5, content: 'USDT' },
  { id: 6, content: 'DAI' },
];

// 함수 안에 뒀을때 리렌더 될때 마다 변수가 새로 항당 될 수 있어서 밖이나 파일 분리
export const Price:React.FC = () => {
  const [FilterState, setFilterState] = useState('');
  const TextFilterFC = (e:any) => {
    setFilterState(e.target.value);
  };
  return (
    <>
      <PriceSearch>
        <SearchIcon>
          <SearchIconImage src={Search} />
        </SearchIcon>
        <SearchInput
          onChange={(e) => TextFilterFC(e)}
          placeholder="Search"
        ></SearchInput>
      </PriceSearch>
      <CoinTitle>
        {INFO_LIST.map((info,index) => {
          return (
            <>
              <div key={index} id={info.id.toString()} >{info.content}</div>
            </>
          );
        })}
      </CoinTitle>
      <CoinHead>
        <div>Pairs</div>
        <div>Price</div>
        <div>%</div>
      </CoinHead>
      <PriceSocket data={FilterState} />
    </>
  );
};
const PriceSearch = styled.div`
  display: flex;
  width: 94%;
  min-height: 2.5rem;
  border: 1px solid rgb(40, 40, 80);
  border-radius: 5px;
  margin-left: 5px;
  margin-top: 10px;
  background-color: rgb(42, 46, 57);
  position: relative;
`;

const SearchIcon = styled.span`
  border: 0px solid;
  margin: 10px;
`;

const SearchInput = styled.input`
  background-color: rgb(42, 46, 57);
  border: 0px solid;
  outline: none;
  color: white;
  margin-left: 10px;
  min-width: 80%;
`;

const SearchIconImage = styled.img`
  width: 16px;
  position: absolute;
`;

const CoinTitle = styled.div`
  margin-top: 10px;
  background-color: rgb(28, 32, 48);
  width: 100%;
  height: 5%;
  color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  border-bottom: 1px solid rgb(40, 40, 80);
  border-top: 1px solid rgb(40, 40, 80);
`;

const CoinHead = styled.div`
  background-color: rgb(19, 23, 24);
  border-bottom: 1px solid rgb(40, 40, 80);
  width: 100%;
  height: 4%;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: gray;
`;
