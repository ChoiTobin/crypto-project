import { Layout } from '../layout/Layout';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { newsRecoil } from '../../share/recoil/recoilState';
import styled from 'styled-components';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsData] = useRecoilState(newsRecoil);
  const filteredNews = newsData.find((item) => item.author === id);

  if (!filteredNews) {
    // 예외 처리: 해당 ID에 맞는 뉴스를 찾을 수 없는 경우
    return (
      <Layout>
        <div>
          <NewsDetailContainer>News Not Found</NewsDetailContainer>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <NewsDetailContainer>{filteredNews.title}</NewsDetailContainer>
      <NewsContent>
        <NewsImage src={filteredNews.urlToImage} alt="이미지 설명" />
        <div>
          <div>{filteredNews.content}</div>
          <div>
            <AuthorPublished>
              <div>Author: {filteredNews.author}</div>
              <div>Published At: {filteredNews.publishedAt}</div>
            </AuthorPublished>
            <StyledLink to={filteredNews.url}>상세보기 URL</StyledLink>
          </div>
        </div>
      </NewsContent>
    </Layout>
  );
};

export default NewsDetail;
const NewsDetailContainer = styled.div`
  font-size: 1.25rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const NewsImage = styled.img`
  width: 8.75rem;
  height: 8rem;
  object-fit: cover;
  margin-right: 1rem;
`;

const NewsContent = styled.div`
  font-size: 1rem;
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AuthorPublished = styled.div`
  font-size: 0.875rem;
  color: #a0a0a0;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  background-color: #3498db;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  display: inline-block;
`;
