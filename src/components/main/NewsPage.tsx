import * as React from 'react';
import { useEffect, useState } from 'react';

import styled from 'styled-components'; // styled-components를 import합니다.
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState';
import axios from 'axios';
import { ApiResponse } from './tsmodule';
function NewsPage() {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState<ApiResponse[]>([]);
  const [state, setState] = useRecoilState<ApiResponse[]>(newsRecoil);

  useEffect(() => {
    axios
      .get('http://localhost:3000/news')
      .then((response) => {
        const data = response.data;
        setState(data);
        setNewsData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function NewsNavigate (id:string, author:string):any {
    return navigate(`/news/${author}/${id}`);
  }

  return (
    <>
      <NewsContainer>
        <NewsTitle>Crypto News</NewsTitle>
        {newsData &&
          newsData.map((item) => {
            return (
              <NewsParent
                key={item.id}
                onClick={() => NewsNavigate(item.id, item.author)}
              >
                <NewsContent>{item.title}</NewsContent>
                <div>
                  <NewsAuthor>{item.author}</NewsAuthor>
                  <NewsTime>{item.publishedAt}</NewsTime>
                </div>
              </NewsParent>
            );
          })}
      </NewsContainer>
    </>
  );
}
const NewsContainer = styled.div`
  height: 400px;
  overflow-y: scroll;
  border: 1px solid rgb(40, 40, 80);

  position: relative;
`;

const NewsTitle = styled.div`
  border-top: 1px solid rgb(40, 40, 80);
  text-align: center;
  font-size: 15px;
  color: rgb(124, 124, 127);
  padding: 10px;
  border-bottom: 1px solid rgb(40, 40, 80);
`;

const NewsParent = styled.div`
  color: white;
  border-bottom: 1px solid rgb(40, 40, 80);
  padding: 40px;

  &:hover {
    background-color: rgb(99, 97, 97);
  }
`;

const NewsContent = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  overflow-y: hidden;
  text-align: center;
`;

const NewsAuthor = styled.div`
  text-align: center;
  font-size: 12px;
  color: rgb(178, 146, 146);
`;

const NewsTime = styled.div`
  text-align: center;
  font-size: 12px;
  color: rgb(178, 175, 175);
`;

export default React.memo(NewsPage)
