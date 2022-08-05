
import './App.css';
import CheckoutPage from './Checkout/Ckeckout';
import { Footer } from './Footer/Footer';
import { Routes,Route } from 'react-router';



function App() {
  return (
    <div className="App">

     <Routes>
      <Route path="/" element={<CheckoutPage />}></Route>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
