import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'; // styled-components를 import합니다.
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState';
import axios from 'axios';
import { ApiResponse } from './tsmodule';
const NewsPage =() =>{
  const navigate = useNavigate();
  const [state, setState] = useRecoilState<ApiResponse[]>(newsRecoil);

  useEffect(() => {
    axios
      .get('http://localhost:3000/news')
      .then((response) => {
        const data = response.data;
        setState(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function NewsNavigate (id:string, author:string):any {
    
    return navigate(`/news/${author}/${id}`);
  }
  const PagePlusFC=()=>{
    axios
    .post('http://localhost:3000/newsPagePlus')
    .then((response)=>{
      const data = response.data;
      setState(data)

    }).catch((err) => {
      console.log(err.message);
    });
  }

  return (
    <>

      <NewsContainer>
        <NewsTitle>Crypto News</NewsTitle>

        {state &&
          state.map((item,index) => {
            return (
              <NewsParent
                key={item.id}
                onClick={() => NewsNavigate(item.id, item.author)}
              >
                <NewsContent>{index}.{item.title}</NewsContent>
                <div>
                  <NewsAuthor>{item.author}</NewsAuthor>
                  <NewsTime>{item.publishedAt}</NewsTime>
                </div>
              </NewsParent>
              
            );
          })}
          <NewsPagePlusComponents onClick={()=> PagePlusFC()} >View more</NewsPagePlusComponents>
      </NewsContainer>
    </>
  );
}
const NewsContainer = styled.div`
  overflow-y: scroll;
  border: 1px solid rgb(40, 40, 80);
  position: relative;
  height:65vh;
`;
const NewsPagePlusComponents = styled.div`
color:pink;
text-align:center;
margin:30px;
cursor: pointer;
`
const NewsTitle = styled.div`
  border-top: 1px solid rgb(40, 40, 80);
  text-align: center;
  font-size: 14px;
  color: rgb(124, 124, 127);
  padding: 10px;
  border-bottom: 1px solid rgb(40, 40, 80);
`;

const NewsParent = styled.div`
  color: white;
  border-bottom: 1px solid rgb(40, 40, 80);
  padding: 20px;

  &:hover {
    background-color: rgb(99, 97, 97);
  }
`;

const NewsContent = styled.div`
  width: 100%;
  font-size: 12px;
  text-align: center;
  cursor: pointer;

`;

const NewsAuthor = styled.div`
  text-align: center;
  font-size: 10px;
  color: rgb(178, 146, 146);
`;

const NewsTime = styled.div`
  text-align: center;
  font-size: 10px;
  color: green;
`;

export default React.memo(NewsPage)
