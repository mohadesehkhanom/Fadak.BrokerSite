import "./SectionKala.css"

export default function SectionKala() {
    return (
        < >
            <section className="section-kala">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-end offset-md-6 ">
                            {/*<h4 className=" fw-bold mb-3 text-dark">بورس کالا و انرژی</h4>*/}
                            {/*<p className="lead text-dark">ارائه تمامی خدمات پذیرش، مشاوره و معامله</p>*/}
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
                                className="metal-img rounded-4"/>
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
                            <a href="#" className="custom-btn-navy float-end">
                                <i className="bi bi-file-earmark-text-fill ms-2"></i> کدگیری و پذیرش
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
                            <p className="lead mt-3">
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


                    <div className="row ">

                        <div className="col-md-4">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-person-badge fs-1"></i>
                                        <h5 className="fw-bold">دریافت کد بورس</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        ثبت نام و احراز هویت الکترونیکی (سجام و ایبیگو)، افتتاح حساب وکالتی و تکمیل
                                        فرم‌های
                                        کدگیری برای مشتریان حقیقی و حقوقی.
                                    </p>

                                    <a href="/assets/doc/Required_Documents_For_Legal_Entity_Trading_Code_Registration.pdf" target="_blank" className="d-block mt-5 fadak-color-navy fadak-btn-outline">مدارک مورد نیاز</a>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-building-check fs-1"></i>
                                        <h5 className="fw-bold">پذیرش کالا در بورس</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        احراز شرایط عرضه، تکمیل فرم‌های پذیرش در بازار فیزیکی، فرعی و اموال غیرمنقول.
                                        مشاوره تخصصی برای عرضه عادلانه کالا.
                                    </p>

                                    <a href="#" className="d-block mt-5 fadak-color-navy fadak-btn-outline">(لینک به فرم‌ها)</a>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-building-check fs-1"></i>
                                        <h5 className="fw-bold">معاملات و گزارشات تحلیلی</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        معامله کلیه کالاهای صنعتی، معدنی، نفت، پتروشیمی و سیمان به همراه ارائه آمار و
                                        گزارشات روزانه و هفتگی بازار.
                                    </p>

                                    <a href="#" className="d-block mt-5 fadak-color-navy fadak-btn-outline">(نمای بازار و کانال تحلیلی)</a>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            <section className="commodity-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h4 className="fw-bold mb-4">درباره بورس انرژی</h4>
                            <p className=" lh-lg mb-4 text-justify">
                                بورس انرژی یکی از بورس‌های کالایی است که به عنوان چهارمین بورس ایران، از سال ۱۳۹۱ فعالیت
                                خود را شروع کرده است.
                                این بازار در راستای خرید و فروش منابع انرژی، تامین مالی برای تولیدکنندگان، توزیع‌کنندگان
                                و مصرف‌کنندگان،
                                با هدف کشف قیمت روزانه حامل‌های انرژی و ایجاد شفافیت بیشتر در معاملات این گروه از
                                محصولات شکل گرفته است.
                            </p>
                            <div className="p-4 rounded-3 fadak-bg-cream shadow-sm d-flex flex-column gap-4 justify-content-center align-items-center">
                                <h5 className="fadak-text-navy">شفافیت و پویایی</h5>
                                <p className="mb-0">ایجاد بستری امن برای معاملات نفت، گاز و برق</p>
                            </div>
                            <a href="#" className="custom-btn-navy mt-4 text-center float-end">
                                <i className="bi bi-file-earmark-text-fill"></i> کدگیری و پذیرش
                            </a>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="https://picsum.photos/600/400" className="metal-img rounded-4"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">دریافت کد بورس انرژی برای اشخاص حقوقی</h4>
                            <p className="lead mt-3">
                                اولین و مهمترین گام جهت فعالیت در بورس انرژی دریافت »کد معامالتی« است. متقاضیان باید از طریق کارگزاری فدک
                                و با تحویل مدارک و فرمهای مشخص شده، اقدام به دریافت کد معامالتی کنند.
                            </p>
                        </div>
                        <div className="row justify-content-center align-items-center text-center py-2 rounded-2 mt-5" style={{backgroundColor: "rgb(0 61 106)"}}>

                            <div className="col-md-4">
                                <div className="contact-item text-white">
                                    <a href="tel:02163479500" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                        <span>02163479500-501</span>
                                        <i className="bi bi-telephone-fill"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-item text-white">
                                    <a href="mailto:Commodity@fadakbrokerage.ir" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                        <span>Commodity@fadakbrokerage.ir</span>
                                        <i className="bi bi-envelope-fill"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 fadak-bg-navy text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h4 className="mb-4 text-white border-bottom border-warning d-inline-block pb-2">مدارک و فرم‌های لازم</h4>
                            {/*<p className="mb-4 text-white">جهت تسریع در روند دریافت کد، لطفا مدارک زیر را آماده نمایید:</p>*/}

                            <ul className="list-unstyled doc-list text-white">
                                <li>تکمیل فرم احراز هویت مشتریان</li>
                                <li>تکمیل فرم درخواست كد مشتریان</li>
                                <li>تکمیل و امضای فرم بیانیه ریسک (مخصوص مشتریان بازار مشتقه برق)</li>
                                <li>تصویر اساسنامه و ارائه شناسه ملی شرکت، پروانه بهره‌برداری، شرکت نامه</li>
                                <li>کپی روزنامه رسمی آخرین تغییرات شرکت</li>
                                <li>كپی شناسنامه و کارت ملی اعضای هیئت مدیره و مدیرعامل شركت (صاحبان امضای مجاز)</li>
                                <li>ارائه مدارک مربوط به آخرین تغییرات مدیران و صاحبان امضا</li>
                                <li>اعلام شماره حساب در قالب یک نامه جهت واریز وجه</li>
                            </ul>
                        </div>

                        <div className="col-lg-5 mt-5 mt-lg-0">
                            <div className="card h-100 bg-white border-0 shadow">
                                <div className="card-body p-4 text-center d-flex flex-column justify-content-center">
                                    <h4 className="fadak-text-navy mb-4">دانلود فرم‌ها</h4>

                                    <div className="d-grid gap-3">
                                        <a href="/assets/doc/IdentityVerification.pdf" className="btn fadak-button py-3">
                                             دانلود فرم احراز هویت
                                        </a>
                                        <a href="#" className="btn custom-btn-navy py-3">
                                             دانلود فرم درخواست کد
                                        </a>
                                    </div>

                                    {/*<div className="mt-4 pt-4 border-top border-secondary">*/}
                                    {/*    <p className="small text-muted mb-2">نیاز به راهنمایی دارید؟</p>*/}
                                    {/*    <a href="https://wa.me/989120000000" className="btn btn-outline-success w-100">*/}
                                    {/*        <i className="fab fa-whatsapp me-2"></i> ارسال مدارک در واتساپ*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
