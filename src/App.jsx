import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
