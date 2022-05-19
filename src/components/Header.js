import React from 'react'
const Header = () => {
  return (
    <>
      <h3>Header</h3>
      <div>
        <a href="/">
          <h2>Small shopping cart</h2>
        </a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Signin</a>
      </div>
    </>
  );
};
export default Header;
