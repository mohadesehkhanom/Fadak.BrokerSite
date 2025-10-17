'use client'

export default function SectionTrading (){

    return <>
        <section className="traning-plan section">
            <div className="container">
                <div className="row flex-row-reverse gy-5 gy-xl-0 justify-content-between align-items-lg-center" data-wow-duration="2s" data-wow-delay="2s">
                    <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-6">
                        <div className="section__content">
                            <span className="section__content-sub-title headingFour wow fadeInDown mb-lg-4 mb-3" data-wow-duration="0.8s">
                                <img src="../assets/images/element/section-badge1.png" alt="vector"/> خدمات ویژه ما
                            </span>
                            <h3 className="section__content-title wow fadeInUp" data-wow-duration="0.8s">با فدک از خدمات بازار سرمایه بهره مند شوید.</h3>
                            <p className="section__content-text wow fadeInDown" data-wow-duration="0.8s">
                                ما سعی خود رو داریم تا در این راه حامی و مشاور شما باشیم تا بهترین نتیجه را باهم بدست بیاریم.</p>
                            <ul className="section__content-list wow fadeInUp" data-wow-duration="0.8s">
                                <li className="headingFive fw-500">آخرین تحلیل های روز بازار بورس</li>
                                <li className="headingFive fw-500">دوره های آموزشی رایگان</li>
                                <li className="headingFive fw-500">سبدهای پیشنهادی</li>
                                <li className="headingFive fw-500">مشاوره و پیشنهادهای اختصاصی</li>
                            </ul>
                            <a href="../video-tutorial.html" className="btn_theme btn_theme_active mt_40 wow fadeInDown" data-wow-duration="0.8s">ورود </a>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                        <div className="traning-plan-thumb w-100">
                            <img src="../assets/images/app/apps-thumb2.png" alt="img" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}