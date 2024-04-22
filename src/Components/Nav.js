import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Nav.css'
function Nav() {
    return (
        <div>
            <nav className='navbar w-100  navbar-light bg-light'>
                <div className='w-100'>
                    <div className='float-start'>
                        <img src='../images/AnhCatTC/logo.png' alt='logo' />
                    </div>
                    <div className='float-end d-flex align-items-center' style={{ height: 96 }}>
                        <div className='navbar-item '>
                            <ul className='d-flex mb-0 h-100'>
                                <li className="nav-item mx-4">
                                    <Link to={"/Home"}>Trang chủ</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link to={"/Introduce"}>Giới thiệu</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link to={"/Products"}>Sản phẩm</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link to={"/New"}>Tin tức</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link to={"/Partner"}>Đối tác</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link to={"/Contact"}>Liên hệ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav