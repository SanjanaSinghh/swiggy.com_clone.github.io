
import './App.css';
import CheckoutPage from './Checkout/Ckeckout';
import { Footer } from './Footer/Footer';
import { Payment } from './Payment/Payment';
import Mapping from './Checkout/Customer/Map';

function App() {
  return (
    <div className="App">
     <Footer/>
     <Payment/>
     <CheckoutPage />
     <Mapping/>
    </div>
  );
}

export default App;
