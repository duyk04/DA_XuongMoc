import React from 'react'
import '../Css/style.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='position-relative w-100 d-flex justify-content-center'>
            <div className='box-container position-absolute top-50 start-50 translate-middle '>
                <div className='row '>
                    <div className='col-4'>
                        <ul>
                            <li>
                                <p>THÔNG TIN CHUNG</p>
                            </li>
                            <li>
                                <p className='name1 pt-2'>CÔNG TY TNHH HOÀNG HOAN</p>
                            </li>
                            <li>
                                <p>
                                    <i className="fa-solid fa-phone pe-2" style={{ color: "#ffffff", width: 26 }} />
                                    0853.885.203
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className="fa-regular fa-envelope pe-2" style={{ color: "#ffffff", width: 26 }} />
                                    cskh@gmail.com
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className="fa-solid fa-location-dot pe-2" style={{ color: "#ffffff", width: 26 }} />
                                    <a href='https://maps.app.goo.gl/hkik46oGUgvAkVmX8' target='blank'>25 P. Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội, Việt Nam</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <ul>
                            <li>
                                <p>VỀ CHÚNG TÔI</p>
                            </li>
                            <li>
                                <Link to={"/Introduce"}> <p className='pt-2'>Giới thiệu</p></Link> 
                            </li>
                            <li>
                                <Link to={"/Products"} state={{showAllProducts: true}}><p>Sản phẩm</p></Link>                      
                            </li>
                            <li>
                                <Link to={"/New"}><p>Tin tức</p></Link>
                            </li>
                            <li>
                                <Link to={"/Partner"} ><p>Đối tác</p></Link>
                            </li>
                            <li>
                                <Link to={"/Contact"}><p>Liên hệ</p></Link>        
                            </li>
                        </ul>
                    </div>
                    <div className='col-4'>
                        <ul>
                            <li>
                                <p>KẾT NỐI VỚI CHÚNG TÔI</p>
                            </li>
                            <li>
                                <p className='py-3'>
                                    <i className="fa-brands fa-square-facebook fa-2xl" style={{ color: "#ffffff" }} />
                                    <i className="fa-brands fa-square-youtube fa-2xl mx-2" style={{ color: "#ffffff" }} />
                                    <i className="fa-solid fa-square-envelope fa-2xl" style={{ color: "#ffffff" }} />
                                </p>
                            </li>
                            <li>
                                <p>
                                    <img src='../images/AnhCatTC/ftThongBao.png' alt='ftThongBao' />
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer