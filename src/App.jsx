import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/main/MainPage";
import NewsDetail from "./components/main/NewsDetail";

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="news/:id/:id" element={<NewsDetail />} />
        </Routes>

    </>
  )
}

export default App
