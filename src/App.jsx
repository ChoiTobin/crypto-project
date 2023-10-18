import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/main/MainPage';
import NewsDetail from './components/main/NewsDetail';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="news/:id/:otherId" element={<NewsDetail />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
