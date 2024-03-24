import React, { useState, createContext } from "react";
import ProductData from "../Data/ProductData";

const ProductContext = createContext(ProductData);

export const ProductProvider = ({children}) => {
    const [ProductList, setProductList] = useState(ProductData);

    return (
        <ProductContext.Provider
            value = { ProductList }
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;