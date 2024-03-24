import { useState, createContext } from "react";

const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    return (
        <CartContext.Provider
            value={{ 
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;