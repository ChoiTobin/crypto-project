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
  justify-content: space-between;
  display: flex;
`;

const MainPageLeft = styled.div`
  width: 50%;
  height:100vh;
  border: 1px solid rgb(40, 40, 80);
  border-radius: 3px;
  overflow-y: scroll;
`;

const MainPageRight = styled.div`
  width: 50%;
  height:100vh;
  border-radius: 3px;
`;
export default MainPage