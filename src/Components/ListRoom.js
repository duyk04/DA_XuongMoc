import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import useFetchData from '../hook/useFetchData';

import '../Css/ListRoom.css'
import { Box, Skeleton } from '@mui/material';

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

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Giả lập thời gian tải dữ liệu
        setTimeout(() => {
            setLoading(false);
        }, 300);

        // Lọc dữ liệu có classify = 5 sau khi nhận dữ liệu từ API
        const filtered = data.filter(item => item.classify === classify);
        setFilteredData(filtered);
        setFilterePrice(filtered);
    }, [data]);

    const handleLoadingEffect = (callback) => {
        setLoading(true);
        setTimeout(() => {
            callback();
            setLoading(false);
        }, 900);
    };

    const handlePrice = (price) => {
        handleLoadingEffect(() => {
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
                    filtered = filteredData;
                    break;
            }
            setFilterePrice(filtered);
        });
    };

    const handleSort = (sortType) => {
        handleLoadingEffect(() => {
            let sortedData = [...filterePrice];

            switch (sortType) {
                case "1": // Mới nhất
                    sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case "2": // Phổ biến nhất
                    sortedData.sort((a, b) => b.popularity - a.popularity);
                    break;
                case "3": // Giá cao đến thấp
                    sortedData.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
                    break;
                case "4": // Giá thấp đến cao
                    sortedData.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
                    break;
                default:
                    break;
            }

            setFilterePrice(sortedData);
        });
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
            <div className='List-room d-flex flex-column align-items-center '>
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
                        <select className='float-end' onChange={(e) => handleSort(e.target.value)}>
                            <option value={0}>Sắp xếp</option>
                            <option value={1}>Mới nhất</option>
                            <option value={2}>Phổ biến nhất</option>
                            <option value={3}>Giá cao đến thấp</option>
                            <option value={4}>Giá thấp đến cao</option>
                        </select>
                    </div>
                </div>
                <div className='box-container mt-5 mb-5'>
                    <div className='row mt-5 mx-5'>
                        <div className='col'>
                            <h4>{category} - Details</h4>
                        </div>

                    </div>
                    <div className='row mx-5 mb-4' style={{ minHeight: 390 }}>
                        {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                        {loading ? (
                            Array.from(new Array(4)).map((_, index) => (
                                <div className='col-md-3' key={index}>
                                    <Box sx={{ overflow: 'hidden', width: 270, height: 270 }}>
                                        <Skeleton variant="rectangular" animation="wave"  width={270} height={270} />
                                    </Box>
                                    <Skeleton variant="text" animation="wave"  width={210} />
                                    <Skeleton variant="text" animation="wave"  width={150} />
                                    <Skeleton variant="text" animation="wave"  width={100} />
                                </div>
                            ))
                        ) : (
                            filterePrice.length > 0 ? filterePrice.map((item, index) => (
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
                            )
                        )}
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