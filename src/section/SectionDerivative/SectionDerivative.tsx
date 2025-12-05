import "./SectionDerivative.css"

export default function SectionDerivative() {
    return (
        < >
            <header className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>مدیریت ریسک، خلق فرصت</h1>
                            <p className="subheading">
                                با ابزارهای مشتقه، ریسک را کنترل و فرصت‌های جدید بازار را شکار کنید.
                                فدک همراه شما در مسیر حرفه‌ای معامله‌گری.
                            </p>
                            <div className="mt-4">
                                <a href="#onboarding" className="btn cta-button me-3">شروع معاملات مشتقه</a>
                                <a href="#services" className="btn btn-outline-light">فعال‌سازی حساب اختیار معامله</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="section-title">خدمات ما در بازار مشتقه</h2>

                    <div className="accordion mb-5" id="servicesAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    نمایش توضیحات
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#servicesAccordion">
                                <div className="accordion-body">
                                    <p>
                                        تیم مشتقه کارگزاری فدک مجموعه‌ای از خدمات تحلیلی، آموزشی و اجرایی را برای
                                        معامله‌گران حرفه‌ای و سرمایه‌گذاران حقوقی فراهم کرده است تا با اطمینان و سرعت
                                        بیشتر در بازار اختیار معامله و آتی فعالیت کنند.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>
                                <h3 className="service-title">دسترسی کامل به معاملات اختیار و آتی سهام</h3>
                                <p>
                                    کارگزاری فدک به مشتریان خود امکان معامله و فروش قراردادهای اختیار خرید (Call) و
                                    اختیار فروش (Put) را در بازار اختیار معامله فراهم کرده است. کاربران فدک می‌توانند
                                    علاوه بر خرید اختیار، با رعایت الزامات وجه تضمین، اقدام به فروش قراردادهای اختیار
                                    نیز کنند و از استراتژی‌های پیشرفته‌ و سایر روش‌های ترکیبی استفاده نمایند.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="bi bi-pie-chart-fill"></i>
                                </div>
                                <h3 className="service-title">تحلیل و پایش پرتفوی مشتقه</h3>
                                <p>
                                    در سامانه معاملات کارگزاری فدک (OMEX)، کاربران به ابزارهای تحلیلی پیشرفته‌ای برای
                                    پایش لحظه‌ای موقعیت‌های اختیار معامله دسترسی دارند. این سامانه به‌صورت خودکار
                                    موقعیت‌های باز، وضعیت وجه تضمین و سود و زیان لحظه‌ای را محاسبه و نمایش می‌دهد. به
                                    این ترتیب، معامله‌گران می‌توانند ریسک پرتفوی مشتقه خود را به‌صورت دقیق کنترل و
                                    استراتژی‌های معاملاتی خود را بهینه‌سازی کنند.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="bi bi-shuffle"></i>
                                </div>
                                <h3 className="service-title">پشتیبانی از استراتژی‌های ترکیبی و مدیریت بهینه وجه
                                    تضمین</h3>
                                <p>
                                    کارگزاری فدک از تمامی ۹ استراتژی تعریف‌شده رسمی در بورس اوراق بهادار تهران پشتیبانی
                                    می‌کند؛ از جمله Covered Call، Bull Spread، Bear Spread، Straddle، Strangle،
                                    Butterfly و سایر ترکیب‌های مجاز. در سامانه معاملات Omex، وجه تضمین مشتریان بر اساس
                                    نوع استراتژی به‌صورت خودکار محاسبه می‌شود. این قابلیت باعث می‌شود معامله‌گران
                                    حرفه‌ای بتوانند با وجه تضمین کمتر، موقعیت‌های متنوع‌تری اتخاذ کنند و کارایی سرمایه
                                    خود را به شکل چشمگیری افزایش دهند.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="bi bi-cash-stack"></i>
                                </div>
                                <h3 className="service-title">پرداخت سود به مانده حساب و وجه تضمین بلوکه‌شده</h3>
                                <p>
                                    در کارگزاری فدک، مانده حساب مشتریان و مبالغ وجه تضمین بلوکه‌شده نیز بدون آنکه از
                                    دسترس خارج شوند، مشمول پرداخت سود روزشمار می‌شوند. این ویژگی منحصربه‌فرد موجب می‌شود
                                    سرمایه مشتریان در زمان نگهداری موقعیت‌های باز، بازدهی غیرفعال و مستمر ایجاد کند و
                                    هزینه فرصت نگهداری وجه تضمین به حداقل برسد. با این سازوکار، معامله‌گران اختیار
                                    معامله در فدک می‌توانند از سرمایه درگیر در معاملات خود حداکثر بهره‌وری مالی را
                                    به‌دست آورند.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="bi bi-headset"></i>
                                </div>
                                <h3 className="service-title">پشتیبانی اختصاصی مشتریان مشتقه</h3>
                                <p>
                                    تیم مشتقه کارگزاری فدک همواره در کنار معامله‌گران است. مشتریان می‌توانند در هر زمان
                                    که به راهنمایی، رفع اشکال معاملاتی، یا مشاوره فنی در زمینه اختیار معامله و آتی نیاز
                                    داشته باشند، با تیم مشتقه فدک در ارتباط مستقیم قرار گیرند. ارتباط از طریق تماس
                                    تلفنی، شبکه‌های اجتماعی و پشتیبانی آنلاین سامانه Omex در دسترس است تا کاربران
                                    بتوانند با اطمینان خاطر و سرعت بیشتر به فعالیت خود ادامه دهند.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="p-4 rounded">
                                <h4 className="mb-3">با خدمات تخصصی مشتقه فدک، معاملات
                                    خود را به سطح بالاتری ببرید.</h4>
                                <div className="mt-3">
                                    <a href="#onboarding" className="btn cta-button me-3">فعال‌سازی معاملات مشتقه</a>
                                    <a href="#contact" className="btn btn-outline-primary">مشاوره رایگان</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trading-platform">
                <div className="container">
                    <h2 className="section-title">سامانه معاملاتی در بازار مشتقه</h2>

                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="platform-card">
                                <h3 className="mb-4">سامانه معاملات امکس (Omex)</h3>
                                <p className="mb-4">
                                    محیطی پیشرفته برای معامله قراردادهای اختیار و آتی با سرعت، پایداری و دقت بالا. این
                                    سامانه امکان مدیریت کامل موقعیت‌ها، مشاهده لحظه‌ای وجه تضمین، اجرای سفارش‌های ترکیبی
                                    و پایش سود و زیان را به‌صورت یکپارچه در اختیار کاربران قرار می‌دهد.
                                </p>
                                <p className="mb-4">
                                    در Omex، معامله‌گران می‌توانند تمام استراتژی‌های معاملاتی تعریف‌شده در بازار مشتقه
                                    را بدون نیاز به تماس یا هماهنگی با کارگزاری به‌صورت مستقیم در سامانه ایجاد و مدیریت
                                    کنند. همچنین قابلیت شبیه‌سازی استراتژی‌ها در این سامانه به کاربران کمک می‌کند تا پیش
                                    از اجرای واقعی معامله، بازده و ریسک احتمالی هر استراتژی را ارزیابی و مقایسه کنند.
                                </p>
                                <a href="#" className="btn cta-button">ورود به سامانه امکس</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="onboarding" className="onboarding-section">
                <div className="container">
                    <h2 className="section-title">مراحل ثبت نام تا معامله</h2>

                    <div className="row mt-4">
                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۱</div>
                                <h4 className="step-title">ثبت‌نام آنلاین</h4>
                                <p>با ورود به سایت فدک و تکمیل فرم ثبت‌نام، حساب کاربری خود را ایجاد کنید. کمتر از ۵
                                    دقیقه زمان می‌برد!</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۲</div>
                                <h4 className="step-title">فعال‌سازی دسترسی بازار مشتقه</h4>
                                <p>پس از ثبت نام برای فعالسازی سامانه امکس و معاملات اختیار با واحد مشتقه تماس بگیرید یا
                                    در صفحه سامانه امکس درخواست تغییر سامانه خود را ثبت کنید.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۳</div>
                                <h4 className="step-title">شارژ حساب و فعالسازی</h4>
                                <p>حساب معاملاتی خود را شارژ کنید و برای فعالسازی دسترسی فروش اختیار و استراتژی ها
                                    پیشرفته با ما تماس بگیرید.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۴</div>
                                <h4 className="step-title">شروع معاملات</h4>
                                <p>استراتژی خود را بسازید و معامله را آغاز کنید. پشتیبانی تیم مشتقه همیشه در دسترس
                                    شماست.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p className="lead mb-4">
                                سریع‌تر، دقیق‌تر، حرفه‌ای‌تر؛ همه‌چیز برای یک معامله‌گر واقعی آماده است.
                            </p>
                            <a href="#" className="btn cta-button btn-lg">همین حالا به جمع معامله‌گران فدک بپیوندید</a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
