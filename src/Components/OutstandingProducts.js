import React, { useState, useEffect } from 'react'
// import axios from '../api/api_products'
import useFetchData from '../hook/useFetchData';
import SliderCustom from './SliderCustom';
import { Link } from 'react-router-dom';


function OutstandingProducts() {

    const { data, error } = useFetchData('api_XuongMoc');

    //const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    // const getProducts = async () => {
    //     try {
    //         let response = await axios.get('api_XuongMoc');
    //         // console.log("Obj api user: ", response);
    //         // console.log("Data api user: ", response.data);
    //         // cập nhật state
    //         setData(response.data);
    //     } catch (error) {
    //         console.error("Error fetching data: ", error);
    //     }
    // };

    // useEffect(() => {
    //     // Gọi API khi component được mount
    //     getProducts();
    // }, []);

    const handleClick = (item) => {
        // console.log(item);
    }

    useEffect(() => {
        // Lọc dữ liệu có classify = 5 sau khi nhận dữ liệu từ API
        const filtered = data.filter(item => item.star === "5");
        setFilteredData(filtered);
    }, [data]);

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
            {error && <p className='alert alert-danger'>Error fetching data: {error.message}</p>}
            <SliderCustom autoplay={false} autoplaySpeed={0} speed={700} slidesToShow={4} infinite={true} slidesToScroll={4} btnArrow={'block'} >
                {/* <Products /> */}
                {filteredData.map((item, index) => (
                    <Link className='col-md-3 cards' key={index} onClick={() => handleClick(item)}
                        to={'/DetailsProduct'}
                        state={item}
                    >
                        <div>
                            <div className='d-flex justify-content-center pt-4'>
                                <div style={{ overflow: 'hidden', width: 270, height: 270 }}>
                                    <img src={item.url_image} alt={item.name} className='img-hover' />
                                </div>
                            </div>
                            <p className='mb-1 text-uppercase'>{item.name}</p>
                        </div>
                        <div>
                            {renderStars(item.star)}
                        </div>
                        <p className='describe'>
                            {item.description.size}
                        </p>
                        <p className='mt-0'>{formatPrice(parseInt(item.price))} VND</p>
                    </Link>
                ))}
            </SliderCustom>


        </>
    );
}

export default OutstandingProducts