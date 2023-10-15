import React from 'react';
import { Layout } from '../layout/Layout';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsData] = useRecoilState(newsRecoil);

  const filteredNews = newsData.find((item) => item.id === id);

  if (!filteredNews) {
    // 예외 처리: 해당 ID에 맞는 뉴스를 찾을 수 없는 경우
    return (
      <Layout>
        <div>
          <div className="text-xl text-white">News Not Found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <div className="text-xl text-white font-bold mb-4">
          {filteredNews.title}
        </div>
        <div className="flex text-md text-white flex-col items-center md:flex-row ">
          <div className="md:mr-4">
            <img
              className="w-35 h-32 object-cover"
              src={filteredNews.urlToImage}
              alt="이미지 설명"
            />
          </div>
          <div>
            <div className="mb-3">{filteredNews.content}</div>
            <div className="text-sm mb-3 text-gray-500">
              <div>Author: {filteredNews.author}</div>
              <div>Published At: {filteredNews.publishedAt}</div>
            </div>
            <Link
              className="bg-blue-500 text-white py-2 px-3 rounded"
              to={filteredNews.url}
            >
              상세보기 URL
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
