import { Layout } from '../layout/Layout'
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState'; // Recoil 상태 가져오기
import "../main/NewsDetail.css"
import { useEffect } from 'react';

const NewsDetail = () => {

  const ParamsId  = useParams();
  const [state, setState] = useRecoilState(newsRecoil);
 
    const filterData = state.filter((item) =>item.id == ParamsId.id)



  return (
    <Layout>
        {<>
        <div className='NewsDetail_Body'>
          <div className='NewsDetail_Title'>{filterData[0].title}</div>
          <div className='NewsDetail_flex'>
            <div>
              <img className="NewsDetail_Img" src={filterData[0].urlToImage} alt="이미지 설명"/>
            </div>  
            <div>
              <div className='NewsDetail_Content'>{filterData[0].content}</div>
              
            </div>
          </div>
          <div className='NewsDetail_Author'>{filterData[0].author}</div>
          <div className="NewsDetail_PublishedAt">{filterData[0].publishedAt}</div>
          <Link className="NewsDetail_Link" to={filterData[0].url}>상세보기 URL</Link>
            {/* a태그는 url주소 이동시 재렌더링 되지만 Link는 재렌더링 되지 않기 때문에 다른 url주소페이지가 열려도 페이지유지가능 */}
        </div>
        </>
        }
    </Layout>
  )
}

export default NewsDetail
