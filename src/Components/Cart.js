import React, { useContext, useEffect, useState } from 'react'
import '../Css/Cart.css'
import CartContext from './CartContext';
import { Snackbar } from '@mui/material';

function Cart() {
    const { cart, removeFromCart  } = useContext(CartContext);
    const [productQuantities, setProductQuantities] = useState({});

    useEffect(() => {
        // Khởi tạo productQuantities từ cart
        const initialQuantities = {};
        cart.forEach(item => {
            initialQuantities[item.id] = item.quantity || 1;
        });
        setProductQuantities(initialQuantities);
    }, [cart]);

    const handleInput = (e, productId) => {
        const { value } = e.target;
        const updatedQuantities = { ...productQuantities, [productId]: value };
        setProductQuantities(updatedQuantities);
    };

    const increment = (productId) => {
        const currentQuantity = parseInt(productQuantities[productId] || 0);
        const updatedQuantity = currentQuantity + 1;
        const updatedQuantities = { ...productQuantities, [productId]: updatedQuantity };
        setProductQuantities(updatedQuantities);
    };

    const decrement = (productId) => {
        const currentQuantity = parseInt(productQuantities[productId] || 0);
        const updatedQuantity = Math.max(currentQuantity - 1, 0);
        const updatedQuantities = { ...productQuantities, [productId]: updatedQuantity };
        setProductQuantities(updatedQuantities);
    };

    useEffect(() => {
        Object.keys(productQuantities).forEach(productId => {
            const quantity = parseInt(productQuantities[productId]);
            if (quantity === 0) {
                handleRemoveProduct(productId)
                setProductQuantities(prevQuantities => ({
                    ...prevQuantities,
                    [productId]: 1 // hoặc bất kỳ giá trị mặc định nào bạn muốn
                }));
            }
        });
    }, [productQuantities]);

    const handleRemoveProduct = (id) =>{
         // eslint-disable-next-line no-restricted-globals
        const confirmation = confirm('Bạn có muốn xóa sản phẩm này không ?');
        if (confirmation === true){
            removeFromCart(id)
        }
    }

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
    };

    return (
        <>
            <div className='Cart d-flex justify-content-center'>
                <div className='box-container my-5'>
                    <h4 className='text-start ms-3 my-3'>Giỏ hàng</h4>
                    <hr />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Số tiền</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row" className='my-auto'>{index + 1}</th>
                                    <td className='d-flex'>
                                        <img className='me-2' src={item.url_image} alt={item.name} />
                                        <div>
                                            <p className='namePr mb-2 text-uppercase'>{item.name}</p>
                                            <p className='sizePr'>{item.description.size}</p>
                                        </div>
                                    </td>
                                    <td>{formatPrice(parseInt(item.price))} </td>
                                    <td>
                                        <div>
                                            <button type="button" className='btn_arrow' onClick={() => decrement(item.id)}><i className="fa-solid fa-chevron-left"></i></button>
                                            <input type='text' value={productQuantities[item.id] || 1} onInput={(e) => handleInput(e, item.id)} />
                                            <button type="button" className='btn_arrow' onClick={() => increment(item.id)}><i className="fa-solid fa-chevron-right"></i></button>
                                        </div>
                                    </td>
                                    <td>{formatPrice(parseInt(item.price) * (productQuantities[item.id] || 1))} VNĐ</td>
                                    <td>
                                        <button type="button" className='btn_delete' onClick={() => handleRemoveProduct(item.id)}><i className="fa-solid fa-trash-can fa-xl pe-2" style={{color: "#ff0000"}}></i>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Cart;
