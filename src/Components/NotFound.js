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
            <p class="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
            <section class="error-container">
                <span class="four"><span class="screen-reader-text">4</span></span>
                <span class="zero"><span class="screen-reader-text">0</span></span>
                <span class="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div class="link-container">
                <Link className='more-link' to={'/home'}>Tới trang chủ</Link>
            </div>
        </>
    )
}

export default NotFound