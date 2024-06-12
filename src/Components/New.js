import React from 'react'
import '../Css/New.css'
import { Link } from 'react-router-dom'
function New() {
    return (
        <>
            <div className='New d-flex justify-content-center'>
                <div className='box-container my-5'>
                    <div className='my-5'>
                        <h4 className='text-center'>Tin tức</h4>
                    </div>
                    <div className='row mx-4'>
                        <Link to={'/NewDetail'} className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_1.png' alt='img' className='w-100' />
                            <h5>NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP</h5>
                            <p>Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".</p>
                        </Link>
                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_2.png' alt='img' className='w-100' />
                            <h5>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN</h5>
                            <p>Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.</p>
                        </div>
                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_3.png' alt='img' className='w-100' />
                            <h5>TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP</h5>
                            <p>Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc “thiết kế căn hộ chung cư mini 2 phòng ngủ”</p>
                        </div>

                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_1.png' alt='img' className='w-100' />
                            <h5>NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP</h5>
                            <p>Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".</p>
                        </div>
                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_2.png' alt='img' className='w-100' />
                            <h5>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN</h5>
                            <p>Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.</p>
                        </div>
                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_3.png' alt='img' className='w-100' />
                            <h5>TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP</h5>
                            <p>Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc “thiết kế căn hộ chung cư mini 2 phòng ngủ”</p>
                        </div>

                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_1.png' alt='img' className='w-100' />
                            <h5>NGẤT NGÂY VỚI TOP 10 MẪU NỘI THẤT CHUNG CƯ 1 PHÒNG NGỦ ĐẸP</h5>
                            <p>Những căn hộ chung cư mini, có diện tích nhỏ ngày càng trở nên nên ưa chuộng hơn trong cuộc sống hiện đại với những ai có khoản kinh phí "hạn hẹp".</p>
                        </div>
                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_2.png' alt='img' className='w-100' />
                            <h5>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG BẠN</h5>
                            <p>Sự thật là chúng ta dành hết 1/3 cuộc đời chỉ để ngủ, vì thế việc tạo được một giấc ngủ ngon là một điều đặc biệt quan trọng.</p>
                        </div>
                        <div className='col-md-4 px-4 pt-4'>
                            <img src='../images/AnhCatTC/New/new_3.png' alt='img' className='w-100' />
                            <h5>TUYỆT CHIÊU THIẾT KẾ CHUNG CƯ MINI 2 PHÒNG NGỦ SIÊU ĐẸP</h5>
                            <p>Độ tuổi khởi nghiệp và tự lập ngày càng trẻ hóa trong xã hội hiện đại thời nay, thế nên việc “thiết kế căn hộ chung cư mini 2 phòng ngủ”</p>
                        </div>
                    </div>
                    <div className='btn-page mb-5 row d-flex justify-content-center'>
                        <div>{'<'}</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>{'>'}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New