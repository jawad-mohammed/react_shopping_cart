import React from 'react'
const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsCost = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsCost * 0.14;
  const shippingPrice = itemsCost > 2000 ? 0 : 50;
  const totalPrice = itemsCost + taxPrice + shippingPrice;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center",padding:'10px' }}>
        
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((cart) => {
          return (
            <div key={cart.id}>
           <h3>You have selected :<br/> </h3> <strong>{cart.name}</strong>  
              <div>
                <button onClick={() => onAdd(cart)}>+</button>
                <button onClick={() => onRemove(cart)}>-</button>
              </div>
              <div>
                <h3> Quantity{cart.qty}</h3>x ${cart.price.toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {cartItems.length !== 0 && (
          <div>
            <div>
              <hr />
              <div>Items price</div>
              <div>{itemsCost.toFixed(2)}</div>
            </div>
            <div>
              <hr />
              <div>Tax Price</div>
              <div>{taxPrice.toFixed(2)}</div>
            </div>
            <div>
              <hr />
              <div>Shipping price</div>

              <div> ${shippingPrice.toFixed(2)}</div>
            </div>
            <div>
              <hr />
              <div>Total price</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Basket;
