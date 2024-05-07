import React from 'react'
import '../Css/DetailsProduct.css'

function DetailsProduct() {
    return (
        <>
            <div className='DetailsProduct d-flex justify-content-center'>
                <div className='box-container my-5'>
                    <div className='m-5'>
                        <h4 className='text-start pb-3'>Bàn uống nước</h4>
                        <div className='row'>
                            <div className='col-md-7 position-relative'>
                                <button className='btn-left position-absolute'>
                                    <img loading='lazy' src='../images/AnhCatTC/btn-left.png' alt='img' className='w-100' />
                                </button>
                                <img loading='lazy' src='../images/AnhCatTC/Products/phong_khach/banuongnuoc_1_2.png' alt='img' className='w-100' />
                                <button className='btn-right position-absolute'>
                                    <img loading='lazy' src='../images/AnhCatTC/btn-right.png' alt='img' className='w-100' />
                                </button>
                            </div>
                            <div className='col-md-5 ps-5'>
                                <div className='ps-5'>
                                    <h5 className='text-start'>Chất liệu</h5>
                                    <div className='row'>
                                        <button className='btn-chatlieu'>Gỗ sồi</button>
                                        <button className='btn-chatlieu'>Gỗ lim</button>
                                    </div>
                                   <p className='price-old m-0'>12.999.999 VNĐ</p>
                                   <p className='price-new m-0'>9.999.999 VNĐ</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsProduct