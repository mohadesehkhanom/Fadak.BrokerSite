'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsorSlider.css";

export default function SponsorSlider({children}: { children: React.ReactNode }) {
    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 1500,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <section className="aitable-sponsor style1">
            <div className="container">
                <div className="aitable-sponsor-wrap">
                    <Slider {...settings}>
                        {children}
                    </Slider>
                </div>
            </div>
        </section>
    );
}


