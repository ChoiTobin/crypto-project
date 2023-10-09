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
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div className='NewsPage_overflow-y'>
     {
          newsData?.map((item,index)=>{
            return(
          <div key={item.id} className="NewsPageParrent">
            <div>
              <span>이미지</span>
              <span>{item.title}</span>   
            </div>
              <div>
              <span>author</span>
              <span>publishedAt</span>
              </div>
              <div>

              <span>content</span>
                <div>url</div>
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
