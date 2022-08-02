import "./App.css";
import Navbar from "./components/lucky/Navbar";
import { Route, Routes } from "react-router-dom";
import Help from "./components/lucky/user";
import Signup from "./components/lucky/signup";
// import Login from "./components/lucky/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Help/>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
