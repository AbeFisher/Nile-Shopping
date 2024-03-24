import React, { useEffect, useContext } from 'react';
import Card from '../shared/Card';
import CartContext from '../../Context/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const cartItems = useContext(CartContext);
  let navigate = useNavigate();

  const hasItems = () => {
    if (cartItems === undefined) { return false; }
    if (cartItems.length === 0 ) { return false; }
    return true;
  }

  function goToCheckout() {
    navigate("/CheckoutPage");
  }
  
  { if (hasItems()) {
    return (
      <>
        <div className = 'cart'>
          {cartItems.map((item) => (
              <CartItem
                key = {item.id}
                id = {item.id}
                prodId = {item.prodId}
                name = {item.name}
                price = {item.price}
                quantity = {item.quantity}
              />
            ))
          }
          <div className = 'center'>
            <button className='proceed'
                    onClick={ goToCheckout }>Proceed to checkout</button>
          </div>
        </div>
      </>           
    )
    } else {
      return (
        <div className='cart'>
          <div className="cart-message">
            <h1>Your shopping cart is sad and empty.
                <br></br><br></br><br></br>
                <em><strong>Time to go Shopping!!</strong></em>
            </h1>
          </div>
        </div>
      )
    }
  }
};
