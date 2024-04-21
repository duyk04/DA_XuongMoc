import React from 'react'
import '../Css/NotFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        // <div style={{minHeight:"55vh"}}>
        //     <h2 style={{color: "red", fontSize: "4rem", paddingTop:"12%"}}>404 NotFound</h2>
        // </div>
        <>
            <h1>404 Error Page</h1>
            <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link className='more-link' to={'/home'}>Tới trang chủ</Link>
            </div>
        </>
    )
}

export default NotFound