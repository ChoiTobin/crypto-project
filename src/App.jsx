import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/main/MainPage";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
