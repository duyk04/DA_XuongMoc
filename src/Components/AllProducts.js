import React, { useEffect, useState } from 'react'
import useFetchData from '../hook/useFetchData';
import { Link } from 'react-router-dom';

function AllProducts() {

    // lấy dữ liệu từ api
    const { data, error } = useFetchData('api_XuongMoc');

    const [classify1, setClassify1] = useState([]);
    const [classify2, setClassify2] = useState([]);
    const [classify3, setClassify3] = useState([]);
    const [classify4, setClassify4] = useState([]);
    const [classify5, setClassify5] = useState([]);
    const [classify6, setClassify6] = useState([]);
    const [classify7, setClassify7] = useState([]);
    const [classify8, setClassify8] = useState([]);

    useEffect(() => {
        const filtered1 = data.filter(item => item.classify === "1");
        const filtered2 = data.filter(item => item.classify === "2");
        const filtered3 = data.filter(item => item.classify === "3");
        const filtered4 = data.filter(item => item.classify === "4");
        const filtered5 = data.filter(item => item.classify === "5");
        const filtered6 = data.filter(item => item.classify === "6");
        const filtered7 = data.filter(item => item.classify === "7");
        const filtered8 = data.filter(item => item.classify === "8");
        setClassify1(filtered1);
        setClassify2(filtered2);
        setClassify3(filtered3);
        setClassify4(filtered4);
        setClassify5(filtered5);
        setClassify6(filtered6);
        setClassify7(filtered7);
        setClassify8(filtered8);
    }, [data])

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
            {/* Phòng khách */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Phòng khách</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll' ><Link to={'ListRoom'} state={{ category: 'Phòng khách', classify: '1', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify1.map((item, index) => (
                        <div className='col-md-3' key={index}>
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Phòng ngủ */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Phòng ngủ</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Phòng ngủ', classify: '2', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify2.map((item, index) => (
                        <div className='col-md-3' key={index}>
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Phòng bếp */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Phòng bếp</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Phòng bếp', classify: '3', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify3.map((item, index) => (
                        <div className='col-md-3' key={index}>
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Phòng tắm */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Phòng tắm</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Phòng tắm', classify: '4', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify4.map((item, index) => (
                        <div className='col-md-3' key={index} >
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trẻ em */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Trẻ em</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Trẻ em', classify: '5', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify5.map((item, index) => (
                        <div className='col-md-3' key={index} >
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Văn phòng */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Văn phòng</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Văn phòng', classify: '6', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify6.map((item, index) => (
                        <div className='col-md-3' key={index}>
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cầu thang */}
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Cầu thang</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Cầu thang', classify: '7', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify7.map((item, index) => (
                        <div className='col-md-3' key={index} >
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trang trí */}
            <div className='box-container mt-5 mb-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Trang trí</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Trang trí', classify: '8', showAllProducts: false }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
                    {classify8.map((item, index) => (
                        <div className='col-md-3' key={index} >
                            <Link to={"/DetailsProduct"} state={item}>
                                <div className='d-flex justify-content-center'>
                                    <div className='w-100' style={{ overflow: 'hidden' }}>
                                        <img loading='lazy' src={item.url_image} alt='img' className='img-hover w-100' />
                                    </div>
                                </div>
                                <p className='mb-1 text-uppercase'>{item.name}</p>
                            </Link>
                            <div>
                                {renderStars(item.star)}
                            </div>
                            <p className='describe'>
                                {item.description.size}
                            </p>
                            <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllProducts