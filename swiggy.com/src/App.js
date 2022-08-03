import "./App.css";
import Navbar from "./components/lucky/Navbar";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/lucky/signup";
import User from "./components/lucky/user";
import Help from "./components/lucky/help";
import Private from "./components/lucky/private";
import Layout from "./components/users/orders";
import Orders from "./components/users/orders";
import Super from "./components/users/Super";
import Favourites from "./components/users/favourites";
import Payments from "./components/users/payments";
import Address from "./components/users/address";
import Settings from "./components/users/Settings";
// import Login from "./components/lucky/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Help/> */}
      <Routes>
        <Route path="/user" element={ <User > <Orders/> </User> }></Route>
        <Route path="/user/orders" element={ <User > <Orders/> </User> }></Route>
        <Route path="/user/super" element={ <User > <Super/> </User> }></Route>
        <Route path="/user/favourites" element={ <User > <Favourites/> </User> }></Route>
        <Route path="/user/payments" element={ <User > <Payments/> </User> }></Route>
        <Route path="/user/addresses" element={ <User > <Address/> </User> }></Route>
        <Route path="/user/settings" element={ <User > <Settings/> </User> }></Route>
        {/* <Route path="/" element={<Navbar />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
