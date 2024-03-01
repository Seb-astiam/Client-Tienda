import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
