import './App.css';
import Productcard from './components/products';
import ShoppingCart from './components/shppingcart';

function App() {
  return (
    <div className='container-fluid'> 
      <div className='row mt-3'>
      <Productcard/>
      <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;
