import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil'; // RecoilRoot를 import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

//https://velog.io/@dbswpgur2/Recoil-React-Query
ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      {/*ReactQueryDevtools는 <App />를 감싸는 형태가 아니라 독립적으로 
      위에 선언만 해주면 됩니다. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>,
);
