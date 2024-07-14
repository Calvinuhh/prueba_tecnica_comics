import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
