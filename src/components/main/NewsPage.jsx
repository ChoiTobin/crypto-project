import React, { useEffect, useState } from 'react';
import '../main/NewsPage.css';

function NewsPage() {
  const [newsData, setNewsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/crypto') // 백엔드 서버로의 API 요청
      .then((response) => {
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setNewsData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  
 

  return (
    <>
     {
          newsData?.articles.map((item)=>{
            return(
          <div key={item.title} className="NewsPageParrent">
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
    
    </>
  );
}

export default NewsPage;
