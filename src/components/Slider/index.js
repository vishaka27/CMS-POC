import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderDemo(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true
    };
    const slides = props.block.slides;
    return (       
    <div className="slider-container">
         <Slider {...settings}>
            {slides.map(comp => 
                <div key={comp.img}>
                    <img src={comp.img} />
                </div>
            )}
         </Slider>
    </div>
    )
}

export default SliderDemo;
