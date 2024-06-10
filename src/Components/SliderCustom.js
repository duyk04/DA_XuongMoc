import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCustom({ dots, infinite, speed, slidesToShow, slidesToScroll, autoplaySpeed, autoplay, btnArrow, children }) {
    const displayArrow = btnArrow ? "block" : "none";
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return ( 
                <img src='..\images\AnhCatTC\button-left.png' alt='...' 
                // className={className}
                onClick={onClick} style={{...style, display: displayArrow,position: 'absolute', top: '40%', left: '-50px', transform: 'translateY(50%)', zIndex: '1000', cursor: 'pointer'}} />

        );
    }
    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <img src='..\images\AnhCatTC\button-right.png' alt='...' 
                // className={className}
                onClick={onClick} style={{...style, display: displayArrow,position: 'absolute', top: '40%', right: '-50px', transform: 'translateY(50%)', zIndex: '1000', cursor: 'pointer'}} />

        );
    }
    var settings = {
        dots: dots || false,
        infinite: infinite || false,
        speed: speed || 700,
        slidesToShow: slidesToShow || 6,
        slidesToScroll: slidesToScroll || 1,
        autoplay: autoplay || false,
        autoplaySpeed: autoplaySpeed || 5000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}

export default SliderCustom;
