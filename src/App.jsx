import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
