
import './App.css';
import CheckoutPage from './Checkout/Ckeckout';
import { Footer } from './Footer/Footer';
import { Routes,Route } from 'react-router';
import Map from './Checkout/Customer/Map';
import Sample from './Checkout/Customer/Sample';



function App() {
  return (
    <div className="App">
      <Sample/>
<Map/>
     <Routes>
      <Route path="/" element={<CheckoutPage />}></Route>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
