import React from 'react'
import { useState } from 'react';
import Basket from './components/Basket';
import data from './components/data';
import Header from './components/Header';
import Main from './components/Main';

 function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((cart) => cart.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <Header />

      <div style={{ display: 'grid' }}>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        <Main onAdd={onAdd} products={products} />
      </div>
    </>
  );
}
export default App