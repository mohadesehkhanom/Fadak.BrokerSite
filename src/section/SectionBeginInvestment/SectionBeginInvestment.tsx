'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SectionBeginInvestment.css";
// import Slider from "react-slick";

export default function SectionBeginInvestment() {



    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     arrows: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     centerMode: false,
    //     variableWidth:false,
    //     autoplaySpeed: 300000,
    // };



    return <>
        {/*<section className="">*/}

        {/*        <div >*/}
        {/*            <Slider {...settings}>*/}
        {/*                <div>*/}
        {/*                    <img*/}
        {/*                        className="w-100"*/}
        {/*                        src="./assets/images/slider/4.jpg"*/}
        {/*                        alt="Slide 1"*/}
        {/*                    />*/}
        {/*                </div>*/}
        {/*            </Slider>*/}
        {/*        </div>*/}
        {/*</section>*/}
        <section className="cta-section">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '480px' }}>
                <div className="d-flex flex-column justify-content-center text-center">
                    <h2 className="cta-section-title">جای پاتو محکم کن</h2>
                    <h2 className="cta-section-subtitle mt-3">مشتقه ابزار مدیریت ریسک شما</h2>
                </div>

            </div>
        </section>
    </>
}