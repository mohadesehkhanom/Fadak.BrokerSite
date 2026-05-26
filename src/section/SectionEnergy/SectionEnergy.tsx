import "./SectionEnergy.css"

export default function SectionEnergy() {
    return (
        < >

            <section className="section-energy">
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
                    <div className="row align-items-center gy-3 gy-lg-0">
                        <div className="col-12 col-lg-7 order-1 order-lg-0">
                            <h4 className="fw-bold mb-4">معرفی بورس انرژی</h4>
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
                            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2 mt-2">
                                <a href="/assets/doc/AcknowledgmentandRisk.pdf" className="custom-btn-navy text-center w-100">
                                    <span className="w-100 text-center">فرم اقرار و ریسک</span>
                                </a>
                                <a href="/assets/doc/IdentityVerification.pdf" className="custom-btn-navy text-center w-100">
                                    <span className="w-100 text-center"> فرم مشتریان حقوقی</span>
                                </a>
                                <a href="/assets/doc/Required_Documents_For_Legal_Entity_Trading_Code_Registration.pdf" className="custom-btn-navy text-center w-100">
                                    <span className="w-100 text-center">مدارک مشتریان حقوقی</span>
                                </a>
                            </div>

                        </div>
                        <div className="col-12 col-lg-5 text-center order-0">
                            <img src="https://placehold.co/600x400" className="metal-img rounded-4"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 fadak-bg-navy text-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <h4 className="mb-4 text-white border-bottom border-warning d-inline-block pb-2">مدارک و فرم‌های لازم</h4>

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

                        <div className="col-lg-4 offset-lg-1 col-xl-3 offset-lg-2 align-self-center ">
                            <div className="card bg-white border-0 shadow d-flex flex-column justify-content-around">
                                <a href="https://iee.ir"
                                   className="d-flex flex-row align-items-center justify-content-center">
                                    <i className="bi bi-link-45deg fs-4"></i>
                                    <span>شرکت بورس انرژی</span>
                                </a>
                                <a href="https://iee.ir/PhysicalMarket/TradeBoard/internationalMarket"
                                   className="d-flex flex-row align-items-center justify-content-center">
                                    <i className="bi bi-link-45deg fs-4"></i>
                                    <span>معاملات آنلاین بورس انرژی</span>
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
                            <h4 className="vision-title">دریافت کد بورس انرژی برای اشخاص حقوقی</h4>
                            <p className="lead mt-3 text-center">
                                اولین و مهمترین گام جهت فعالیت در بورس انرژی دریافت »کد معامالتی« است. متقاضیان باید از طریق کارگزاری فدک
                                و با تحویل مدارک و فرمهای مشخص شده، اقدام به دریافت کد معامالتی کنند.
                            </p>
                        </div>
                        <div className="row justify-content-center align-items-center text-center py-2 rounded-2 mt-5" style={{backgroundColor: "rgb(0 61 106)"}}>

                            <div className="col-md-4">
                                <div className="contact-item text-white">
                                    <a href="tel:02163479500" className="text-white text-decoration-none d-block gap-2 d-flex align-items-center justify-content-center">
                                        <span className="number-farsi dir-ltr">02163479500-(501)</span>
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

        </>
    );
}
