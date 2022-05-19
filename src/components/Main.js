import React from 'react';
import Product from './Product';

const Main = ({ products, onAdd }) => {
  return (
    <>
      <p>Main</p>
      <main>
        <p>Products</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {products.map((product) => (
            <Product key={product.id} product={product}
             onAdd={onAdd} />
          ))}
        </div>
      </main>
    </>
  );
};
export default Main;
