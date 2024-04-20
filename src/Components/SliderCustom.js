import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCustom({ dots, infinite, speed, slidesToShow, slidesToScroll, autoplaySpeed, autoplay, btnArrow, children }) {
    const displayArrow = btnArrow ? "block" : "none";
    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: displayArrow, backgroundColor: 'gray', borderRadius: '50%', padding: '10px', position: 'absolute', top: '50%', left: '-30px', transform: 'translateY(-50%)', zIndex: '1000' }}
                onClick={onClick}
            >
            </div>
        );
    }
    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: displayArrow, backgroundColor: 'gray', borderRadius: '50%', padding: '10px', position: 'absolute', top: '50%', right: '-30px', transform: 'translateY(-50%)', zIndex: '1000' }}
                onClick={onClick}
            >
            </div>
        );
    }
    var settings = {
        dots: dots || false,
        infinite: infinite || false, // lặp lại
        speed: speed || 700, // tốc dộ cuộn
        slidesToShow: slidesToShow || 6, // Số lượng slides hiển thị
        slidesToScroll: slidesToScroll || 1, // Số lượng cuộn slide
        autoplay: autoplay || false, // Tự động cuộn
        autoplaySpeed: autoplaySpeed || 5000, // Thời gian chờ giữa các lần cuộn (milliseconds)
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
