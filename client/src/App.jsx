import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import Detail from "./components/Detail/Detail.jsx";
import GridView from "./components/Cards/GridView.jsx";
import ListView from "./components/Cards/ListView.jsx";
import { useState } from "react";

function App() {
  const [view, setView] = useState("list");

  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route
            path="*"
            element={
              <>
                <NavBar view={view} setView={setView} />
                {view === "list" ? (
                  <ListView data={data} />
                ) : (
                  <GridView data={data} />
                )}
                <Routes>
                  <Route path="/home" element={<Home />}></Route>
                </Routes>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
