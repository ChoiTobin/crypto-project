import React, { useEffect, useState } from 'react';
import '../main/NewsPage.css';
import Apis from '../../share/Api/Apis';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState';
// Context 생성

function NewsPage() {


  const navigate = useNavigate();
  const [newsData, setNewsData] = useState(null);
  const [state, setState] = useRecoilState(newsRecoil);


  useEffect(() => {
    Apis.NewsPageFetch('http://localhost:3000/news')
      .then((data) => {
        setState(data);
        setNewsData(data)
      })
      .catch((err) => {
        setError(err.message);
      });

  }, []);

  function NewsNavigate(id, author) {
    return navigate(`/news/${author}/${id}`);
  }

  // NewsContext.Provider로 newsData를 제공합니다.
  return (
    <>
      <div className="NewsPage_overflow-y">
        <div className="NewsPage_Title">Crypto News</div>
        {newsData &&
              newsData.map((item, index) => {
                return (
                  <div key={item.id} className="NewsPage_Parrent" onClick={() => NewsNavigate(item.id, item.author)}>
                    <div className="NewsPage_Content">
                      <div>{item.title}</div>
                    </div>
                    <div>
                      <div className="NewsPage_Author">{item.author}</div>
                      <div className="NewsPage_Time">{item.publishedAt}</div>
                    </div>
                  </div>
                )
              })
            
        }
      </div>
    </>
  );
}

export default NewsPage;
