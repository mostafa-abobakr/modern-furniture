import React from 'react'
import './cart.css'
const Cart = () => {
    let items=1;
  return (
      <>
          <div className='baner'>
              <h1>Shopping Cart</h1>
              <p className='bg-blue-400 p-2 rounded-md text-white'>{items} item in your cart</p>
          </div>
          {/* <CartItem /> */}
      </>
  );
}

export default Cart