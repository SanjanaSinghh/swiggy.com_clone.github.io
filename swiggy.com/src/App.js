// import logo from './logo.svg';
import './App.css';
import './styles/Navbar.css'
import './styles/Search.css'
// import { LandingPage } from './pages/LandingPage';
import { Navbar } from './components/Navbar';
import { Search } from './pages/Search';



function App() {
  return (
    <div className="App">
     
      {/* <LandingPage/> */}
      <Navbar/>
      <Search/>
    </div>
  );
}

export default App;
// npm install slick-carousel

// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";