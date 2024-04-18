import React from 'react'
import '../Css/style.css'
import '../Css/Introduce.css'

function Introduce() {
	return (
		<>
			<div className='Introduce'>
				<div className='banner position-relative'>
					<div className='img-banner'>
						<img src='../images/AnhCatTC/Introduce/Banner.png' alt='img-banner' className='w-100' />
					</div>
					<div className='logo-banner position-absolute top-50 start-50 translate-middle'>
						<img src='../images/AnhCatTC/Introduce/logo.png' alt='logo' />
						<p className='text-white'>GIỚI THIỆU</p>
					</div>
				</div>
				<div className='w-100 d-flex justify-content-center' style={{ backgroundColor: '#f3f3f3' }}>
					<div className='box-container' >
						{/* Thành lập phát triển */}
						<div className='Thanh-lap'>
							<div>
								<h4>Thành lập & phát triển</h4>
							</div>
							<div >
								<div className='row mt-5'>
									<div className='col px-0'>
										<img src='../images/AnhCatTC/Introduce/thanh-lap.png' alt='img-thanhlap' className='w-100' />
									</div>
									<div className='col-md-1'></div>
									<div className='col px-0'>
										<p>
											Nội Thất Hoàng Hoan được xây dựng dựa trên tình yêu, đam mê của tôi đối với nghề mộc và khao khát mang những sản phẩm nội thất đẹp của mình đến với khách hàng thân yêu.
										</p>
										<p>
											Cả 1 quá trình từ 1 người thợ phụ rồi được làm thợ mộc chính, tự tạo ra cho mình 1 phân xưởng nhỏ dần phát triển và hiện tại Hoàng Hoan đã là 1 trong những công ty có dịch vụ thiết kế và thi công nội thất uy tín chất lượng với giá tốt nhất tại Hà Nội với sứ mệnh “đem đến cho khách hàng không gian nội thất hoàn hảo”.
										</p>
										<p className='mb-0'>
											Hoàng Hoan luôn nỗ lực để tạo ra không gian đẹp cho khách hàng theo nhiều gam màu sắc khác nhau và phong cách đa dạng, theo đúng ở thích, lứa tuổi và phong thủy của khách hàng.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='Tam-nhin'>
							<div>
								<h4>Tầm nhìn</h4>
							</div>
							<div className='row mt-3'>
								<img src='../images/AnhCatTC/Introduce/tam-nhin.png' alt='img-tamnhin' className='w-100 px-0' />
								<p className='px-0'>
									Chúng tôi luôn hướng đến việc tạo ra các sản phẩm nội thất trên triết lý tôn trọng và giữ gìn những gì tự nhiên đã ban tặng cho con người. Chúng tôi luôn tìm tòi và ứng dụng các giải pháp sản phẩm và công nghệ tiên tiến nhất, hợp tác với các đối tác công nghệ hàng đầu thế giới, tìm kiếm và phát triển các vùng nguyên liệu tự nhiên được thiên nhiên chọn lọc, ưu đãi trong nước lẫn nước ngoài, tất cả nhằm tạo ra các sản phẩm nội thất tự nhiên gần gữi cho người khách hàng Việt Nam.
								</p>
							</div>
						</div>
						<div className='Su-menh'>
							<div>
								<h4>Sứ mệnh</h4>
							</div>
							<div>
								<div className='row mt-2 mb-4'>
									<div className='col-md-6'>
										<div className='item d-flex py-4'>
											<div className='d-flex align-items-center ms-4'>
												<img src='../images/AnhCatTC/Introduce/item-1.png' alt='img'/>
											</div>
											<div className='text-start ps-4 d-flex align-items-center'>
												<div>
													<h5 className='mb-0'>Với xã hội</h5>
													<p className='my-0'>Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích cực cùng cộng đồng xây dựng môi trường sống bền vững.</p>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='item d-flex py-4'>
											<div className='d-flex align-items-center ms-4'>
												<img src='../images/AnhCatTC/Introduce/item-2.png' alt='img' />
											</div>
											<div className='text-start ps-4 d-flex align-items-center'>
												<div>
													<h5 className='mb-0'>Với nhân viên</h5>
													<p className='my-0'>Xây dựng môi trường làm việc chuyên nghiệp, năng động, sáng tạo và nhân văn.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-6'>
										<div className='item d-flex py-4'>
											<div className='d-flex align-items-center ms-4'>
												<img src='../images/AnhCatTC/Introduce/item-3.png' alt='img' />
											</div>
											<div className='text-start ps-4 d-flex align-items-center'>
												<div>
													<h5 className='mb-0'>Với đối tác</h5>
													<p className='my-0'>Đề cao tinh thần hợp tác cùng phát triển,cam kết trở thành “Người đồng hành số 1” của các đối tác.</p>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='item d-flex py-4'>
											<div className='d-flex align-items-center ms-4'>
												<img src='../images/AnhCatTC/Introduce/item-4.png' alt='img' />
											</div>
											<div className='text-start ps-4 d-flex align-items-center'>
												<div>
													<h5 className='mb-0'>Với thị trường</h5>
													<p className='my-0'>Cung cấp các sản phẩm với chất lượng quốc tế và phù hợp  với con người Việt Nam.</p>
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
		</>
	)
}

export default Introduce