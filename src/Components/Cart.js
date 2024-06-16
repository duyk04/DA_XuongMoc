import React, { useContext, useEffect, useState } from 'react'
import '../Css/Cart.css'
import CartContext from './CartContext';
import { Link } from 'react-router-dom';
import CustomDialog from '../hook/CustomDialog';
import CustomSnackbar from '../hook/CustomSnackbar';

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
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
        updateQuantity(productId, parseInt(value));
    };

    const increment = (productId) => {
        const currentQuantity = parseInt(productQuantities[productId] || 0);
        const updatedQuantity = currentQuantity + 1;
        const updatedQuantities = { ...productQuantities, [productId]: updatedQuantity };
        setProductQuantities(updatedQuantities);
        updateQuantity(productId, updatedQuantity);
    };

    const decrement = (productId) => {
        const currentQuantity = parseInt(productQuantities[productId] || 0);
        const updatedQuantity = Math.max(currentQuantity - 1, 0);
        const updatedQuantities = { ...productQuantities, [productId]: updatedQuantity };
        setProductQuantities(updatedQuantities);
        updateQuantity(productId, updatedQuantity);
    };

    useEffect(() => {
        Object.keys(productQuantities).forEach(productId => {
            const quantity = parseInt(productQuantities[productId]);
            const [filteredProducts] = cart.filter(item => item.id === productId);
            if (quantity === 0) {
                handleRemoveProduct(productId, filteredProducts)
                setProductQuantities(prevQuantities => ({
                    ...prevQuantities,
                    [productId]: 1 // hoặc bất kỳ giá trị mặc định nào bạn muốn
                }));
            }
        });
    }, [productQuantities, cart]);

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
    };


    //dialogAlert
    const [openDialog, setOpenDialog] = useState(false);
    const [productIdToRemove, setProductIdToRemove] = useState(null);

    const handleRemoveProduct = (id, item) => {
        // console.log(item.id);
        setProductIdToRemove(id); // Lưu id sản phẩm cần xóa vào state
        setContentProduct(item)
        setOpenDialog(true); // Mở dialog xác nhận xóa
    };

    const handleAgreeAction = (id) => {
        // console.log(id);
        removeFromCart(productIdToRemove); // Xóa sản phẩm khỏi giỏ hàng
        handleCloseDialog(); // Đóng dialog sau khi xử lý xong
        handleShowSnackbar('slide')
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // Đóng dialog
        setProductIdToRemove(null); // Reset state id sản phẩm cần xóa
    };

    const [contentProduct, setContentProduct] = useState([])
    // console.log(contentProduct.description.size);

    //snackbar
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [transitionType, setTransitionType] = useState('fade');

    const handleShowSnackbar = (type) => {
        setTransitionType(type);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const [selectedProducts, setSelectedProducts] = useState([]);
    // console.log(selectedProducts);
    // Select all products
    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            const allProductIds = cart.map(item => item.id);
            setSelectedProducts(allProductIds);
        } else {
            setSelectedProducts([]);
        }
    };

    const handleProductSelect = (productId) => {
        if (selectedProducts.includes(productId)) {
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        } else {
            setSelectedProducts([...selectedProducts, productId]);
        }
    };

    const totalAmount = selectedProducts.reduce((total, productId) => {
        const product = cart.find(item => item.id === productId);
        // console.log(product);
        // setListPaymentsProducts(product)
        if (product) {
            return total + (product.price * productQuantities[productId]);
        }
        return total;
    }, 0);

    const [listPaymentsProducts, setListPaymentsProducts] = useState([])
    // console.log(listPaymentsProducts);
    useEffect(() => {
        const selectedProductsList = selectedProducts.map(productId => {
            return cart.find(item => item.id === productId);
        }).filter(product => product !== undefined);

        setListPaymentsProducts(selectedProductsList);
    }, [selectedProducts, cart]);

    return (
        <>
            <CustomDialog
                isOpen={openDialog}
                title="Bạn có muốn xóa sản phẩm này không ?"
                content={contentProduct || 'hi'}
                handleClose={handleCloseDialog}
                handleAgree={handleAgreeAction}
            />
            <CustomSnackbar
                open={snackbarOpen}
                message="Xóa sản phẩm thành công"
                onClose={handleCloseSnackbar}
                transition={transitionType}
                backgroundColor="#edf7ed"
                color="black"
                top='105px'
            />
            <div className='Cart d-flex flex-column align-items-center'>
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
                            {cart.length > 0 ? cart.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row" className='my-auto'>
                                        {index + 1}
                                        <input
                                            type='checkbox'
                                            className='ms-2'
                                            checked={selectedProducts.includes(item.id)}
                                            onChange={() => handleProductSelect(item.id)}
                                        />
                                    </th>
                                    <td >
                                        <Link to={'/DetailsProduct'} state={item} className='d-flex'>
                                            <img className='me-2' src={item.url_image} alt={item.name} />
                                            <div>
                                                <p className='namePr mb-2 text-uppercase'>{item.name}</p>
                                                <p className='sizePr'>{item.description.size}</p>
                                            </div>
                                        </Link>
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
                                        <button type="button" className='btn_delete' onClick={() => handleRemoveProduct(item.id, item)}><i className="fa-solid fa-trash-can fa-xl pe-2" style={{ color: "#ff0000" }}></i>Xóa</button>
                                    </td>
                                </tr>
                            )):(
                                <tr>
                                    <td colSpan={6}>Giỏ hàng trống.<br/>
                                        <Link to={'/Products'}>Mua ngay</Link>
                                    </td>
                                </tr>
                                
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <div className='box-container nav_payments'>
                    <div className='d-flex align-items-center'>
                        <label className='me-auto p-4'>
                            <input
                                type='checkbox'
                                className='me-2'
                                checked={selectedProducts.length === cart.length}
                                onChange={handleSelectAll}
                            />
                            Chọn tất cả ({cart.length})
                        </label>
                        <p className='p-4 m-0 float-end'>Tổng thanh toán ({selectedProducts.length} sản phẩm):</p>
                        <p className='price-total py-4 m-0 '>{formatPrice(totalAmount)} VNĐ</p>
                        <Link to={'/Payment'} state={{ list: listPaymentsProducts, total: totalAmount }} className="btn_buy btn btn-danger m-4">Mua hàng</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
