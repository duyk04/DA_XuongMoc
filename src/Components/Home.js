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
                <div className='list-categories box-container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-phong-khach.png' />
                                <p>Phòng khách</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-phong-ngu.png' />
                                <p>Phòng ngủ</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-phong-bep.png' />
                                <p>Phòng bếp</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-phong-tam.png' />
                                <p>Phòng tắm</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-tre-em.png' />
                                <p>Trẻ em</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-van-phong.png' />
                                <p>Văn Phòng</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-cau-thang.png' />
                                <p>Cầu thang</p>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a href='#'>
                                <img src='../images/AnhCatTC/loai-sp/icon-do-trang-tri.png' />
                                <p>Đồ trang trí</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home