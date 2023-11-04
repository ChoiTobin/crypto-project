
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = React.lazy(() => import('./components/main/MainPage'));
const NewsDetail = React.lazy(() => import('./components/main/NewsDetail'));
const SignUp = React.lazy(() => import('./components/signup/SignUp'));
const SignIn = React.lazy(() => import('./components/signin/SignIn'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><MainPage /></React.Suspense>} />
      <Route path="news/:id/:otherId" element={<React.Suspense fallback={<div>Loading...</div>}><NewsDetail /></React.Suspense>} />
      <Route path="signup" element={<React.Suspense fallback={<div>Loading...</div>}><SignUp /></React.Suspense>} />
      <Route path="signin" element={<React.Suspense fallback={<div>Loading...</div>}><SignIn /></React.Suspense>} />
    </Routes>
  );
}

export default App;