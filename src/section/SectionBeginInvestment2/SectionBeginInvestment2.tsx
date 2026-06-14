"use client"

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./SectionBeginInvestment2.css";

const slides = [
    {
        image: "/assets/images/slider/home.webp",
        title: "بورس کالا و انرژی",
        subtitle: "نقطه اتصال تولید، تجارت و سرمایه",
    },
    {
        image: "/assets/images/slider/home2.webp",
        title: "سرمایه‌گذاری هوشمند",
        subtitle: "با اطمینان، شفافیت و قانون‌مداری",
    }
];

export default function SectionBeginInvestment() {
    return (
        <section className="cta-section">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: ".cta-pagination" }}
                loop={true}
                speed={900}
                className="cta-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className="cta-slide">
                                <div
                                    className="cta-slide-bg"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                <div className="cta-slide-overlay" />
                                <div className={`cta-slide-content${isActive ? " is-active" : ""}`}>
                                    <h3 className="cta-section-title">{slide.title}</h3>
                                    <h3 className="cta-section-subtitle">{slide.subtitle}</h3>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="cta-pagination" />
        </section>
    );
}