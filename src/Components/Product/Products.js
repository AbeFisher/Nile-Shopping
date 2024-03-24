import React, { useContext } from 'react';
import ProductContext from '../../Context/ProductContext';
import Product from '../Product/Product';

export default function Products() {
  const ProductList = useContext(ProductContext);

  return (
    <>
        { ProductList.length ? (
          ProductList.map((p) => (
              <Product
                key = {p.id}
                id = {p.id}
                name = {p.name}
                image = {p.image}
                price = {p.price}
                product = {p}
              />
           ))
      ) : (<p>Product list is empty.  Please check back again soon!</p>)}
    </>
  );
}
