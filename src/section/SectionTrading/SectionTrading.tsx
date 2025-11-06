import Image from "next/image";

export default function SectionTrading() {

    return <>
        <section className="traning-plan section">
            <div className="container">
                <div className="row flex-row-reverse gy-5 gy-xl-0 justify-content-between align-items-lg-center"
                     data-wow-duration="2s" data-wow-delay="2s">
                    <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-6">
                        <div className="section__content">
                            <h3 className="section__content-title wow fadeInUp" data-wow-duration="0.8s">دریافت کد بورسی
                                و مشاوره سرمایه‌گذاری</h3>
                            <p className="section__content-text wow fadeInDown" data-wow-duration="0.8s">
                                شما می‌توانید به صورت کاملا رایگان و بدون نیاز به مراجعه حضوری کد بورسی خود را از
                                کارگزاری مفید دریافت کنید. همینطور در صورت نیاز می‌توانید با ثبت درخواست مشاوره رایگان،
                                از کارشناسان سرمایه‌گذاری مفید راهنمایی بگیرید.
                            </p>
                            <div className="d-flex flex-row-reverse justify-content-around">
                                <a href="" className="btn_theme btn_theme_active mt_40" data-wow-duration="0.8s">دریافت کد بورسی </a>
                                <a href="" className="btn_theme btn_theme_active mt_40" data-wow-duration="0.8s">مشاوره رایگان </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
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