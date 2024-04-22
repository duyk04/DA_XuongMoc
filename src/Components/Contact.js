import React from 'react'
import '../Css/Contact.css'
function Contact() {
	return (
		<>
			<div className='Contact'>
				<div className='banner position-relative'>
					<div className='img-banner'>
						<img src='../images/AnhCatTC/Contact/Banner_contact.png' alt='img-banner' className='w-100' />
					</div>
					<div className='logo-banner position-absolute top-50 start-50 translate-middle'>
						<img src='../images/AnhCatTC/Introduce/logo.png' alt='logo' />
						<p className='text-white'>Liên hệ</p>
					</div>
				</div>
				<div className='w-100 d-flex justify-content-center' style={{ backgroundColor: '#f3f3f3' }}>
					<div className='box-container content' >
						<div className='row my-5'>
							<div className='col-md-5 p-0'>
								<img src="../images/AnhCatTC/Contact/img_contact.png"
									className="w-100"
									alt='marvella' />
							</div>
							<div className='col-md-1'></div>
							<div className='col-md-6 p-0'>
								<h4>Liên hệ với chúng tôi</h4>
								<form method='post'>
									<div className='input-form'>
										<input type='text' name='name' placeholder='Họ và tên'/>
									</div>
									<div className='input-form'>
										<input type='email' name='email' placeholder='Email'/>
									</div>
									<div className='input-form'>
										<input type='number' name='phone' placeholder='Số điện thoại'/>
									</div>
									<div className='input-form'>
										<input type='text' name='content' placeholder='Nội dung'/>
									</div>
									<div>
										<button type='submit' name='submit'>Gửi</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact