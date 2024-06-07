import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../Css/Products.css'
import SliderCustom from './SliderCustom'
import Test from './Test';
import ListRoom from './ListRoom';
function Products() {
	return (
		<>
			<div className='Products w-100'>
				<div className='Banner'>
					<SliderCustom slidesToShow={1} speed={1000} autoplaySpeed={5000} btnArrow={false} autoplay={true} infinite={true}>
						<div className='position-relative'>
							<img loading='lazy' src='../images/AnhCatTC/Products/Banner.png' alt='Banner' className='w-100' />
							<div className='position-absolute box-title'>
								<img loading='lazy' src='../images/AnhCatTC/Products/Title.png' />
								<br />
								<Link to={'/TestRouter'}><button>Mua ngay</button></Link>
							</div>
						</div>
						<div className='position-relative'>
							<img loading='lazy' src='../images/AnhCatTC/Products/Banner.png' alt='Banner' className='w-100' />
							<div className='position-absolute box-title'>
								<img loading='lazy' src='../images/AnhCatTC/Products/Title.png' />
								<br />
								<Link to={'/TestRouter'}><button>Mua ngay</button></Link>
							</div>
						</div>
						<div className='position-relative'>
							<img loading='lazy' src='../images/AnhCatTC/Products/Banner.png' alt='Banner' className='w-100' />
							<div className='position-absolute box-title'>
								<img loading='lazy' src='../images/AnhCatTC/Products/Title.png' />
								<br />
								<Link to={'/TestRouter'}><button>Mua ngay</button></Link>
							</div>
						</div>
						<div className='position-relative'>
							<img loading='lazy' src='../images/AnhCatTC/Products/Banner.png' alt='Banner' className='w-100' />
							<div className='position-absolute box-title'>
								<img loading='lazy' src='../images/AnhCatTC/Products/Title.png' />
								<br />
								<Link to={'/TestRouter'}><button>Mua ngay</button></Link>
							</div>
						</div>
						<div className='position-relative'>
							<img loading='lazy' src='../images/AnhCatTC/Products/Banner.png' alt='Banner' className='w-100' />
							<div className='position-absolute box-title'>
								<img loading='lazy' src='../images/AnhCatTC/Products/Title.png' />
								<br />
								<Link to={'/TestRouter'}><button>Mua ngay</button></Link>
							</div>
						</div>
					</SliderCustom>
				</div>
				{/* Content */}
				<div className='Content d-flex flex-column align-items-center'>
					{/* <BrowserRouter>
						
						<Routes	>
							<Route path='/Test' element={<Test />}></Route>
							<Route path='*' element={<NotFound />}></Route>
						</Routes>
					</BrowserRouter> */}
					<Outlet>
						<Test/>
						<ListRoom/>
					</Outlet>
					{/* Phòng khách */}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>Phòng khách</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'><Link to={'ListRoom'}>XEM TẤT CẢ</Link></button>
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

					{/* Phòng ngủ*/}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>Phòng ngủ</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_ngu/giuongchauau.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Giường châu âu</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_ngu/giuonggo.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Giường gỗ</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_ngu/kedaugiuong.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Kệ đầu giường</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_ngu/tuquanao.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Tủ quần áo</p>
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

					{/* Phòng bếp */}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>Phòng bếp</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_bep/banan_6.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bàn ăn 6</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_bep/bantra.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bàn trà</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_bep/banan_4.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bàn ăn 4</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_bep/banan_8.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bàn ăn 8</p>
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

					{/* Phòng tắm */}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>Phòng tắm</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tam/bonruamat.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bồn rửa mặt</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tam/bonruatay.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bồn rửa tay</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tam/bonrua_2.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>bồn rửa 2</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tam/tuamtuong.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Tủ âm tường</p>
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

					{/* Trẻ em */}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>Trẻ em</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tre_em/banhoc.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Bàn học</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tre_em/giuongtang.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Giường tầng</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tre_em/giuongtang_2.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>giường tầng 2</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/phong_tre_em/cuitreem.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Cũi trẻ em</p>
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

					{/* Văn phòng */}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>văn phòng</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/van_phong/ghevanphong.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>ghế văn phòng</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/van_phong/banlamviec_1.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>bàn làm việc</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/van_phong/banlamviec_2.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>bàn làm việc 2</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/van_phong/giasach.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>Giá sách</p>
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

					{/* Cầu thang */}
					<div className='box-container mt-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>cầu thang</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/cau_thang/cauthang_1.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>cầu thang 1</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/cau_thang/cauthang_2.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>gương 2</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/cau_thang/cauthang_3.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>cầu thang 3</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/cau_thang/cauthang_4.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>cầu thang 4</p>
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

					{/* Trang trí */}
					<div className='box-container mt-5 mb-5'>
						<div className='row mt-5 mx-5'>
							<div className='col'>
								<h4>Trang trí</h4>
							</div>
							<div className='col d-flex justify-content-end align-items-center'>
								<button className='btnViewAll'>XEM TẤT CẢ</button>
							</div>
						</div>
						<div className='row mx-5 mb-4'>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/trang_tri/guong_1.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>gương 1</p>
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
									(Size vừa, nâu đậm)
								</p>
								<p className='mt-0'>8.999.999 VND</p>
							</div>
							<div className='col-md-3'>
								<a href='#'>
									<div className='d-flex justify-content-center'>
										<div className='w-100' style={{ overflow: 'hidden' }}>
											<img loading='lazy' src='../images/AnhCatTC/Products/trang_tri/guong_2.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>gương 2</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/trang_tri/ghedon.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>ghế đôn</p>
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
											<img loading='lazy' src='../images/AnhCatTC/Products/trang_tri/dentrum.png' alt='img' className='img-hover w-100' />
										</div>
									</div>
									<p className='mb-1 text-uppercase'>đèn trùm</p>
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
				</div>
			</div>
		</>
	)
}

export default Products