import React, {useContext} from 'react'

export default function CheckoutItems({id, prodId, name, price, quantity}) {

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

    return (
        <>
            <div className="checkout-item">
                <img src={require(`../../Images/${prodId}.jpg`)} 
                     width={50} height={50} 
                     className='cart-image'/>
                    <h1 className='name'>{name}</h1>
                    <h2 className='cart-price'>{currency(price)}</h2>
                    <h2 className='quantity'>{`Quantity: ${quantity}`}</h2>
                    <h2 className='item-total'>{currency(cost(price, quantity))}</h2>
            </div>
        </>
    );


}
