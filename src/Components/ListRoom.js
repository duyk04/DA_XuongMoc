import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import useFetchData from '../hook/useFetchData';

import '../Css/ListRoom.css'

function ListRoom() {
    // lấy danh mục
    const location = useLocation();
    const { state } = location;
    const classify = state ? state.classify : "Không có dữ liệu";
    const category = state ? state.category : "Không có dữ liệu";
    //console.log(classify);

    // lấy dữ liệu từ api
    const { data, error } = useFetchData('api_XuongMoc');
    const [filteredData, setFilteredData] = useState([]);
    const [filterePrice, setFilterePrice] = useState([]);
    useEffect(() => {
        // Lọc dữ liệu có classify = 5 sau khi nhận dữ liệu từ API
        const filtered = data.filter(item => item.classify === classify);
        setFilteredData(filtered);
        setFilterePrice(filtered);
    }, [data]);

    const handlePrice = (price) => {
        let filtered = [];
        switch (price) {
            case 1:
                filtered = filteredData.filter(item => parseInt(item.price, 10) < 5000000);
                break;
            case 2:
                filtered = filteredData.filter(item => {
                    const price = parseInt(item.price, 10);
                    return price > 5000000 && price < 10000000;
                });
                break;
            case 3:
                filtered = filteredData.filter(item => {
                    const price = parseInt(item.price, 10);
                    return price > 10000000 && price < 15000000;
                });
                break;
            case 4:
                filtered = filteredData.filter(item => parseInt(item.price, 10) > 15000000);
                break;
            default:
                // Không lọc gì cả
                filtered = filteredData;
                break;
        }
        setFilterePrice(filtered);
    };

    const renderStars = (starCount) => {
        let stars = [];
        for (let i = 0; i < starCount; i++) {
            stars.push(
                <span key={i}>
                    <i className="fa-solid fa-star fa-lg mx-1" style={{ color: "#FFD43B" }} />
                </span>
            );
        }
        return stars;
    };

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN');
    };

    return (
        <>
            <div className='List-room d-flex flex-column align-items-center'>
                <div className='box-container row pt-4'>
                    <div className='col-8'>
                        <ul className='d-flex'>
                            <li className='mx-3 ranger-price'>Chọn mức giá:</li>
                            <li className='mx-3 ranger-price'>
                                <button onClick={() => handlePrice(1)}>
                                    Dưới 5 triệu
                                </button>
                            </li>
                            <li className='mx-3 ranger-price'>
                                <button onClick={() => handlePrice(2)}>
                                    5 - 10 triệu
                                </button>
                            </li>
                            <li className='mx-3 ranger-price'>
                                <button onClick={() => handlePrice(3)}>
                                    10 - 15 triệu
                                </button>
                            </li>
                            <li className='mx-3 ranger-price'>
                                <button onClick={() => handlePrice(4)}>
                                    Trên 15 triệu
                                </button>
                            </li>
                            <li className='mx-3 ranger-price'>
                                <button onClick={() => handlePrice()}>
                                   Tất cả
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4 '>
                        {/* <label > Sắp xếp</label> */}
                        <select className='float-end' type='seclect'>
                            <option value={0}>Sắp xếp</option>
                            <option value={1}>Mới nhất</option>
                            <option value={2}>Phổ biến nhất</option>
                            <option value={3}>Giá cao đến thấp</option>
                            <option value={4}>Giá thấp đến cao</option>
                        </select>
                    </div>
                </div>
                <div className='box-container mt-5'>
                    <div className='row mt-5 mx-5'>
                        <div className='col'>
                            <h4>{category} - Details</h4>
                        </div>

                    </div>
                    <div className='row mx-5 mb-4' style={{minHeight:390}}>
                        {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                        {filterePrice.length > 0 ?filterePrice.map((item, index) => (
                            <div className='col-md-3' key={index}>
                                <a href='#'>
                                    <div className='d-flex justify-content-center'>
                                        <div style={{ overflow: 'hidden', width: 270, height: 270 }}>
                                            <img src={item.url_image} alt={item.name} className='img-hover' />
                                        </div>
                                    </div>
                                    <p className='mb-1 text-uppercase'>{item.name}</p>
                                </a>
                                <div>
                                    {renderStars(item.star)}
                                </div>
                                <p className='describe'>
                                    {item.description.size}
                                </p>
                                <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                            </div>
                        )) : (
                            <p>Không có sản phẩm nào phù hợp.</p>
                        )}
                        
                        {/* <div className='col-md-3'>
                            <Link to={"/DetailsProduct"}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1.png' alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>Bàn uống nước</p>
                            </Link>
                            <div>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                            </div>
                            <p className='describe'>
                                (Size vừa, nâu đậm)
                            </p>
                            <p className='mt-0'>8.999.999 VND</p>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_2.png' alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>Bàn uống nước 2</p>
                            </a>
                            <div>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                            </div>
                            <p className='describe'>
                                (Size vừa, nâu vân gỗ)
                            </p>
                            <p className='mt-0'>3.999.999 VND</p>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/ketivi.png' alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>Kệ TV</p>
                            </a>
                            <div>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                            </div>
                            <p className='describe'>
                                (4 ngăn, gỗ lim)
                            </p>
                            <p className='mt-0'>12.999.999 VND</p>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/kededo.png' alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>Kệ để đồ</p>
                            </a>
                            <div>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg mx-2" style={{ color: "#FFD43B" }} />
                                </span>
                                <span>
                                    <i className="fa-solid fa-star fa-lg" style={{ color: "#FFD43B" }} />
                                </span>
                            </div>
                            <p className='describe'>
                                (4 ngăn, trắng gỗ)
                            </p>
                            <p className='mt-0'>12.499.999 VND</p>
                        </div> */}
                    </div>

                    <div className='btn-page mb-5 row d-flex justify-content-center'>
                        <div>{'<'}</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>{'>'}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListRoom