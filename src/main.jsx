import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // RecoilRoot를 import

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    {' '}
    {/* 이 부분을 추가해야 합니다 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);
