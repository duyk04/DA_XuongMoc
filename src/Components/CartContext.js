// CartContext.js
import React, { createContext, useState } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart, removeItem] = useLocalStorage('cart', []);

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

    const removeFromCart = (id) => {
        // Lọc ra sản phẩm có id khác với id được truyền vào
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    };

    const updateQuantity = (id, quantity) => {
        const updatedCart = cart.map(item => item.id === id ? { ...item, quantity } : item);
        setCart(updatedCart);
    };
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity  }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
