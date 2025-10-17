import React from "react";
import "./SectionAbout2.css"

export default function SectionAbout2() {


    return <>
        <section id="about" className="about-section py-5">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="section-title">درباره کارگزاری ما</h2>
                    <p className="lead section-subtitle">ما با تکیه بر دانش و تجربه، همراه شما در مسیر سرمایه‌گذاری
                        هستیم.</p>
                </div>

                <div className="row align-items-center g-5">
                    <div className="col-md-5">
                        <img
                            src="/assets/images/background/309-600x450.jpg"
                            className="img-fluid rounded-4 shadow" alt="تصویر محیط کارگزاری"/>
                    </div>

                    <div className="col-md-7">
                        <h2 className="display-6 text-body-emphasis">همراه شما در مسیر سرمایه‌گذاری</h2>
                        <p className="lead mt-3" style={{textAlign: "justify"}}>
                            کارگزاری ما با تکیه بر سال‌ها تجربه و تیمی از متخصصان مجرب، مفتخر است که بستری امن، سریع و
                            هوشمند را
                            برای فعالیت شما در بازار سرمایه فراهم آورد. چشم‌انداز ما، تبدیل شدن به انتخاب اول
                            سرمایه‌گذاران
                            ایرانی است و ماموریت ما، توانمندسازی شما برای رسیدن به اهداف مالی‌تان از طریق ارائه ابزارها
                            و خدمات
                            نوآورانه است.
                        </p>
                        {/*<p>*/}
                        {/*    ما باور داریم که سرمایه‌گذاری هوشمند، کلید ساختن آینده‌ای روشن است. به همین دلیل، تعهد خود*/}
                        {/*    را به*/}
                        {/*    ارائه آموزش‌های جامع، تحلیل‌های دقیق و پشتیبانی بی‌وقفه گذاشته‌ایم تا تجربه‌ای متفاوت و*/}
                        {/*    مطمئن را*/}
                        {/*    برای شما خلق کنیم.*/}
                        {/*</p>*/}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a href="#" className="fadak-btn btn-outline-primary rounded-pill mt-3 d-flex align-items-center justify-content-center">
                                <i className="bi bi-people-fill ms-2"></i>
                                شروع سرمایه‌گذاری
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
}