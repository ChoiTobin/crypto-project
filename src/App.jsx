import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/main/MainPage';
import NewsDetail from './components/main/NewsDetail';
import Signin from './components/signin/\bSignIn';
import SignUp from './components/signup/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="news/:id/:id" element={<NewsDetail />} />
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signin" element={<Signin />}></Route>
      </Routes>
    </>
  );
}

export default App;
