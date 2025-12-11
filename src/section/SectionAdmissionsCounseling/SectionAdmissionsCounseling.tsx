'use client'
import React from "react";
import "./SectionAdmissionsCounseling.css"
import Slider from "react-slick";

export default function SectionAdmissionsCounseling() {


    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false
    };


    return <>
        <section className="Section-Admissions-Counseling">
            <div className="container d-flex flex-column gap-3">
                <h4>مشاوره پذیرش شرکت‌ها در بازار سرمایه</h4>
                <p>تأمین مالی پایدار و کم‌هزینه، کلید توسعه و افزایش ظرفیت‌های عملیاتی بنگاه‌های اقتصادی با ورود به
                    بازار سرمایه.</p>
            </div>
        </section>


        <section className="fadak-bg-cream py-5">
            <div className="container my-5">
                <h4 className="section-title text-center pb-4">مهم‌ترین خدمات مشاور پذیرش کارگزاری فدک</h4>
                <p className="section-subtitle text-center">ارائه یک زنجیره کامل از خدمات مشاوره‌ای، از ارزیابی اولیه تا تصویب  نهایی</p>

                <div className="w-100 mt-5">
                    <Slider {...settings}>

                        <div className="p-3">
                            <div className="card mb-4 rounded-4 dir-rtl">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://picsum.photos/600/300"
                                            className="img-fluid rounded-4"
                                            alt="ارزیابی و آماده‌سازی شرکت"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="fas fa-chart-line me-2"></i> ارزیابی و آماده‌سازی شرکت
                                            </h5>
                                            <ul className="mb-0">
                                                <li>بررسی دقیق وضعیت مالی، عملیاتی و ساختاری شرکت</li>
                                                <li>تحلیل میزان آمادگی برای پذیرش در بازارهای مختلف بورس و فرابورس</li>
                                                <li>شناسایی نقاط قابل بهبود و ارائه نقشه راه پذیرش</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="card mb-4 rounded-4 dir-rtl">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://picsum.photos/600/300"
                                            className="img-fluid rounded-4"
                                            alt="راهنمایی و مشاوره مقرراتی"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="fas fa-balance-scale me-2"></i> راهنمایی و مشاوره مقرراتی
                                            </h5>
                                            <ul className="mb-0">
                                                <li>تشریح الزامات، فرآیندها، آیین‌نامه‌ها و مقررات سازمان بورس</li>
                                                <li>ارائه مشاوره مستمر به سهامداران عمده، مدیران و مسئولان شرکت</li>
                                                <li>رفع ابهامات در تمامی مراحل تعامل با بورس/فرابورس</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="card mb-4 rounded-4 dir-rtl">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://picsum.photos/600/300"
                                            className="img-fluid rounded-4"
                                            alt="تهیه و تدوین مستندات پذیرش"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="fas fa-file-contract me-2"></i> تهیه و تدوین مستندات پذیرش
                                            </h5>
                                            <ul className="mb-0">
                                                <li>تدوین امیدنامه ناشر و تهیه کلیه مدارک و مستندات مورد نیاز</li>
                                                <li>تهیه طرح تجاری (Business Plan) در صورت ضرورت پذیرش در بورس</li>
                                                <li>ارائه گزارش‌های تحلیلی تکمیلی برای بهبود جایگاه شرکت در فرآیند
                                                    پذیرش
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="card mb-4 rounded-4 dir-rtl">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://picsum.photos/600/300"
                                            className="img-fluid rounded-4"
                                            alt="اصلاحات ساختاری و حقوقی"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="fas fa-cogs me-2"></i> اصلاحات ساختاری و حقوقی
                                            </h5>
                                            <ul className="mb-0">
                                                <li>بررسی اساسنامه شرکت و ارائه پیشنهادهای اصلاحی</li>
                                                <li>انطباق اساسنامه با نسخه مورد تأیید سازمان بورس</li>
                                                <li>تحلیل ساختار سهامداری و پیشنهاد بهینه‌سازی‌های لازم</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       <div className="p-3">
                           <div className="card mb-4 rounded-4 dir-rtl">
                               <div className="row">
                                   <div className="col-md-4">
                                       <img
                                           src="https://picsum.photos/600/300"
                                           className="img-fluid rounded-4"
                                           alt="هماهنگی جلسات و پیگیری‌های اجرایی"
                                       />
                                   </div>
                                   <div className="col-md-8">
                                       <div className="card-body">
                                           <h5 className="card-title">
                                               <i className="fas fa-users-cog me-2"></i> هماهنگی جلسات و پیگیری‌های
                                               اجرایی
                                           </h5>
                                           <ul className="mb-0">
                                               <li>هماهنگی جلسات مشترک میان مدیران شرکت و نهادهای پذیرش</li>
                                               <li>همراهی در بازدیدهای کارشناسی از سوی بورس/فرابورس</li>
                                               <li>نظارت بر رعایت تمامی مقررات در طول فرآیند پذیرش</li>
                                           </ul>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                        <div className="p-3">
                            <div className="card mb-4 rounded-4 dir-rtl">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://picsum.photos/600/300"
                                            className="img-fluid rounded-4"
                                            alt="حضور در جلسات هیأت پذیرش"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="fas fa-handshake me-2"></i> حضور در جلسات هیأت پذیرش
                                            </h5>
                                            <ul className="mb-0">
                                                <li>ارائه گزارش‌ها و دفاع از پرونده شرکت در جلسات رسمی</li>
                                                <li>پیگیری رفع ابهامات و تکمیل اطلاعات مورد درخواست هیأت پذیرش</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3">
                            <div className="card mb-4 rounded-4 dir-rtl">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src="https://picsum.photos/600/300"
                                            className="img-fluid rounded-4"
                                            alt="تعامل با سرمایه‌گذاران و تعیین قیمت پایه"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="fas fa-piggy-bank me-2"></i> تعامل با سرمایه‌گذاران و
                                                تعیین قیمت پایه
                                            </h5>
                                            <ul className="mb-0">
                                                <li>هماهنگی بازدید سرمایه‌گذاران و تحلیلگران از شرکت</li>
                                                <li>حضور در جلسات مذاکره مربوط به تعیین قیمت پایه سهام</li>
                                                <li>ارائه پیشنهادهای کارشناسی برای تحلیل و تعیین قیمت مناسب</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>

        <section className="fadak-bg-navy p-5 text-center">
            <div className="container d-flex flex-column gap-5">
                <h4 className="text-white">همراهی تا تحقق پذیرش</h4>
                <p className="text-white">
                    کارگزاری فدک با رویکردی مبتنی بر دقت، شفافیت و مسئولیت‌پذیری، شرکت‌ها را از نخستین مرحله بررسی
                    تا تصویب نهایی در بورس یا فرابورس همراهی می‌کند. هدف ما، تسهیل مسیر ورود شرکت‌ها به بازار سرمایه
                    و فراهم‌سازی بسترهای لازم برای توسعه پایدار و جذب سرمایه‌گذاران است.
                </p>
                <a href="#" className="fadak-button">درخواست مشاوره تخصصی</a>
            </div>
        </section>

    </>
}