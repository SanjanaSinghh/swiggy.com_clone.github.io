
import './App.css';
import CheckoutPage from './Checkout/Ckeckout';
import { Footer } from './Footer/Footer';
import { Routes,Route } from 'react-router';



function App() {
  return (
    <div className="App">

     <Routes>
      <Route path="/" element={<Footer />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
     
      </Routes>
    </div>
  );
}

export default App;
