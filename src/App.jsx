import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import Favorites from "./views/Favorites/Favorites";

import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
