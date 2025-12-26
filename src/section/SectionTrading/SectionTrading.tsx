import Image from "next/image";

export default function SectionTrading() {

    return <>
        <section className="traning-plan section">
            <div className="container">
                <div className="row flex-row-reverse gy-5 gy-xl-0 justify-content-between align-items-lg-center"
                     data-wow-duration="2s" data-wow-delay="2s">
                    <div className="order-2 order-sm-0 order-lg-1 col-xxl-6 col-xl-7 col-lg-7 col-md-6">
                        <div className="section__content">
                            <h3 className="section__content-title wow fadeInUp" data-wow-duration="0.8s">دریافت کد بورسی
                                و مشاوره سرمایه‌گذاری</h3>
                            <p style={{textAlign:'justify'}} className="section__content-text wow fadeInDown" data-wow-duration="0.8s">
                                شما می‌توانید به صورت کاملا رایگان و بدون نیاز به مراجعه حضوری کد بورسی خود را از
                                کارگزاری فدک دریافت کنید. همینطور در صورت نیاز می‌توانید با ثبت درخواست مشاوره رایگان،
                                از کارشناسان سرمایه‌گذاری مفید راهنمایی بگیرید.
                            </p>
                            <div className="row justify-content-center align-items-center text-center my-3 py-2 rounded-2" style={{backgroundColor: "#003d6a"}}>

                                <div className="col-md-6">
                                    <div className="contact-item text-white">
                                        <a href="tel:02163479300" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                            <span>02163479300-302</span>
                                            <i className="bi bi-telephone-fill"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="contact-item text-white">
                                        <a href="mailto:Commodity@fadakbrokerage.ir" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                            <span>Futures@fadakbrokerage.ir</span>
                                            <i className="bi bi-envelope-fill"></i>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            {/*<div className="d-flex flex-row-reverse justify-content-around mt-3">*/}
                            {/*    <a href="https://fadakregister.irbrokersite.ir/" className="fadak-button" data-wow-duration="0.8s">دریافت کد بورسی </a>*/}
                            {/*    /!*<a href="" className="fadak-button" data-wow-duration="0.8s">مشاوره رایگان </a>*!/*/}
                            {/*</div>*/}


                        </div>
                    </div>
                    <div className="order-1 order-sm-0 order-lg-2 col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                        <div className="traning-plan-thumb w-100">
                            <Image
                                src="/assets/images/app/apps-thumb2.png"
                                alt=""
                                width={600}
                                height={500}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}