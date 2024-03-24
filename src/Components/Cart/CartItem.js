import React, { useState, useContext } from 'react';
import Card from '../shared/Card';
import { FaTrashAlt } from "react-icons/fa";
import CartContext from '../../Context/CartContext';
import Cart from '../Cart/Cart';


export default function CartItem({id, prodId, name, price, quantity}) {
    const cartItems = useContext(CartContext);

    const currency = (value) =>
        new Intl.NumberFormat(
            'en-US', 
            {
                style: 'currency',
                currency: 'USD'
            }
        ).format(value);

    function cost(price, qty) {
        return parseFloat(parseFloat(price) * parseInt(qty));
    };

    const removeFromCart = (id) => {
        const i = cartItems.map(item => item.id).indexOf(id);
        cartItems.splice(i, 1);
    };

    return (
        <>
            <div className="cart-item">
                <img src={require(`../../Images/${prodId}.jpg`)} 
                     width={100} height={100} 
                     className='cart-image'/>
                <div className="cart-item-name">
                    <h1>{name}</h1>
                    <h2>{currency(price)}</h2>
                </div>
                <div className = 'cart-quantity'>
                    <h2>{`Quantity: ${quantity}`}</h2>
                    <h2>{`Total Cost: ${currency(cost(price, quantity))}`}</h2>
                </div>
                <button className="removeFromCart" 
                        onClick={ () => removeFromCart(id) }>
                        <FaTrashAlt />
                </button>
            </div>
            <hr></hr>
        </>
    );
}