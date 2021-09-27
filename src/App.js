<<<<<<< HEAD
import {useState} from 'react';
=======
import { Component } from 'react';
>>>>>>> main
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandeler(){
    setCartIsShown(true);
  }

  function hideCartHandeler(){
    setCartIsShown(false);
  }

  return (
    <CartProvider>
<<<<<<< HEAD
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCartHandeler} />
=======
      <Cart/>
      <Header />
>>>>>>> main
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
