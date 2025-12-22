import React from "react";
import "./SectionAbout2.css"

export default function SectionAbout2() {


    return <>
        <section id="about" className="about-section p-5 fadak-bg-cream">
            <div className="container py-5">

                <div className="text-center mb-5">
                    {/*<h4 className="section-title">درباره کارگزاری ما</h4>*/}
                    {/*<p className="section-subtitle text-center">ما با تکیه بر دانش و تجربه، همراه شما در مسیر سرمایه‌گذاری*/}
                    {/*    هستیم.</p>*/}
                </div>

                <div className="row align-items-center g-5">
                    <div className="col-md-5">
                        <img
                            src="/assets/images/background/309-600x450.jpg"
                            className="img-fluid rounded-4 shadow" alt="تصویر محیط کارگزاری"/>
                    </div>

                    <div className="col-md-7">
                        <h4 className="text-body-emphasis">درباره کارگزاری ما</h4>
                        <p className="mt-3">
                            کارگزاری فدک، با نام سابق «راهنمای سرمایه‌گذاران»، که فعالیت خود را در سال ۱۳۷۱ آغاز کرده است، به‌عنوان یکی از زیرمجموعه‌های اصلی گروه سرمایه‌گذاری فدک، با اتکا به تجربه‌ای ارزشمند و کارنامه‌ای موفق در ارائه خدمات مالی و سرمایه‌گذاری، امروز در زمره پیشروترین کارگزاری‌های بازار سرمایه کشور قرار دارد. کارگزاری فدک با تمرکز بر ارائه خدمات جامع در حوزه معاملات اوراق بهادار، بورس کالا و انرژی، سرمایه‌گذاری و مشاوره‌های تخصصی، بستری امن، شفاف و قابل‌اعتماد برای مشتریان خود فراهم کرده است. عمده فعالیت‌های این کارگزاری در همین راستا تعریف می‌شود.
                        </p>
                        <br/>
                        <p>
                            کارگزاری فدک با اتکا به منابع مالی قوی و نگرشی پیشرو، همواره در مسیر ارائه راه‌حل‌های مالی پایدار برای سرمایه‌گذاران حقیقی و حقوقی گام برمی‌دارد.
                        </p>
                        {/*<p>*/}
                        {/*    ما باور داریم که سرمایه‌گذاری هوشمند، کلید ساختن آینده‌ای روشن است. به همین دلیل، تعهد خود*/}
                        {/*    را به*/}
                        {/*    ارائه آموزش‌های جامع، تحلیل‌های دقیق و پشتیبانی بی‌وقفه گذاشته‌ایم تا تجربه‌ای متفاوت و*/}
                        {/*    مطمئن را*/}
                        {/*    برای شما خلق کنیم.*/}
                        {/*</p>*/}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                            <a href="https://cfi.seo.ir/fa/institute/73" target="_blank" className="btn fadak-button py-3">
                                <i className="bi bi-people-fill mx-1"></i>
                                مجوزهای کارگزاری
                            </a>
                            <a href="tel:02163479000" className="btn fadak-button py-3">
                                <i className="bi bi-telephone-fill mx-1"></i>
                                اطلاعات تماس
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className="vision-section p-5 ">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h4 className="vision-title text-center">ماموریت ما</h4>
                        <p className="lead mt-3 text-center">
                            ما با بهره‌گیری از دانش تخصصی و فناوری‌های نوین، بستری امن، شفاف و کارآمد برای تسهیل معاملات و ارائه خدمات نوین سرمایه‌گذاری فراهم می‌کنیم. هدف ما ارائه خدمات ویژه به منظور  ارتقای تجربه مشتریان   VIP، توسعه پایدار اکوسیستم مالی و پیشبرد تحول دیجیتال در صنعت کارگزاری است.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </>
}