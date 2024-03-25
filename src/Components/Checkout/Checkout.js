import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import CheckoutItems from '../Checkout/CheckoutItems';
import CartContext from '../../Context/CartContext';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function Checkout() {
    let navigate = useNavigate();
    const cartItems = useContext(CartContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            stadd: '',
            addr2: '',
            city: '',
            state: '',
            zip: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(30, 'Name must be 30 characters or less.')
                .required("Name is required."),
            stadd: Yup.string()
                .max(20, 'Address must be 20 characters or less.')
                .required('Address is required.'),
            addr2: Yup.string()
                .max(20, 'Address line 2 must be 20 characters or less.')
                .optional(),
            city: Yup.string()
                .max(20, 'City name must be 20 characters or less.')
                .required('City name is required.'),
            state: Yup.string()
                .max(2, 'State 2 chars only.')
                .required('State is required.'),
            zip: Yup.string()
                .min(5, 'Zip code must contain at least 5 digits.')
                .max(10, 'Zip + 4 must be 10 characters or less.')
                .required('Zip code is required.')
        }),

        onSubmit: (values) => {
            //  clear cart
            cartItems.length = 0;

            //  reset form for next time
            formik.resetForm();

            //  Display thank-you page
            navigate("/ThankYouPage");
        },
    });

  function cartTotal() {
      let ttl = 0;
      for (var i = 0; i < cartItems.length; i++) {
          ttl += parseFloat(cartItems[i].price) * parseInt(cartItems[i].quantity);
      }
      return currency(ttl);
  }

  const currency = (value) =>
      new Intl.NumberFormat(
          'en-US', 
          {
              style: 'currency',
              currency: 'USD'
          }
      ).format(value);

  if (cartItems.length === 0) {
    return (
      <div className='cart'>
      <div className="cart-message">
        <h1>You have not yet added any items to your shopping cart.</h1>
        <br></br><br></br>
        <h2>Add some items to your cart, then come back here to check out.</h2>
      </div>
      </div>
    )
  }
  else {
    return (
      <>   
        <div className='checkout'>
          <h1>Ready to check out?</h1>
          <br></br>

          <div className="checkout-items">
            {cartItems.map((item) => (
                  <CheckoutItems
                    key = {item.id}
                    id = {item.id}
                    prodId = {item.prodId}
                    name = {item.name}
                    price = {item.price}
                    quantity = {item.quantity}
                  />
                ))
              }
          </div>
          <hr></hr>
          <h2 className='cart-total'>{`Cart Total: ${cartTotal()}`}</h2>

          <form onSubmit={ formik.handleSubmit }>
            <br></br>
            <h2>Shipping Information:</h2>
            <div className="input">
              <label htmlFor="name" className='error'>
                  {formik.errors.name ? formik.errors.name : ' ' }
              </label>
              <input
                type='text'
                className='input'
                name='name'
                placeholder='Full Name'
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              <label htmlFor="stadd" className='error'>
                  {formik.errors.stadd ? formik.errors.stadd : ' ' }
              </label>
              <input
                type='text'
                className='input'
                name='stadd'
                placeholder='Street Address'
                onChange={formik.handleChange}
                value={formik.values.stadd}
              />

              <label htmlFor="address2" className='error'>
                  {formik.errors.addr2 ? formik.errors.addr2 : ' ' }
              </label>
              <input
                type='text'
                className='input'
                name='address2'
                placeholder='Address Line 2'
                onChange={formik.handleChange}
                value={formik.values.addr2}
              />

              <div className='inline-input'>
                <div className="stacked">
                  <label htmlFor="city" 
                        className={`${formik.errors.city ? 'error' : 'label'}`}>
                    {formik.errors.city ? formik.errors.city : '.'}
                  </label>
                  <input
                    type='text'
                    className='input input-m'
                    name='city'
                    placeholder='City'
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    />
                </div>

                <div className = 'stacked'>
                  <label htmlFor="state" 
                        className={`label ${formik.errors.state ? 'error' : ''}`}>
                    {formik.errors.state ? formik.errors.state : '.'}
                  </label>
                  <input
                    type='text'
                    className='input input-xs'
                    name='state'
                    placeholder='ST'
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    />
                </div>
                
                <div className = 'stacked'>
                  <label htmlFor="zip" 
                        className={`label ${formik.errors.zip && formik.touched.zip ? 'error' : ''}`}>
                    {formik.errors.zip ? formik.errors.zip : '.'}
                  </label>
                  <input
                    type='text'
                    className='input input-sm'
                    name='zip'
                    placeholder='Zip'
                    onChange={formik.handleChange}
                    value={formik.values.zip}
                    />
                  </div>
              </div>
            </div>

            <div className='center'>    
                <button type='submit' className='proceed'>Place your order</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

