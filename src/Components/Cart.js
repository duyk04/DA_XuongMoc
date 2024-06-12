import React, { useContext, useEffect, useState } from 'react'
import '../Css/Cart.css'
import CartContext from './CartContext';

function Cart() {
    const { cart } = useContext(CartContext);
    const [productQuantities, setProductQuantities] = useState({});

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
                alert("Bạn có muốn xóa sản phẩm này không?");
                setProductQuantities(prevQuantities => ({
                    ...prevQuantities,
                    [productId]: 1 // hoặc bất kỳ giá trị mặc định nào bạn muốn
                }));
            }
        });
    }, [productQuantities]);
    

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

                                        <img className='me-2' src={item.url_image} />

                                        <div>
                                            <p className='namePr mb-2 text-uppercase'>{item.name}</p>
                                            <p className='sizePr'>{item.description.size}</p>
                                        </div>
                                    </td>
                                    <td>{formatPrice(parseInt(item.price))} </td>
                                    <td>
                                        <div>
                                            <button type="button" onClick={() => decrement(item.id)}><i className="fa-solid fa-chevron-left"></i></button>

                                            <input type='text' value={productQuantities[item.id] || 0} onInput={(e) => handleInput(e, item.id)} />

                                            <button type="button" onClick={() => increment(item.id)}><i className="fa-solid fa-chevron-right"></i></button>

                                        </div>
                                    </td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Cart