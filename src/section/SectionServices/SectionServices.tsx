import "./SectionServices.css"

export default function SectionServices() {
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
                        <div className="col-lg-6 text-center order-1">
                            <img
                                src="https://picsum.photos/600/400"
                                className="metal-img rounded-4"/>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 mt-5 mt-sm-5 mt-lg-0 order-2">
                            <h4 className="fw-bold mb-4">اعتبار معاملاتی کارگزاری فدک</h4>
                            <p className=" lh-lg mb-4 text-justify">
                                اعتبار معاملاتی مبلغی است که کارگزاری فدک بر اساس ضوابط اعتباری در اختیار مشتریان واجد شرایط قرار می‌دهد تا با افزایش قدرت خرید، از فرصت‌های بازار سرمایه بهتر استفاده کنند. این خدمت امکان انجام معاملات بدون نیاز به تأمین کامل وجه نقد را فراهم کرده و به مدیریت بهینه نقدینگی و پرتفوی سرمایه‌گذاری کمک می‌کند.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">پول شما برای سرمایه‌گذاری کم نیست</h4>
                            <p className="lead mt-3 text-center">
                                اعتبار معاملاتی، سرمایه‌ای موقت است که قدرت خرید شما را افزایش می‌دهد و امکان معامله با مبلغی فراتر از سرمایه شخصی‌تان را فراهم می‌کند. این اعتبار به‌صورت مستقیم به حساب معاملاتی شما واریز می‌شود و نقش یک ابزار مالی مؤثر در افزایش توان معامله‌گری شما را دارد
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h4 className="fw-bold">شرایط و نحوه دریافت اعتبار</h4>
                        {/*<p className="mt-3">یه متنی رو برای این فضا بدین</p>*/}
                    </div>


                    <div className="row ">

                        <div className="col-md-4">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-file-earmark-text fs-1"></i>
                                        <h5 className="fw-bold">امضا قرارداد اعتباری</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        به‌منظور استفاده از خدمات اعتباری، مشتری ملزم به امضای قرارداد به صورت آنلاین و یا حضوری  با کارگزاری فدک میباشد.
                                    </p>


                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 my-4 my-sm-0">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-arrow-repeat fs-1"></i>
                                        <h5 className="fw-bold"> گردش معاملات در ماه</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        سابقه معاملاتی و حجم گردش مالی مشتری در بازه‌های زمانی مشخص (ماهانه) مبنای محاسبه سقف اعتبار قرار می‌گیرد.
                                    </p>


                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 fadak-bg-cream rounded-4">
                                <div className="card-body text-center d-flex flex-column justify-content-around">

                                    <div className="mb-3 d-flex flex-column gap-3">
                                        <i className="bi bi-shield-check fs-1"></i>
                                        <h5 className="fw-bold">ارزش تضمین کافی پرتفو</h5>
                                    </div>

                                    <p className="fadak-color-navy mt-3">
                                        اعتبار به‌صورت درصدی از ارزش روز پرتفوی مشتری تعیین می‌شود. ترکیب دارایی‌ها، میزان نقدشوندگی و ریسک پرتفوی در تعیین این درصد مؤثر است.
                                    </p>


                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>


            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">جهت دریافت اطلاعات بیشتر با ما در ارتباط باشید.</h4>
                            {/*<p className="lead mt-3">*/}
                            {/*    اولین و مهمترین گام جهت فعالیت در بورس انرژی دریافت »کد معامالتی« است. متقاضیان باید از طریق کارگزاری فدک*/}
                            {/*    و با تحویل مدارک و فرمهای مشخص شده، اقدام به دریافت کد معامالتی کنند.*/}
                            {/*</p>*/}
                        </div>
                        <div className="row justify-content-center align-items-center text-center py-2 rounded-2 mt-5" style={{backgroundColor: "rgb(0 61 106)"}}>

                            <div className="col-md-4">
                                <div className="contact-item text-white">
                                    <a href="tel:02163479302" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                        <span className="number-farsi">02163479302</span>
                                        <i className="bi bi-telephone-fill"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="contact-item text-white">
                                    <a href="mailto:Reception@fadakbrokerage.ir" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                        <span>Reception@fadakbrokerage.ir</span>
                                        <i className="bi bi-envelope-fill"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}
