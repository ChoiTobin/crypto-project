import React, { useEffect, useState } from 'react';
import '../main/NewsPage.css';
import Apis from '../../share/Apis';


function NewsPage() {
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Apis.NewsPageFetch('http://localhost:3000/crypto')
      .then((data) => {
        setNewsData(data);
        console.log(data)
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div className='NewsPage_overflow-y'>
        <div className='NewsPage_Title'>Crypto News</div>
          {
          newsData?.map((item,index)=>{
            return(
              <div key={item.id} className="NewsPage_Parrent">
                <div className='NewsPage_Content'>
                  <div >{item.title}</div>   
                </div>
                <div>
                  <div className='NewsPage_Author'>{item.author}</div>
                  <div className='NewsPage_Time'>{item.publishedAt}</div>
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
