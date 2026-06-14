import "./SectionSupplyConsultant.css"
import React from "react";
import Image from "next/image";

export default function SectionSupplyConsultant() {
    return (
        < >
            <div className="content-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="image-container">
                                <Image
                                    src="/assets/images/slider/supply-consultant_600x400.webp"
                                    width="600" height="400"
                                    alt="مشاوره مالی و سرمایه‌گذاری"/>
                            </div>
                        </div>
                        <div className="col-lg-7 mb-4 mb-lg-0 gy-3">
                            <h4>همراه مطمئن شما در مسیر تأمین مالی</h4>
                            <p className="mt-3">
                                کارگزاری فدک با اتکا به تیمی متخصص و باتجربه، زنجیره کاملی از خدمات مشاوره‌ای در حوزه
                                عرضه اوراق بهادار را ارائه می‌کند و در تمامی مراحل ورود شرکت‌ها به بازار سرمایه، همراه
                                مطمئن متقاضیان خواهد بود. هدف ما تسهیل فرآیند انتشار اوراق بهادار، افزایش شفافیت، و
                                انتخاب مناسب‌ترین مسیر تأمین مالی برای شرکت‌هاست.
                            </p>


                            <div className="container mt-5 px-0" dir="rtl">

                                <div className="card border-0 shadow-sm rounded-4 p-4">
                                    <div className="row align-items-center">

                                        <div className="col-12 col-md-6 d-flex align-items-center">
                                            <div>
                                                <a  href="mailto://Consulting@fadakbrokerage.ir"
                                                    className="fadak-color-navy text-decoration-none d-block d-flex align-items-center justify-content-center">
                                                    <span dir="ltr">Consulting@fadakbrokerage.ir</span>
                                                    <i className="bi bi-envelope-fill"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 text-start mt-sm-0 mt-4">
                                            <div className="contact-item border border-2 p-3 border-dark rounded-2">

                                                <a href="tel:02163479410"
                                                   className="text-black text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                                    <span className="number-farsi dir-ltr">02163479410</span>
                                                    <i className="bi bi-telephone-fill"></i>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>

                    <div className="services-list d-flex flex-column gap-5">
                        <h4>مهم‌ترین خدمات مشاوره عرضه کارگزاری فدک</h4>
                        <ul className="w-100">
                            <li><i className="fas fa-check-circle"></i> بررسی طرح و برنامه تأمین مالی متقاضی و ارائه
                                مشاوره در خصوص مناسب‌ترین شیوه تأمین مالی
                            </li>
                            <li><i className="fas fa-check-circle"></i> ارائه مشاوره تخصصی در حوزه قوانین، مقررات و
                                تکالیف قانونی مرتبط با عرضه اوراق بهادار
                            </li>
                            <li><i className="fas fa-check-circle"></i> تهیه گزارشات و مستندات مورد نیاز برای فرآیند
                                عرضه
                            </li>
                            <li><i className="fas fa-check-circle"></i> بررسی کامل مدارک و گزارش‌ها و در صورت لزوم اخذ
                                نظر کارشناسان یا نهادهای ذی‌صلاح جهت تکمیل و تأیید آنها
                            </li>
                            <li><i className="fas fa-check-circle"></i> تهیه بیانیه ثبت یا درخواست معافیت از ثبت اوراق
                                بهادار
                            </li>
                            <li><i className="fas fa-check-circle"></i> نمایندگی قانونی متقاضی نزد مراجع ذی‌صلاح جهت
                                پیگیری تمامی مراحل قانونی انتشار اوراق بهادار
                            </li>
                            <li><i className="fas fa-check-circle"></i> معرفی کارشناسان تخصصی جهت انجام اقدامات لازم
                                مطابق ضوابط دستورالعمل‌های مرتبط
                            </li>
                            <li><i className="fas fa-check-circle"></i> برگزاری جلسات توجیهی و آموزشی برای آشنایی متقاضی
                                با الزامات قانونی، فرآیند انتشار و عرضه اوراق بهادار
                            </li>
                            <li><i className="fas fa-check-circle"></i> راهنمایی حرفه‌ای جهت انتخاب بهترین شیوه تأمین
                                مالی براساس شرایط و اهداف شرکت
                            </li>
                            <li><i className="fas fa-check-circle"></i> تعیین و اعلام مدارک و مستندات مورد نیاز برای
                                انجام دقیق و کامل موضوع قرارداد
                            </li>
                            <li><i className="fas fa-check-circle"></i> بکارگیری حداکثر توان کارشناسی برای انجام تعهدات
                                در بالاترین سطح کیفیت و در زمان مقرر
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
