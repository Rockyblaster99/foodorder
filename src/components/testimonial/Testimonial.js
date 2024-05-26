import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'

import './Testimonial.css'

const Testimonial = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div>
                <p className="review__text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                </p>

            </div>

        </>
    );
};

export default Testimonial;