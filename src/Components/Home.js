import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style.css'
import '../js/main.js'

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
                                <div className='d-flex justify-content-center'>
                                    <div style={{ overflow: 'hidden', width: 270, height: 270 }}>
                                        <img src='../images/AnhCatTC/san-pham-noi-bat/sp-1.jpg' alt='img' className='img-hover' />
                                    </div>
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
                                <div className='d-flex justify-content-center'>
                                    <div style={{ overflow: 'hidden', width: 270, height: 270 }}>
                                        <img src='../images/AnhCatTC/san-pham-noi-bat/sp-2.jpg' alt='img' className='img-hover' />
                                    </div>
                                </div>
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
                                <div className='d-flex justify-content-center'>
                                    <div style={{ overflow: 'hidden', width: 270, height: 270 }}>
                                        <img src='../images/AnhCatTC/san-pham-noi-bat/sp-3.jpg' alt='img' className='img-hover' />
                                    </div>
                                </div>
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
                                <div className='d-flex justify-content-center'>
                                    <div style={{ overflow: 'hidden', width: 270, height: 270 }}>
                                        <img src='../images/AnhCatTC/san-pham-noi-bat/sp-4.jpg' alt='img' className='img-hover' />
                                    </div>
                                </div>
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

            {/* About */}
            <div className='About w-100 position-relative'>
                <div>
                    <div className='w-100'>
                        <img src='../images/AnhCatTC/ve-chung-toi/bg-about-us.jpg' className='w-100 img' />
                    </div>
                    <div className='box-container position-absolute top-0 start-50 translate-middle-x'>
                        <h4 className='mt-5'>Về chúng tôi</h4>
                        <div>
                            <div className='row mt-5'>
                                <div className='col-md-6'>
                                    <img src='../images/AnhCatTC/ve-chung-toi/ve-chung-toi.jpg' className='w-100 h-100' />
                                </div>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <p>
                                            NỘI THẤT
                                            <span> HOANG HOAN</span>
                                            <br />
                                            uy tín song hành chất lượng
                                        </p>
                                        <p>
                                            Nội thất của
                                            <span> HOANG HOANG </span>
                                            chúng tôi tự hào là đứa con tinh thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực kinh doanh đồ gỗ nội thất với thương hiệu ĐỒ GỖ HOÀNG HOAN nổi tiếng.
                                        </p>
                                        <p>
                                            Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH Kiên Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy nhiệt huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng tôi là sở hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản xuất đa dạng các sản phẩm với giá cả luôn cạnh tranh.
                                        </p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/ve-chung-toi-1.jpg' className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/ve-chung-toi-2.jpg' className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/ve-chung-toi-3.jpg' className='w-100 h-100' />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/ve-chung-toi-4.jpg' className='w-100 h-100' alt='img' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className='mt-3'>Tại sao nên chọn hoàng hoan?</h4>
                            <div>
                                <div className='row mt-2 mb-4'>
                                    <div className='col-md-6'>
                                        <div className='item d-flex py-4'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/chinh-sach.jpg' alt='img' />
                                            </div>
                                            <div className='text-start ps-4 d-flex align-items-center'>
                                                <div>
                                                    <h5>Chính sách giá</h5>
                                                    <br />
                                                    <p className='my-0'>Tốt nhất và công khai giá trên website</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='item d-flex py-4'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/san-pham.jpg' alt='img' />
                                            </div>
                                            <div className='text-start ps-4 d-flex align-items-center'>
                                                <div>
                                                    <h5>Sản xuất</h5>
                                                    <br />
                                                    <p className='my-0'>Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='item d-flex py-4'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/chat-luong.jpg' alt='img' />
                                            </div>
                                            <div className='text-start ps-4 d-flex align-items-center'>
                                                <div>
                                                    <h5>Chất lượng</h5>
                                                    <br />
                                                    <p className='my-0'>Cam kết chất lượng và tiến độ thi công</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='item d-flex py-4'>
                                            <div>
                                                <img src='../images/AnhCatTC/ve-chung-toi/chinh-sach.jpg' alt='img' />
                                            </div>
                                            <div className='text-start ps-4 d-flex align-items-center'>
                                                <div>
                                                    <h5>Bảo hành</h5>
                                                    <br />
                                                    <p className='my-0'>Dịch vụ bảo hành tốt nhất khu vực</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* New */}
            <div className='New position-relative w-100 d-flex justify-content-center'>
                <div className='box-container '>
                    <h4 className='mt-5'>Tin tức</h4>
                    <div className='row mt-5'>
                        <div className='col-md-7'>
                            <div className='position-relative'>
                                <div className='img'>
                                    <a href='#'>
                                        <img src='../images/AnhCatTC/tin-tuc/tintuc.jpg' alt='img' className='w-100 h-100' />
                                    </a>
                                </div>
                                <div className='box-content position-absolute bottom-0'>
                                    <div className='m-4'>
                                        <p className='text-start text-white'>Cách chọn Sofa cho phòng khách nhà bạn thêm phần sang trọng</p>
                                        <p>Không phải ai trong chúng ta cũng biết cách chọn màu sofa cho phòng khách trở nên sang trọng và đẹp mắt hơn. Tuy nhiên, đây là yếu tố quyết định phần lớn đến tính thẩm mỹ của toàn bộ ngôi nhà.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <a href='#'>
                                    <p className='text-uppercase text-more mt-5'>Xem thêm <i class="fa-solid fa-arrow-right fa-xl"></i></p>
                                </a>
                            </div>
                        </div>
                        <div className='col-md-5 New-second' >
                            <div className='row mb-4' style={{ height: 200 }} >
                                <div className='col-md-5 img-2'>
                                    <img src='../images/AnhCatTC/tin-tuc/tintuc_1.png' className='w-100' />
                                </div>
                                <div className='col-md-7'>
                                    <h3 >Trang trí phòng khách cho thêm năng động</h3>
                                    <p >Không cần quá đầu tư nhiều tiền vào những món đồ sang trọng cho việc trang trí phòng khách. Bạn vẫn có thể sở hữu không gian phòng khách với những mẹo không phải ai cũng sẵn sàng chi cho bạn.</p>
                                </div>
                            </div>
                            <div className='row mb-4' style={{ height: 200 }}>
                                <div className='col-md-5 img-2'>
                                    <img src='../images/AnhCatTC/tin-tuc/tintuc_2.png' className='w-100' />
                                </div>
                                <div className='col-md-7'>
                                    <h3 >25+ mẫu giường ngủ hộc kéo cho phòng nhỏ</h3>
                                    <p >Sự thật chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế tạo được một giấc ngủ là một điều đặc biệt quan trọng. Giường ngủ hộc kéo chính là giải pháp thông minh giúp đem lại một giấc ngủ sâu.</p>
                                </div>
                            </div>
                            <div className='row mb-4' style={{ height: 200 }}>
                                <div className='col-md-5 img-2'>
                                    <img src='../images/AnhCatTC/tin-tuc/tintuc_3.png' className='w-100' />
                                </div>
                                <div className='col-md-7'>
                                    <h3 >Top 10 mẫu nội thất chung cư 1 phòng ngủ</h3>
                                    <p >Những căn hộ chung cư mini có diện tích nhỏ, ngày càng trở nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí “hạn hẹp”...</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Đối tác */}

            <div className='Doi-tac position-relative w-100 d-flex justify-content-center'>
                <div className='box-container'>
                    <h4 className='mt-5'>Đối tác</h4>
                    <div>
                        <div className="container text-center my-3">
                            <div className="row mx-auto my-auto justify-content-center">
                                <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/marvella.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/melissa.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/muong-thanh.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/sheraton.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/sunrise-sapa.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/the-coffee-house.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/vinpearl.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <div className="card-img">
                                                        <img
                                                            src="../images/AnhCatTC/doi-tac/sunrise-sapa.png"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="carousel-control-prev bg-transparent w-aut"
                                        href="#recipeCarousel"
                                        role="button"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    </a>
                                    <a
                                        className="carousel-control-next bg-transparent w-aut"
                                        href="#recipeCarousel"
                                        role="button"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* Liên hệ */}
            <div className='Lien-he position-relative w-100 d-flex justify-content-center'>
                <div>
                    <div className='bg-lienhe vw-100'>
                        <img src='../images/AnhCatTC/lienhe-bg.jpg' className='w-100' />
                    </div>
                    <div className='anh-lienhe position-absolute'>
                        <img src='../images/AnhCatTC/lienhe-1.png' />
                    </div>
                    <div className='position-absolute w-100 d-flex justify-content-center top-0'>
                        <div className='box-container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <p>Trải nghiệm dịch vụ</p>
                                        <p>cùng Hoàng Hoan ngay</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <form action='#' method='post'>
                                            <div className='text-start'>
                                                <label for="exampleInputEmail1" class="form-label">Thông tin liên hệ</label>
                                                <input type="text" class="form-control" placeholder='Email/Số điện thoại'/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>

    )
}

export default Home