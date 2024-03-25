import '../Styles/search.css';
import React, { useState, useContext } from 'react'
import SearchProducts from '../Components/Product/SearchProducts';
import ProductContext from '../Context/ProductContext';
import Product from '../Components/Product/Product';

export default function SearchPage() {
    const [term, setTerm] = useState('');
    const productList = useContext(ProductContext);


    const results = productList.filter(
        (item) => {
            if (term.length && (
                item.category.toLowerCase().includes(term.toLowerCase()) ||
                item.name.toLowerCase().includes(term.toLowerCase()) ||
                item.description.toLowerCase().includes(term.toLowerCase()))
            ) {
              return true;
            }
            return false;
        }
    );

    return (
        <>
            <div className="body">
                <div className="search">
                  <h1 className = 'title'>Search Product Catalog</h1>
                  <h2 className = 'question'>What can we help you find today?</h2>
                  <SearchProducts term={term} setTerm={setTerm}/>

                  <div className='results-list'>
                    { results.map((p) => (
                        <Product
                            key = {p.id}
                            id = {p.id}
                            category = {p.category}
                            name = {p.name}
                            image = {p.image}
                            price = {p.price}
                            unit = {p.unit}
                            rating = {p.rating}
                            shipping = {p.shipping}
                            description = {p.description}
                            product = {p}
                        />
                    ))}
                  </div>
                </div>
            </div>
        </>
    );
}
