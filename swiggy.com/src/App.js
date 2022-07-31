import "./App.css";
import Navbar from "./components/lucky/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/lucky/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <Private>
              {" "}
              <Home />
            </Private>
          }
        ></Route> */}
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
