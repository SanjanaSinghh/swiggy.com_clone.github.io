import "./App.css";
import Navbar from "./components/lucky/Navbar";
import { Route, Routes } from "react-router-dom";
import Help from "./components/lucky/help";
// import Login from "./components/lucky/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/help" element={<Help />}></Route>
      </Routes>
    </div>
  );
}

export default App;
