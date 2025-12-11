import "./SectionKala.css"

export default function SectionKala() {
    return (
        < >
            <section className="section-kala">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-end offset-md-6 ">
                            <h4 className=" fw-bold mb-3 text-dark">بورس کالا و انرژی</h4>
                            <p className="lead text-dark">ارائه تمامی خدمات پذیرش، مشاوره و معامله</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="commodity-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center">
                            <img
                                src="https://picsum.photos/600/400"
                                className="metal-img rounded"/>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h4 className="fw-bold mb-4">معرفی بورس کالا</h4>
                            <p className=" lh-lg mb-4 text-justify">
                                شرکت بورس کالای ایران در آذر ۱۳۸۵ با ادغام بورس فلزات و بورس کالای کشاورزی تشکیل شد و از
                                مهر ۱۳۸۶ کار خود را زیر نظر سازمان بورس و اوراق بهادار آغاز کرد. بورس كالا، بازار منسجمی
                                است كه تعداد زیادی از عرضه‌كنندگان، كالای خود را به خریداران عرضه می‌کنند. در این بورس،
                                کالاها در چند گروه نظیر محصولات فولادی، کشاورزی، پتروشیمی و فرآورده‌های نفتی دادوستد
                                می‌شوند.
                                <br/><br/>
                                کارگزاری فدک با نام پیشین «کارگزاری راهنمای سرمایه‌گذاران» به عنوان یکی از زیرمجموعه‌های
                                اصلی گروه سرمایه‌گذاری ثروت فدک (قطارهای فدک)، در بخش کالا و انرژی، از تیمی با سابقه‌ای
                                نزدیک به دو دهه فعالیت بهره می‌برد؛ تیمی که با تکیه بر دانش و تجربه ارزشمند خود و با
                                استفاده از زیرساخت‌های نوین و سیستم‌های معاملاتی پیشرفته، توانسته جایگاهی متمایز در میان
                                کارگزاران بورس کالا به دست آورد.
                            </p>
                            <a href="#" className="custom-btn-green float-end">
                                <i className="bi bi-file-earmark-text-fill ms-2"></i>فرم‌های کدگیری و پذیرش
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">آمار و عملکرد کارگزاری فدک</h4>
                            <p className="lead  mt-3">
                                ما در کارگزاری فدک با تکیه بر دانش متخصصان و تجربه چندین ساله، مسیری امن و شفاف را برای
                                معاملات کلیه کالاها، فرآورده‌های نفتی و انرژی شما در بازار سرمایه ایران فراهم کرده‌ایم.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="fw-bold">خدمات کارگزاری فدک در بورس کالا</h4>
                        <p className="mt-3">ارائه خدمات جامع برای ورود و فعالیت موفق شما در بازارهای کالایی</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="service-card bg-white">
                                <div className="icon-box">
                                    <i className="bi bi-person-badge"></i>
                                </div>
                                <h5 className="fw-bold">دریافت کد بورس</h5>
                                <p className="text-secondary mt-3">
                                    ثبت نام و احراز هویت الکترونیکی (سجام و ایبیگو)، افتتاح حساب وکالتی و تکمیل فرم‌های
                                    کدگیری برای مشتریان حقیقی و حقوقی.
                                    <a href="#" className="text-success d-block mt-2 small"> (لینک به فرم‌ها)</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-card bg-white">
                                <div className="icon-box">
                                    <i className="bi bi-building-check"></i>
                                </div>
                                <h5 className="fw-bold">پذیرش کالا در بورس</h5>
                                <p className="text-secondary mt-3">
                                    احراز شرایط عرضه، تکمیل فرم‌های پذیرش در بازار فیزیکی، فرعی و اموال غیرمنقول. مشاوره
                                    تخصصی برای عرضه عادلانه کالا.
                                    <a href="#" className="text-success d-block mt-2 small"> (لینک به فرم‌ها)</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-card bg-white">
                                <div className="icon-box">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>
                                <h5 className="fw-bold">معاملات و گزارشات تحلیلی</h5>
                                <p className="text-secondary mt-3">
                                    معامله کلیه کالاهای صنعتی، معدنی، نفت، پتروشیمی و سیمان به همراه ارائه آمار و
                                    گزارشات روزانه و هفتگی بازار.
                                    <a href="#" className="text-success d-block mt-2 small"> (نمای بازار و کانال
                                        تحلیلی)</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
