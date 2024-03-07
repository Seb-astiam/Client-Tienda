import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import Favorites from "./views/Favorites/Favorites";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
