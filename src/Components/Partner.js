import React from 'react'
import '../Css/Partner.css'
function Partner() {
	return (
		<>
			<div className='Partner'>
				<div className='banner position-relative'>
					<div className='img-banner'>
						<img src='../images/AnhCatTC/Partner/Banner_partner.png' alt='img-banner' className='w-100' />
					</div>
					<div className='logo-banner position-absolute top-50 start-50 translate-middle'>
						<img src='../images/AnhCatTC/Introduce/logo.png' alt='logo' />
						<p className='text-white'>Đối tác</p>
					</div>
				</div>
				<div className='w-100 d-flex justify-content-center' style={{ backgroundColor: '#f3f3f3' }}>
					<div className='box-container content' >
						<div className='row my-5 '>
							<div className='col-md-4 p-0'>
								<img src="../images/AnhCatTC/doi-tac/marvella.png"
                                                    className="w-100"
                                                    alt='marvella'/>
							</div>
							<div className='col-md-1'></div>
							<div className='col-md-7 p-0'>
								<h4>Công ty cổ phần vinpearl</h4>
								<p>Vinpearl là thương hiệu dịch vụ du lịch nghỉ dưỡng – giải trí lớn nhất Việt Nam. Vinpearl sở hữu chuỗi khách sạn, resort và trung tâm hội nghị đẳng cấp 5 sao, các khu vui chơi giải trí quốc tế tọa lạc tại những danh thắng du lịch nổi tiếng nhất của Việt Nam.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Partner