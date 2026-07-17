import './SectionServiceOfferings.css'

export default function SectionServiceOfferings (){

    return <>
        <section className="section-ServiceOfferings">
            <div className="container">
                <div className="text-center mb-5">
                    <h4 className="section-ServiceOfferings-title">خدمات ما</h4>
                    <p className="section-ServiceOfferings-subtitle text-center">مجموعه‌ای کامل از خدمات مالی و سرمایه‌گذاری</p>
                </div>
                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="/online-trading">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Online-Transactions cold-hover"></i>
                                </div>
                                <h4>معاملات آنلاین</h4>
                                <p>پلتفرمی سریع، امن و هوشمند برای انجام معاملات در بازار سرمایه با حداکثر کارایی.</p>
                            </a>

                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="/derivative">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Stock-Derivatives cold-hover"></i>
                                </div>
                                <h4>مشتقه</h4>
                                <p>راهکارهای هوشمند برای مدیریت ریسک و کسب بازدهی در بازار ابزارهای مشتقه.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="/kala">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Commodity-Energy-Exchange cold-hover"></i>
                                </div>
                                <h4>بورس کالا </h4>
                                <p>دسترسی به فرصت‌های واقعی سرمایه‌گذاری در بازارهای کالایی با تحلیل دقیق و مشاوره تخصصی.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="/admissions-counseling">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Admissions-Advisor cold-hover"></i>
                                </div>
                                <h4>مشاور پذیرش</h4>
                                <p>همراهی تخصصی در مسیر ورود شرکت‌ها به بازار سرمایه با رویکردی حرفه‌ای و مبتنی بر تجربه.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="/market-making">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Market-Making cold-hover"></i>
                                </div>
                                <h4>بازارگردانی</h4>
                                <p>پشتیبان نقدشوندگی و ثبات بازار با تیمی متخصص و تحلیل‌محور.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="/supply-consultant">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Offering-Advisor cold-hover"></i>
                                </div>
                                <h4>مشاور عرضه</h4>
                                <p>برنامه‌ریزی، مدیریت و اجرای فرآیند عرضه اولیه با هدف بیشترین شفافیت و موفقیت.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="#">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Portfolio-Management cold-hover"></i>
                                </div>
                                <h4>سبدگردانی (به زودی)</h4>
                                <p>مدیریت حرفه‌ای سبد سرمایه‌گذاری شما با تمرکز بر بازدهی پایدار و کنترل ریسک.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="#">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Crowdfunding cold-hover"></i>
                                </div>
                                <h4>تأمین مالی جمعی (به زودی)</h4>
                                <p>بستری نوآورانه برای مشارکت در پروژه‌های سرمایه‌گذاری با رویکرد شفاف و پایدار.</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="service-ServiceOfferings-card color-animate-border">
                            <a className="d-flex flex-column justify-content-end" href="#">
                                <div className="service-ServiceOfferings-icon">
                                    <i className="bi bi-Investment-Advisory cold-hover"></i>
                                </div>
                                <h4>مشاوره سرمایه‌گذاری (به زودی)</h4>
                                <p>تحلیل جامع، راهبردهای هوشمند و پیشنهادهای دقیق برای تصمیم‌گیری بهتر در بازار.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>


}