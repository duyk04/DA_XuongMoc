import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style.css'

function Home() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary py-0" style={{ height: 110, }}>
                <Container className="px-0 navbar mx-0 ">
                    <Navbar.Brand href="#home"><img src='../../images/AnhCatTC/logo.png'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='al float-end flex-grow-0'>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Trang Chủ</Nav.Link>
                            <Nav.Link href='#gioiThieu'>Giới Thiệu</Nav.Link>
                            <Nav.Link href='#sanPham'>Sản Phẩm</Nav.Link>
                            <Nav.Link href='#tinTuc'>Tin tức</Nav.Link>
                            <Nav.Link href='#doiTac'>Đối tác</Nav.Link>
                            <Nav.Link href='#LienHe'>Liên Hệ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='Banner position-relative'>
                <div className='img-banner'>
                    <img className='w-100' src='../../images/AnhCatTC/banner.png' />
                </div>
                <div className='title-banner position-absolute text-start'>
                    <div>
                        <h1>THẾ GIỚi NỘI THẤT SỐ 1 VIỆT NAM</h1>
                        <span>HOÀNG HOAN</span>
                        <p>Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và những người thân yêu.</p>
                        <button>LIÊN HỆ NGAY</button>
                    </div>
                </div>
            </div>
            <div className='Categories w-100 d-flex justify-content-center'>
                <div className='box-container'>
                    <div className='list-categories w-100'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-phong-khach.png' alt='img' />
                                    <p>Phòng khách</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-phong-ngu.png' alt='img' />
                                    <p>Phòng ngủ</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-phong-bep.png' alt='img' />
                                    <p>Phòng bếp</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-phong-tam.png' alt='img' />
                                    <p>Phòng tắm</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-tre-em.png' alt='img' />
                                    <p>Trẻ em</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-van-phong.png' alt='img' />
                                    <p>Văn Phòng</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-cau-thang.png' alt='img' />
                                    <p>Cầu thang</p>
                                </a>
                            </div>
                            <div className='col-md-3'>
                                <a href='#'>
                                    <img src='../images/AnhCatTC/loai-sp/icon-do-trang-tri.png' alt='img' />
                                    <p>Đồ trang trí</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='slide-product mt-5'>
                        <h4>SẢN PHẨM NỔI BẬT</h4>
                    </div>
                    <div className='list-product d-flex align-items-center'>
                        <div>
                            <button>
                                <img src='..\images\AnhCatTC\button-left.png' />
                            </button>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <div style={{ overflow: 'hidden'}}>
                                    <img src='../images/AnhCatTC/san-pham-noi-bat/sp-1.jpg' alt='img' className='img-hover' />
                                </div>
                                <p className='mb-1'>Giường châu âu</p>
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
                                (Size lớn, trắng sữa)
                            </p>
                            <p className='mt-0'>8.999.999 VND</p>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/san-pham-noi-bat/sp-2.jpg' alt='img' />
                                <p className='mb-1'>Bàn làm việc</p>
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
                                (Size lớn, trắng nâu)
                            </p>
                            <p className='mt-0'>3.999.999 VND</p>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/san-pham-noi-bat/sp-3.jpg' alt='img' />
                                <p className='mb-1'>Tủ quần áo</p>
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
                            <p className='mt-0'>12.999.999 VND</p>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/san-pham-noi-bat/sp-4.jpg' alt='img' />
                                <p className='mb-1'>Kệ để đồ</p>
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
                                (Size lớn, trắng sữa)
                            </p>
                            <p className='mt-0'>2.499.999 VND</p>
                        </div>
                        <div>
                            <button>
                                <img src='..\images\AnhCatTC\button-right.png' />
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className='Product'>

            </div>
        </>

    )
}

export default Home