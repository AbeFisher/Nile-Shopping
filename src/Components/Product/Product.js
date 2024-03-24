import React from 'react';
import { useState, useContext } from 'react';
import CartContext from '../../Context/CartContext';
import ProductCard from '../Product/ProductCard';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';


export default function Product({id, name, image, price, product}) {
    const cartItems  = useContext(CartContext);
    let navigate = useNavigate();

    let isAdding = false;
   
    const currency = (value) =>
        new Intl.NumberFormat(
            'en-US', 
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(value);

        const addToCart = (prodId) => {
            //  set isAdding variable to true, we don't show detail page
            //  when user clicks the 'add To cart' button
            isAdding = true;

            //  first check to see if the product is already in cart
            const results = cartItems.filter((item) => item.prodId === prodId);
            if (results.length > 0) {
                //  if so, increment the quantity
                let qty = parseInt(results[0].quantity);
                qty += 1;
                results[0].quantity = qty;
            }        
            else {
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


        const HandleSelect = (prodId) => {
            if (!isAdding) {
            navigate('/DetailPage', {state:{id:prodId}})};
            
            //  reset isAdding variable back to false for next time
            isAdding = false;
        }  

    return (
        <>
            <div onClick={()=>HandleSelect(id)}>
            <ProductCard>
                <img src={require(`../../Images/${id}.jpg`)} 
                     width={150} height={150} 
                     className='picture-frame'/>
                <h1 className="name">{name}</h1>
                <h2>{currency(price)}</h2>
                <button className="addToCart" 
                        onClick={() => addToCart(id) } >Add to Cart</button>
            </ProductCard>  
            </div>
        </>
    );
}