import React from 'react'
import './cart.css'
const Cart = () => {
    let items=1;
  return (
      <>
          <div className='banner'>
              <h1>Shopping Cart</h1>
              <p>{items} item in your cart</p>
          </div>
          {/* <CartItem /> */}
          <Sammary />
      </>
  );
}

export default Cart