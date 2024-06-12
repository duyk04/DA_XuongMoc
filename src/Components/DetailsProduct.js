import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../Css/DetailsProduct.css'
import CartContext from './CartContext';

function DetailsProduct() {
	const location = useLocation();
	const { state } = location;

	const formatPrice = (price) => {
		return price.toLocaleString('vi-VN');
	};
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


	const { cart, addToCart } = useContext(CartContext);
	// console.log(cart);
		

	return (
		<>
			<div className='DetailsProduct d-flex flex-column align-items-center'>
				<div className='box-container my-5'>
					<div className='m-5'>
						<h3 className='text-start mb-0 text-uppercase'>{state.name}</h3>
						<div className='text-start mb-2'>
							{renderStars(state.star)}
						</div>
						<div className='row'>
							<div className='col-md-7 position-relative'>
								<button className='btn-left position-absolute'>
									<img src='../images/AnhCatTC/btn-left.png' alt='img' className='w-100' />
								</button>
								<img loading='lazy' src={state.url_image} alt='img' className='w-100' style={{ width: '718px', height: '432px', imageRendering: 'pixelated', objectFit: 'fill' }} />
								<button className='btn-right position-absolute'>
									<img src='../images/AnhCatTC/btn-right.png' alt='img' className='w-100' />
								</button>
								<div className='row my-3'>
									<img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1_3.png' alt='img' className='col-md-3' />
									<img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1_4.png' alt='img' className='col-md-3' />
									<img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1_5.png' alt='img' className='col-md-3' />
									<img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1_6.png' alt='img' className='col-md-3' />
								</div>
							</div>
							<div className='col-md-5 ps-5'>
								<div className='ps-5'>
									<h5 className='text-start'>Chất liệu</h5>
									<button className='btn-chatlieu'>Gỗ sồi</button>
									<button className='btn-chatlieu'>Gỗ lim</button>
									<p className='price-old m-0'>12.999.999 VNĐ</p>
									<p className='price-new m-0'>{formatPrice(parseInt(state.price))} VNĐ</p>
									<button className='btnBh mt-2 mb-4'>
										<img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/iconBh.png' alt='img' className='px-3' />
										Bảo hành sản phẩm lên tới 36 tháng
									</button>
									<div className='d-flex'>
										<button type='button' className='btn-addCart' onClick={() => addToCart(state)}><i className="fa-solid fa-cart-plus fa-xl px-2" style={{ color: '#bd945f' }}></i>Thêm vào giỏ hàng</button>
										<button type='button' className='btn-buyNow'>Mua ngay</button>
									</div>

								</div>
							</div>
						</div>
						<div className='mt-5'>
							<div className='btn-tt d-flex'>
								<button>Đặc trưng</button>
								<button>Thông số</button>
								<button>Bảo quản</button>
								<button>Bảo hành</button>
								<button>Cam kết</button>
							</div>
							<div className='tt-sanpham mt-3'>
								<p className='text-start'>
									- Bàn cà phê cứng đơn giản với kệ mở<br />
									- Phong cách hình học tối giản<br />
									- Kệ bên trong có kích thước hoàn hảo cho tạp chí, đế lót ly và các phụ kiện phòng khách khác<br />
									- Có thể được sử dụng như một bàn TV thấp - Kệ mỏng hoàn hảo để chứa một hộp hàng đầu hoặc đầu phát blu-ray<br />
									- Làm bằng gỗ Sheesham cao cấp<br />
									- Không cần lắp ráp.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='box-container my-5'>
					<div className='row mt-5 mx-5'>
						<div className='col'>
							<h4>Sản phẩm tương tự</h4>
						</div>
						<div className='col d-flex justify-content-end align-items-center'>
							<button className='btnViewAll'><Link to={'List_Room'}>XEM TẤT CẢ</Link></button>
						</div>
					</div>
					<div className='row mx-5 mb-4'>
						<div className='col-md-3'>
							<a href='#'>
								<div className='d-flex justify-content-center'>
									<div className='w-100' style={{ overflow: 'hidden' }}>
										<img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1.png' alt='img' className='img-hover w-100' />
									</div>
								</div>
								<p className='mb-1 text-uppercase'>Bàn uống nước</p>
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
			</div>
		</>
	)
}

export default DetailsProduct