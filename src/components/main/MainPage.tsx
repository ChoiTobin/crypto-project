import { Price } from './Price';
import * as React from 'react';
import { Layout } from '../layout/Layout';
import { OrderBook } from './OrderBook';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      // alert('로그인을 해주세요');
      navigate('/signin');
    } else {
      // alert('반갑습니다');
    }
  }, []);
  return (
    <>
      <Layout>
        <MainPageNav>
          <MainPageLeft>
            <Price />
          </MainPageLeft>
          <MainPageRight>
            <OrderBook />
          </MainPageRight>
        </MainPageNav>
      </Layout>
    </>
  );
};

const MainPageNav = styled.div`
  width: 100%;
  justify-content: space-between;
  overflow: auto;
  display: flex;
`;

const MainPageLeft = styled.div`
  width: 50%;
  border: 1px solid rgb(40, 40, 80);
  margin: 0px 10px 20px 10px;
  height: 100vh;
  border-radius: 3px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    background: rgb(46, 46, 50);
  }
`;

const MainPageRight = styled.div`
  width: 50%;
  border: 1px solid rgb(40, 40, 80);
  margin: 0px 10px 20px 10px;
  border-radius: 3px;
`;
export default MainPage