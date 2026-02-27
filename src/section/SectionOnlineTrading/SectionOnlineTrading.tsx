import "./SectionOnlineTrading.css"

export default function SectionOnlineTrading() {
    return (
        < >
            <section className="section-online-trading text-center">
                <div className="container h-100 d-flex flex-column">
                    <h4 className="mb-4 fw-bold mt-auto">سامانه های معاملات آنلاین</h4>
                    <div className="row justify-content-center g-2 g-md-3">

                        <div className="col-6 col-sm-4 col-lg-3">
                            <a href="https://rahnama.exirbroker.com/login" className="fadak-btn-outline w-100 py-2"
                               target="_blank">معاملات آنلاین اکسیر</a>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <a href="https://fadak.tsetab.ir" className="fadak-btn-outline w-100 py-2"
                               target="_blank">معاملات آنلاین امکس</a>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <a href="https://rahnama.irbroker.com" className="fadak-btn-outline w-100 py-2"
                               target="_blank">معاملات آنلاین کلاسیک 1</a>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <a href="https://rahnama.irbroker.com" className="fadak-btn-outline w-100 py-2"
                               target="_blank">معاملات آنلاین کلاسیک 2</a>
                        </div>

                    </div>
                </div>
            </section>



            <div className="container main-content-wrapper mb-5">


                <section className="commodity-section my-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-center">
                                <img
                                    src="https://picsum.photos/500/300"
                                    className="metal-img rounded-4"/>
                            </div>
                            <div className="col-lg-6 mb-4 mb-lg-0 mt-5 mt-md-5 mt-lg-0">
                                <h4 className="section-title h3 w-100 text-center">معاملات آنلاین چیست؟</h4>
                                <p className="text-justify ">
                                    معاملات آنلاین یکی از <span
                                    className=" gold-text">متداول‌ترین و سریع‌ترین روش‌های</span> خرید و فروش سهام و سایر
                                    ابزارهای مالی در بازار سرمایه است. در این روش، سرمایه‌گذاران می‌توانند بدون نیاز به مراجعه حضوری
                                    و تنها از طریق سامانه آنلاین کارگزاری، سفارش‌های خود را ثبت و مدیریت کنند.
                                </p>
                                <p className="text-justify mt-2">
                                    برای بهره‌مندی از امکان معاملات آنلاین، سرمایه‌گذار ابتدا باید در یک کارگزاری معتبر ثبت‌نام کرده
                                    و دسترسی به سامانه معاملات برخط را دریافت کند. کارگزاری با فراهم‌سازی زیرساخت‌های امن و پیشرفته،
                                    ارتباط مستقیم میان سرمایه‌گذار و هسته معاملات را برقرار می‌سازد.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="services-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h4 className="fw-bold">همراه آنلاین</h4>
                            <p className="text-center mt-4">همراه آنلاین، بستر دسترسی کاربران به سامانه معاملات برخط از طریق تلفن همراه است که با هدف سهولت، سرعت و دسترسی پایدار طراحی شده است. این خدمت در دو بخش مجزا ارائه می‌شود</p>
                        </div>


                        <div className="row g-2">

                            <div className="col-12 col-lg-6">
                                <div className="card h-100 fadak-bg-cream rounded-4">
                                    <div className="card-body text-center d-flex flex-column justify-content-around gap-3">

                                        <div className=" d-flex flex-column gap-3">
                                            <i className="bi bi-file-earmark-text fs-1"></i>
                                            <h5 className="fw-bold">همراه آنلاین رایان</h5>
                                        </div>

                                        <p className="fadak-color-navy">
                                            ویژه کاربرانی که از سامانه معاملاتی رایان استفاده می‌کنند و امکان انجام معاملات، ثبت و مدیریت سفارش‌ها و مشاهده اطلاعات بازار را از طریق نسخه همراه و تحت وب موبایل فراهم می‌سازد.
                                        </p>
                                        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 gap-3">
                                            <a className="fadak-btn-outline w-100 " target="_blank" href="https://fadak.exirbroker.com/mobile/#startApp">همراه آنلاین رایان (اکسیر)</a>
                                            <a className="fadak-btn-outline w-100 " target="_blank" href="https://play.google.com/store/apps/details?id=com.rh.ot.android&hl=fa&pli=1">دانلود رایان همراه</a>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="card h-100 fadak-bg-cream rounded-4">
                                    <div className="card-body text-center d-flex flex-column justify-content-around gap-3">

                                        <div className="d-flex flex-column gap-3">
                                            <i className="bi bi-app fs-1"></i>
                                            <h5 className="fw-bold">همراه آنلاین امکس</h5>
                                        </div>

                                        <p className="fadak-color-navy">
                                            مخصوص کاربران سامانه معاملاتی امکس که دسترسی به معاملات آنلاین و خدمات مرتبط را از طریق نسخه بهینه‌شده برای تلفن همراه، بدون محدودیت مکانی فراهم می‌کند.
                                        </p>

                                        <div className="d-flex justify-content-center align-items-center w-100">
                                            <a target="_blank" href="https://fadak-mobile.tsetab.ir/login/index.html" className="w-100 fadak-btn-outline">همراه آنلاین امکس</a>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>


                <section className="py-5">
                    <h4 className="section-title w-100 text-center">مزایای معاملات آنلاین</h4>
                    <p className="text-muted my-5 text-center">معاملات آنلاین به‌عنوان یکی از پیشرفته‌ترین ابزارهای خرید و فروش در
                        بازار سرمایه، امکانات گسترده‌ای را برای سرمایه‌گذاران فراهم می‌کند. مهم‌ترین مزایای این روش
                        عبارت‌اند از:</p>

                    <div className="row g-4 mt-5">

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-person-fill-gear gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>انجام
                                        معاملات
                                        بدون واسطه</h5>
                                    <p className="card-text small text-muted">سرمایه‌گذار می‌تواند از هر مکان و تنها با
                                        یک اتصال به اینترنت، سفارش‌های خود را ثبت و مدیریت کند.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-clock-fill gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>امکان ثبت
                                        سفارش
                                        در هر زمان</h5>
                                    <p className="card-text small text-muted">ورود سفارش‌ها در لحظه موردنظر سرمایه‌گذار
                                        انجام می‌شود و کنترل کامل فرآیند معامله در اختیار اوست.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-graph-up gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>دریافت
                                        اطلاعات
                                        لحظه‌ای</h5>
                                    <p className="card-text small text-muted">قیمت‌ها، حجم معاملات و سایر داده‌های بازار
                                        به‌صورت آنی نمایش داده می‌شود.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-arrow-repeat gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>ارسال،
                                        ویرایش و
                                        لغو آنی</h5>
                                    <p className="card-text small text-muted">سامانه معاملات آنلاین این امکان را می‌دهد
                                        که سرمایه‌گذار در کوتاه‌ترین زمان سفارش‌های خود را مدیریت کند.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-shield-lock-fill gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>انتقال سریع
                                        و
                                        امن وجوه</h5>
                                    <p className="card-text small text-muted">از طریق درگاه‌های پرداخت الکترونیکی، واریز
                                        و برداشت وجه برای انجام معاملات با سهولت انجام می‌شود.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-wallet-fill gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>دسترسی به
                                        پرتفوی لحظه‌ای</h5>
                                    <p className="card-text small text-muted">مشاهده میانگین قیمت خرید، قیمت سر به سر
                                        فروش، سود و زیان لحظه‌ای و سایر جزئیات پرتفوی با یک نگاه امکان‌پذیر است.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-lightbulb-fill gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>تصمیم‌گیری
                                        مستقل</h5>
                                    <p className="card-text small text-muted">سرمایه‌گذار می‌تواند بدون اتکا به
                                        معامله‌گران کارگزاری، بر اساس تحلیل و استراتژی خود اقدام به معامله کند.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-gear-fill gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>ابزارهای
                                        مدیریت
                                        ریسک</h5>
                                    <p className="card-text small text-muted">امکان تعیین حد ضرر، بررسی وضعیت بازار و
                                        مدیریت لحظه‌ای سرمایه فراهم است.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="card advantage-card">
                                <div className="card-body">
                                    <i className="bi bi-globe gold-text display-6 mb-3 d-block"></i>
                                    <h5 className="card-title fw-bold" style={{color: 'var(--fadak-navy)'}}>دسترسی سریع
                                        از
                                        سراسر دنیا</h5>
                                    <p className="card-text small text-muted">با استفاده از دسترسی‌های امن مانند VPN
                                        اختصاصی، سرمایه‌گذاران می‌توانند از هر نقطه جهان وارد سامانه معاملاتی شوند.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="text-center py-5 border-top">
                    <h4 className="section-title  mx-auto">چگونه کد معاملات آنلاین از کارگزاری دریافت کنیم؟</h4>

                    <div className="row justify-content-center g-4 mt-4">
                        <div className="col-12 col-md-5">
                            <a href="https://fadakregister.irbrokersite.ir/"
                               className="fadak-button w-100 py-3 shadow-sm" target="_blank">
                                <i className="bi bi-laptop me-2"></i> ثبت ‌نام غیر حضوری (آنلاین)
                            </a>
                            <p className="mt-2 text-muted small text-center">سریع‌ترین روش - برای شروع معاملات، ابتدا کد بورسی خود
                                را دریافت نمایید.</p>
                        </div>
                        <div className="col-12 col-md-5">
                            <a href="/Brokerage-branch" className="fadak-btn-outline w-100 py-3 shadow-sm">
                                <i className="bi bi-building me-2"></i> مراجعه حضوری به شعب
                            </a>
                            <p className="mt-2 text-muted small text-center">مشاهده آدرس شعب و اطلاعات تماس واحد صدور کد</p>
                        </div>
                    </div>
                </section>


            </div>

        </>
    );
}
