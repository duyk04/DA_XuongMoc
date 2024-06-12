// CartContext.js
import React, { createContext, useState } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('cart', []);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
        if (existingItemIndex !== -1) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng của nó lên 1
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào giỏ hàng với số lượng là 1
            const updatedCart = [...cart, { ...item, quantity: 1 }];
            setCart(updatedCart);
        }
    };
    


    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
