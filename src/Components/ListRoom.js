import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/ListRoom.css'

function ListRoom() {
    return (
        <>
            <div className='List-room d-flex flex-column align-items-center'>
                <div className='box-container row pt-4'>
                    <div className='col-8'>
                        <ul className='d-flex'>
                            <li className='mx-3 ranger-price'>Chọn mức giá:</li>
                            <li className='mx-3 ranger-price'>Dưới 5 triệu</li>
                            <li className='mx-3 ranger-price'>5 - 10 triệu</li>
                            <li className='mx-3 ranger-price'>10 - 15 triệu</li>
                            <li className='mx-3 ranger-price'>Trên 15 triệu</li>
                        </ul>
                    </div>
                    <div className='col-4 '>
                        {/* <label > Sắp xếp</label> */}
                        <select className='float-end' type='seclect'>
                            <option value={0}>Sắp xếp</option>
                            <option value={1}>Mới nhất</option>
                            <option value={2}>Phổ biến nhất</option>
                            <option value={1}>Giá cao đến thấp</option>
                            <option value={1}>Giá thấp đến cao</option>
                        </select>
                    </div>
                </div>
                <div className='box-container mt-5'>
                    <div className='row mt-5 mx-5'>
                        <div className='col'>
                            <h4>Phòng khách - Details</h4>
                        </div>
                        {/* <div className='col d-flex justify-content-end align-items-center'>
                            <button className='btnViewAll'><Link to={'Test'}>XEM TẤT CẢ</Link></button>
                        </div> */}
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

export default ListRoom