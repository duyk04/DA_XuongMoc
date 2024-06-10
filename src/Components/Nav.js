import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Css/Nav.css'
function Nav() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);


    return (
        <div>
            <nav className='navbar w-100  navbar-light bg-light'>
                <div className='w-100'>
                    <div className='float-start'>
                        <Link to={"/Home"}>
                            <img src='../images/AnhCatTC/logo.png' alt='logo' />
                        </Link>
                    </div>
                    <div className='float-end d-flex align-items-center' style={{ height: 96 }}>
                        <div className='navbar-item'>
                            <ul className='d-flex mb-0 h-100'>
                                <li className={`nav-item mx-4 ${activePath === '/Home' ? 'nav-active' : ''}`}>
                                    <Link to="/Home" >Trang chủ</Link>
                                </li>
                                <li className={`nav-item mx-4 ${activePath === '/Introduce' ? 'nav-active' : ''}`}>
                                    <Link to="/Introduce" >Giới thiệu</Link>
                                </li>
                                <li className={`nav-item mx-4 ${activePath === '/Products' ? 'nav-active' : ''}`}>
                                    <Link to="/Products" state={{ showAllProducts: true }} >Sản phẩm</Link>
                                </li>
                                <li className={`nav-item mx-4 ${activePath === '/New' ? 'nav-active' : ''}`}>
                                    <Link to="/New" >Tin tức</Link>
                                </li>
                                <li className={`nav-item mx-4 ${activePath === '/Partner' ? 'nav-active' : ''}`}>
                                    <Link to="/Partner" >Đối tác</Link>
                                </li>
                                <li className={`nav-item mx-4 ${activePath === '/Contact' ? 'nav-active' : ''}`}>
                                    <Link to="/Contact" >Liên hệ</Link>
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