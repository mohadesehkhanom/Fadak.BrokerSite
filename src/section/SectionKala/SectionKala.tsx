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
                        <div className="col-lg-5 text-center">
                            <img
                                src="/assets/images/slider/kala_no_text_600x400.webp"
                                className="metal-img rounded-4"/>
                        </div>
                        <div className="col-lg-7 mb-4 mb-lg-0 mt-5 mt-lg-0">
                            <h4 className="fw-bold mb-4">معرفی بورس کالا</h4>
                            <p className=" lh-lg mb-4 text-justify">
                                شرکت بورس کالای ایران در آذر ۱۳۸۵ با ادغام بورس فلزات و بورس کالای کشاورزی تشکیل شد و از
                                مهر ۱۳۸۶ کار خود را زیر نظر سازمان بورس و اوراق بهادار آغاز کرد. بورس كالا، بازار منسجمی
                                است كه تعداد زیادی از عرضه‌كنندگان، كالای خود را به خریداران عرضه می‌کنند. در این بورس،
                                کالاها در چند گروه نظیر محصولات فولادی، کشاورزی، پتروشیمی و فرآورده‌های نفتی دادوستد
                                می‌شوند.
                                <br/><br/>
                                کارگزاری فدک با نام پیشین «کارگزاری راهنمای سرمایه‌گذاران» به عنوان یکی از زیرمجموعه‌های
                                اصلی گروه سرمایه‌گذاری ثروت فدک (قطارهای فدک)، در بخش کالا ، از تیمی با سابقه‌ای
                                نزدیک به دو دهه فعالیت بهره می‌برد؛ تیمی که با تکیه بر دانش و تجربه ارزشمند خود و با
                                استفاده از زیرساخت‌های نوین و سیستم‌های معاملاتی پیشرفته، توانسته جایگاهی متمایز در میان
                                کارگزاران بورس کالا به دست آورد.
                            </p>
                            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2">

                                    <a href="/assets/doc/kala_haqiqi.pdf" className="custom-btn-navy text-center w-100 ">
                                        <span className="w-100 text-center">فرم مشتریان حقیقی</span>
                                    </a>
                                    <a href="/assets/doc/BusinessClients.pdf" className="custom-btn-navy text-center w-100">
                                        <span className="w-100 text-center">فرم مشتریان حقوقی</span>
                                    </a>
                                    <a href="/assets/doc/Required_Documents_For_Legal_Entity_Trading_Code_Registration.pdf" className="custom-btn-navy text-center w-100 ">
                                        <span className="w-100 text-center">مدارک مشتریان حقوقی</span>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">آمار و عملکرد کارگزاری فدک</h4>
                            <p className="lead mt-3 text-center">
                                ما در کارگزاری فدک با تکیه بر دانش متخصصان و تجربه چندین ساله، مسیری امن و شفاف را برای
                                معاملات کلیه کالاها، فرآورده‌های نفتی شما در بازار سرمایه ایران فراهم کرده‌ایم.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="fw-bold">خدمات کارگزاری فدک در بورس کالا</h4>
                        <p className="mt-3 text-center">ارائه خدمات جامع برای ورود و فعالیت موفق شما در بازارهای کالایی</p>
                    </div>


                    <div className="row g-3 gy-lg-0 gx-lg-3">

                        <div className="col-12 col-lg-3">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-person-badge fs-1"></i>
                                        <h5 className="fw-bold">دریافت کد بورسی</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        ثبت نام و احراز هویت الکترونیکی (سجام و ایبیگو)، افتتاح حساب وکالتی و تکمیل
                                        فرم‌های
                                        کدگیری برای مشتریان حقیقی و حقوقی.
                                    </p>

                                    <a href="https://fadak.ebgo.ir/Login" target="_blank" className="d-block mt-5 fadak-color-navy fadak-btn-outline">اخذ کد بورس کالا</a>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 ">
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

                                    <div className="d-flex flex-column flex-md-row justify-content-between gap-2 mt-auto">
                                        <a href="https://ime.co.ir/Compliance_Documents_physical_market.html" className=" w-100 text-center fadak-color-navy fadak-btn-outline">بازار فیزیکی</a>
                                        <a href="https://ime.co.ir/Compliance_Documents_subsidiary_market.html" className=" w-100 text-center fadak-color-navy fadak-btn-outline">بازار فرعی</a>
                                        <a href="https://ime.co.ir/Compliance_Documents_Differential_market.html" className=" w-100 text-center fadak-color-navy fadak-btn-outline">بازار مشتقه</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3">
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

                                    <a   href="https://t.me/KalaPlusMarket"
                                         className="d-block mt-5 fadak-color-navy fadak-btn-outline"
                                         target="_blank"
                                         rel="noopener noreferrer">
                                        لینک کانال تلگرامی
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>



            <section className="py-5 fadak-bg-navy text-white">
                <div className="container py-5">
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

                        <div className="col-lg-4 offset-lg-1 col-xl-3 offset-lg-2 align-self-center">
                            <div className="card bg-white border-0 shadow d-flex flex-column justify-content-end gap-0">
                                <a href="https://fadak.ebgo.ir/Login" className="d-flex flex-row align-items-center justify-content-center">
                                    <i className="bi bi-link-45deg fs-4"></i>
                                    <span>ایبیگو</span>
                                </a>
                                <hr/>
                                <a href="https://tts.ime.co.ir/" className="d-flex flex-row align-items-center justify-content-center">
                                    <i className="bi bi-link-45deg fs-4"></i>
                                    <span>معاملات آنلاین بورس کالا</span>
                                </a>
                                <hr/>
                                <a href="https://www.ime.co.ir" className="d-flex flex-row align-items-center justify-content-center">
                                    <i className="bi bi-link-45deg fs-4"></i>
                                    <span>شرکت بورس کالا</span>
                                </a>

                            </div>
                        </div>




                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">دریافت کد بورس کالا برای اشخاص حقوقی</h4>
                            <p className="lead mt-3 text-center">
                                اولین و مهمترین گام جهت فعالیت در بورس کالا دریافت «کد معامالتی» است. متقاضیان باید از
                                طریق کارگزاری فدک
                                و با تحویل مدارک و فرمهای مشخص شده، اقدام به دریافت کد معامالتی کنند.
                            </p>
                        </div>


                        <div className="container mt-5" dir="rtl">

                            <div className="card border-0 shadow-sm rounded-4 p-4">
                                <div className="row align-items-center">

                                    <div className="col-md-6 d-flex align-items-center">
                                        <div>
                                            <h5 className="fw-bold mb-1 fadak-color-navy">برای دریافت مشاوره رایگان ، با کارشناسان فدک در تماس باشید</h5>
                                            <hr/>
                                            <a href="mailto:Commodity@fadakbrokerage.ir"
                                               className="fadak-color-navy text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                                <span>Commodity@fadakbrokerage.ir</span>
                                                <i className="bi bi-envelope-fill"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 offset-lg-3 col-md-4 offset-md-2 text-start mt-sm-0 mt-4">
                                        <div className="contact-item border border-2 p-3 border-dark rounded-2">

                                            <a href="tel:02163479500"
                                               className="text-black text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                                <span className="number-farsi dir-ltr">02163479500-(501)</span>
                                                <i className="bi bi-telephone-fill"></i>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>

        </>
    );
}
