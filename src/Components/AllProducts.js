import React from 'react'
import useFetchData from '../hook/useFetchData';

function AllProducts() {

    const categories = [{1:'Phòng khách',2:'Phòng ngủ',3:'Phòng bếp',4:'Phòng tắm',5:'Trẻ em',6:'Văn phòng',7:'Cầu thang',8:'Đồ trang trí'}]

    // lấy dữ liệu từ api2
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
            <div className='box-container mt-5'>
                <div className='row mt-5 mx-5'>
                    <div className='col'>
                        <h4>Phòng khách</h4>
                    </div>
                    <div className='col d-flex justify-content-end align-items-center'>
                        <button className='btnViewAll'><Link to={'ListRoom'} state={{ category: 'Phòng khách', classify: '1' }}>XEM TẤT CẢ</Link></button>
                    </div>
                </div>
                <div className='row mx-5 mb-4'>
                    <div className='col-md-3'>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts