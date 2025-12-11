'use client'
import "./SectionDerivative.css"
import Slider from "react-slick";

export default function SectionDerivative() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        vertical: true,
        arrows: false,
        verticalSwiping: true,
        swipeToSlide: true,
    };

    return (
        < >
            <section className="header-derivative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 d-flex flex-column align-items-center justify-content-center" style={{minHeight: "500px"}}>
                            <h4>مدیریت ریسک، خلق فرصت</h4>
                            <p className="mt-2">
                                با ابزارهای مشتقه، ریسک را کنترل و فرصت‌های جدید بازار را شکار کنید.
                                فدک همراه شما در مسیر حرفه‌ای معامله‌گری.
                            </p>
                            <div className="mt-4">
                                <a href="https://fadak.tsetab.ir/" target="_blank" className="btn fadak-button me-3">شروع معاملات مشتقه</a>
                                <a href="#services" className="fadak-btn-outline mt-2 mt-sm-0">فعال‌سازی حساب اختیار معامله</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="p-5 fadak-bg-cream">
                <div className="container my-5">
                    <h4 className="section-title text-center w-100 my-0 py-3">خدمات ما در بازار مشتقه</h4>
                    {/*<p className="mt-2">*/}
                    {/*    تیم مشتقه کارگزاری فدک مجموعه‌ای از خدمات تحلیلی، آموزشی و اجرایی را برای*/}
                    {/*    معامله‌گران حرفه‌ای و سرمایه‌گذاران حقوقی فراهم کرده است تا با اطمینان و سرعت*/}
                    {/*    بیشتر در بازار اختیار معامله و آتی فعالیت کنند.*/}
                    {/*</p>*/}

                    <div className="row">
                        <div className="col-12">
                                <div className="d-flex justify-content-center align-items-center"></div>
                                <Slider {...settings}>
                                    <div className="card mt-2" dir="rtl">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-md-4">
                                                <img src="https://picsum.photos/300/200" className="img-fluid rounded-end" alt="service image"/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">

                                                    <div className="d-flex align-items-center mb-2 d-flex align-items-center">
                                                        <i className="bi bi-graph-up-arrow fs-3 service-icon me-3"></i>
                                                        <h5 className="card-title mb-0 service-title">دسترسی کامل به معاملات اختیار و آتی سهام</h5>
                                                    </div>

                                                    <p className="card-text">
                                                        کارگزاری فدک به مشتریان خود امکان معامله و فروش قراردادهای
                                                        اختیار خرید (Call) و
                                                        اختیار فروش (Put) را در بازار اختیار معامله فراهم کرده است.
                                                        کاربران فدک می‌توانند
                                                        علاوه بر خرید اختیار، با رعایت الزامات وجه تضمین، اقدام به فروش
                                                        قراردادهای اختیار
                                                        نیز کنند و از استراتژی‌های پیشرفته‌ و سایر روش‌های ترکیبی
                                                        استفاده نمایند.
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card mt-2" dir="rtl">
                                        <div className="row g-0 align-items-center">

                                            <div className="col-md-4">
                                                <img src="https://picsum.photos/300/200"
                                                     className="img-fluid rounded-end" alt="service image"/>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="card-body">

                                                    <div className="d-flex align-items-center mb-2">
                                                        <i className="bi bi-pie-chart-fill fs-3 service-icon me-3"></i>
                                                        <h5 className="card-title mb-0 service-title">تحلیل و پایش پرتفوی مشتقه</h5>
                                                    </div>

                                                    <p className="card-text">
                                                        در سامانه معاملات کارگزاری فدک (OMEX)، کاربران به ابزارهای
                                                        تحلیلی پیشرفته‌ای
                                                        برای پایش لحظه‌ای موقعیت‌های اختیار معامله دسترسی دارند. این
                                                        سامانه به‌صورت خودکار
                                                        موقعیت‌های باز، وضعیت وجه تضمین و سود و زیان لحظه‌ای را محاسبه و
                                                        نمایش می‌دهد.
                                                        به این ترتیب، معامله‌گران می‌توانند ریسک پرتفوی مشتقه خود را
                                                        به‌صورت دقیق کنترل
                                                        و استراتژی‌های معاملاتی خود را بهینه‌سازی کنند.
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="card mt-2" dir="rtl">
                                        <div className="row g-0 align-items-center">

                                            <div className="col-md-4">
                                                <img src="https://picsum.photos/300/200"
                                                     className="img-fluid rounded-end" alt="service image"/>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="card-body">

                                                    <div className="d-flex align-items-center mb-2">
                                                        <i className="bi bi-shuffle fs-3 service-icon me-3"></i>
                                                        <h5 className="card-title mb-0 service-title">
                                                            پشتیبانی از استراتژی‌های ترکیبی و مدیریت بهینه وجه تضمین
                                                        </h5>
                                                    </div>

                                                    <p className="card-text">
                                                        کارگزاری فدک از تمامی ۹ استراتژی تعریف‌شده رسمی در بورس اوراق
                                                        بهادار تهران پشتیبانی می‌کند؛
                                                        از جمله Covered Call، Bull Spread، Bear Spread، Straddle،
                                                        Strangle، Butterfly و سایر ترکیب‌های مجاز.
                                                        در سامانه معاملات Omex، وجه تضمین مشتریان بر اساس نوع استراتژی
                                                        به‌صورت خودکار محاسبه می‌شود.
                                                        این قابلیت باعث می‌شود معامله‌گران حرفه‌ای بتوانند با وجه تضمین
                                                        کمتر، موقعیت‌های متنوع‌تری اتخاذ کنند
                                                        و کارایی سرمایه خود را به شکل چشمگیری افزایش دهند.
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="card mt-2" dir="rtl">
                                        <div className="row g-0 align-items-center">

                                            <div className="col-md-4">
                                                <img src="https://picsum.photos/300/200"
                                                     className="img-fluid rounded-end" alt="service image"/>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="card-body">

                                                    <div className="d-flex align-items-center mb-2">
                                                        <i className="bi bi-cash-stack fs-3 service-icon me-3"></i>
                                                        <h5 className="card-title mb-0 service-title">
                                                            پرداخت سود به مانده حساب و وجه تضمین بلوکه‌شده
                                                        </h5>
                                                    </div>

                                                    <p className="card-text">
                                                        در کارگزاری فدک، مانده حساب مشتریان و مبالغ وجه تضمین بلوکه‌شده
                                                        نیز بدون آنکه از دسترس خارج شوند،
                                                        مشمول پرداخت سود روزشمار می‌شوند. این ویژگی منحصربه‌فرد موجب
                                                        می‌شود سرمایه مشتریان در زمان نگهداری
                                                        موقعیت‌های باز، بازدهی غیرفعال و مستمر ایجاد کند و هزینه فرصت
                                                        نگهداری وجه تضمین به حداقل برسد.
                                                        با این سازوکار، معامله‌گران اختیار معامله در فدک می‌توانند از
                                                        سرمایه درگیر در معاملات خود
                                                        حداکثر بهره‌وری مالی را به‌دست آورند.
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="card mt-2" dir="rtl">
                                        <div className="row g-0 align-items-center">

                                            <div className="col-md-4">
                                                <img src="https://picsum.photos/300/200"
                                                     className="img-fluid rounded-end" alt="service image"/>
                                            </div>

                                            <div className="col-md-8">
                                                <div className="card-body">

                                                    <div className="d-flex align-items-center mb-2">
                                                        <i className="bi bi-headset fs-3 service-icon me-3"></i>
                                                        <h5 className="card-title mb-0 service-title">
                                                            پشتیبانی اختصاصی مشتریان مشتقه
                                                        </h5>
                                                    </div>

                                                    <p className="card-text">
                                                        تیم مشتقه کارگزاری فدک همواره در کنار معامله‌گران است. مشتریان
                                                        می‌توانند در هر زمان
                                                        که به راهنمایی، رفع اشکال معاملاتی، یا مشاوره فنی در زمینه
                                                        اختیار معامله و آتی نیاز داشته باشند،
                                                        با تیم مشتقه فدک در ارتباط مستقیم قرار گیرند. ارتباط از طریق
                                                        تماس تلفنی، شبکه‌های اجتماعی
                                                        و پشتیبانی آنلاین سامانه Omex در دسترس است تا کاربران بتوانند با
                                                        اطمینان خاطر و سرعت
                                                        بیشتر به فعالیت خود ادامه دهند.
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </Slider>
                            </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="p-4 rounded">
                                <h5 className="mb-3">با خدمات تخصصی مشتقه فدک، معاملات
                                    خود را به سطح بالاتری ببرید.</h5>
                                <div className="mt-3">
                                    <a href="#onboarding" className="btn fadak-button me-3">فعال‌سازی معاملات مشتقه</a>
                                    <a href="#contact" className="fadak-btn-outline">مشاوره رایگان</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5 bg-white">
                <div className="container my-5">
                    <h4 className="section-title w-100 text-center">سامانه معاملاتی در بازار مشتقه امکس</h4>

                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center justify-content-center">
                            <img className="d-sm-none d-md-flex mb-sm-2 mb-lg-0 rounded" src="https://picsum.photos/420/320"/>
                        </div>
                        <div className="col-lg-8 mt-0 mx-auto">
                            <div className="card p-4" dir="rtl">
                                <div className="card-body">

                                    <h5 className="card-title mb-4">سامانه معاملات امکس</h5>

                                    <p className="card-text mb-4">
                                        محیطی پیشرفته برای معامله قراردادهای اختیار و آتی با سرعت، پایداری و دقت بالا.
                                        این
                                        سامانه امکان مدیریت کامل موقعیت‌ها، مشاهده لحظه‌ای وجه تضمین، اجرای سفارش‌های
                                        ترکیبی
                                        و پایش سود و زیان را به‌صورت یکپارچه در اختیار کاربران قرار می‌دهد.
                                    </p>

                                    <p className="card-text mb-4">
                                        در Omex، معامله‌گران می‌توانند تمام استراتژی‌های معاملاتی تعریف‌شده در بازار
                                        مشتقه
                                        را بدون نیاز به تماس یا هماهنگی با کارگزاری به‌صورت مستقیم در سامانه ایجاد و
                                        مدیریت
                                        کنند. همچنین قابلیت شبیه‌سازی استراتژی‌ها در این سامانه به کاربران کمک می‌کند تا
                                        پیش
                                        از اجرای واقعی معامله، بازده و ریسک احتمالی هر استراتژی را ارزیابی و مقایسه
                                        کنند.
                                    </p>

                                    <a href="#" className="btn fadak-button float-end">ورود به سامانه امکس</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="onboarding" className="onboarding-section fadak-bg-cream p-5">
                <div className="container my-5">
                    <h4 className="section-title">مراحل ثبت نام تا معامله</h4>

                    <div className="row mt-4">
                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۱</div>
                                <h5 className="step-title">ثبت‌نام آنلاین</h5>
                                <p>با ورود به سایت فدک و تکمیل فرم ثبت‌نام، حساب کاربری خود را ایجاد کنید. کمتر از ۵
                                    دقیقه زمان می‌برد!</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۲</div>
                                <h5 className="step-title">فعال‌سازی دسترسی بازار مشتقه</h5>
                                <p>پس از ثبت نام برای فعالسازی سامانه امکس و معاملات اختیار با واحد مشتقه تماس بگیرید یا
                                    در صفحه سامانه امکس درخواست تغییر سامانه خود را ثبت کنید.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۳</div>
                                <h5 className="step-title">شارژ حساب و فعالسازی</h5>
                                <p>حساب معاملاتی خود را شارژ کنید و برای فعالسازی دسترسی فروش اختیار و استراتژی ها
                                    پیشرفته با ما تماس بگیرید.</p>
                            </div>
                        </div>

                        <div className="col-md-3 mb-4">
                            <div className="step-card">
                                <div className="step-number">۴</div>
                                <h5 className="step-title">شروع معاملات</h5>
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
                            <a href="https://fadakregister.irbrokersite.ir/" target="_blank" className="btn fadak-button btn-lg">همین حالا به جمع معامله‌گران فدک بپیوندید</a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
