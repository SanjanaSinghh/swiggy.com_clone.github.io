import "./App.css";
import Navbar from "./components/lucky/Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/lucky/signup";
import User from "./components/lucky/user";
import Help from "./components/lucky/help";
// import Login from "./components/lucky/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Help/> */}
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
