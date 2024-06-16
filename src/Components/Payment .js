import React, { useState } from 'react'
import '../Css/Payment.css'
import { useLocation } from 'react-router-dom';

function Payment() {
    const location = useLocation();
    const { state } = location;
    const list = state ? state.list : "Không có dữ liệu";
    const total = state ? state.total : "Không có dữ liệu";

    // console.log(total);
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
    };

    // const totalAmount = () =>{
    //     var total
    //     list.forEach(element => {
    //         total += parseInt(element.price) * (element.quantity || 1)
    //     });
    //     return total;
    // }

    const [phoneNumber, setPhoneNumber] = useState('');
    const [placeholder, setPlaceholder] = useState('Nhập số điện thoại của bạn');

    const formatPhoneNumber = (phoneNumber) => {
        // Kiểm tra định dạng số điện thoại
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setPhoneNumber(''); // Xóa giá trị trong ô input
            setPlaceholder('Số điện thoại không hợp lệ.');
            return '';
        }

        // Định dạng lại số điện thoại
        return phoneNumber;
    };

    const handleBlur = () => {
        const formattedNumber = formatPhoneNumber(phoneNumber);
        if (formattedNumber) {
            setPhoneNumber(formattedNumber);
        }
    };

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    return (
        <>
            <div className='Payment d-flex flex-column align-items-center'>
                <div className='box-container my-5'>
                    <h4>Thanh toán</h4>
                    <hr />
                    Thông tin hóa đơn
                    <table className="table table-hover mt-4">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Đơn giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <th scope="row" className='my-auto'>
                                        {index + 1}
                                    </th>
                                    <td >
                                        <div className='d-flex'>
                                            <img className='me-2' src={item.url_image} alt={item.name} />
                                            <div>
                                                <p className='namePr mb-2 text-uppercase'>{item.name}</p>
                                                <p className='sizePr'>{item.description.size}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{formatPrice(parseInt(item.price))} </td>
                                    <td>
                                        x {item.quantity || 1}
                                    </td>
                                    <td>{formatPrice(parseInt(item.price) * (item.quantity || 1))} VNĐ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                    <div className='my-4 w-95 mx-auto'>
                        Hóa đơn
                        <div className='row'>
                            <div className='col-md-8 text-start'>
                                Ghi chú:<br />
                                <label>
                                    Họ Tên: <input type='text' className='ps-4' name='name' placeholder='Tên của bạn' required style={{ width: '300px' }} />
                                </label><br />
                                <label>
                                    Số điện thoại:
                                    <input
                                        type='number'
                                        className='ps-4'
                                        name='phone'
                                        value={phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder={placeholder}
                                        required
                                        style={{ width: '300px' }}
                                    />
                                </label>

                            </div>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-6 text-start'>
                                        <span>Tổng tiền hàng:</span><br />
                                        <span>VAT:</span><br />
                                        <span>Tổng thanh toán:</span>
                                    </div>
                                    <div className='col-md-6 text-end'>
                                        <span>{formatPrice(total)} VNĐ </span><br />
                                        <span>{formatPrice(parseInt(total / 100))} VNĐ </span><br />
                                        <span style={{ color: 'red' }}>{formatPrice(parseInt(total + total / 100))} VNĐ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='w-100' />
                        <div className='d-flex align-items-center my-4 '>
                            <span className='text-start me-auto'>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản của chúng tôi</span>
                            <button className="btn_buy btn btn-danger">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Payment