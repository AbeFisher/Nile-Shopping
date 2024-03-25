import '../Styles/details.css';
import React, { useContext } from 'react'
import {useLocation} from 'react-router-dom';
import ProductContext from '../Context/ProductContext';
import ProductCard from '../Components/Product/ProductCard';
import CartContext from '../Context/CartContext';
import { v4 as uuidv4 } from "uuid";

export default function DetailPage() {
  const productList = useContext(ProductContext);
  const cartItems = useContext(CartContext);
  const location = useLocation();
  const id = location.state === null ? 0 : location.state.id;
  const results = productList.filter((item) => item.id === id);

  const addToCart = () => {
    //  first check to see if the product is already in cart
    let items = cartItems.filter((item) => item.prodId === id);
    if (items.length > 0) {
        //  if so, increment the quantity
        let qty = parseInt(items[0].quantity);
        qty += 1;
        items[0].quantity = qty;
    }        
    else {
       const product = results[0]; 
        //  if not, create a new cart item, and add it
        let newItem = {
            'id': uuidv4(),
  
            //  use product variable to populate other cartItem fields
            'prodId': product.id,
            'name': product.name,
            'price': product.price,
            'quantity': 1,
        };
  
        cartItems.push(newItem);
    }
  }

  const currency = (value) =>
  new Intl.NumberFormat(
      'en-US', 
      {
          style: 'currency',
          currency: 'USD'
      }
  ).format(value);



  if (results.length > 0) {
    const p = results[0];
    return (
      <div className = 'body'>
        <div className = 'detail'>
            <div className="text-area">
                <h1 className = 'product-name'>{p.name}</h1>
                <h2 className = 'rating'>
                  <span className = 'rating-label'>Rating:</span>
                  { p.rating > 0 ? <span className='stars'>&#9733;</span> : <span>&#9734;</span> }
                  { p.rating > 1 ? <span className='stars'>&#9733;</span> : <span>&#9734;</span> }
                  { p.rating > 2 ? <span className='stars'>&#9733;</span> : <span>&#9734;</span> }
                  { p.rating > 3 ? <span className='stars'>&#9733;</span> : <span>&#9734;</span> }
                  { p.rating > 4 ? <span className='stars'>&#9733;</span> : <span>&#9734;</span> }
                </h2>
                <h2 className = 'price'>{currency(p.price)} {p.unit}</h2>
                <h3 className = 'descr'>{p.description}</h3>
            </div>
            <div className="picture-area">
                <img className='picture'
                     src={require(`../Images/${p.id}.jpg`)} />
                <button className="add-now" 
                        onClick={() => addToCart() } >Add to Cart</button>
            </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="body">
        <div className="cart">
        <div className='cart-message'>
            <h1>There are no selected items to show detail for.</h1>
            <h1><br></br><br></br></h1>
            <h2>Please return to the home page, and select an item to see detailed information about it.</h2>
          </div>
          </div>
      </div>
    )    
  }
}
