import "./SectionFaraBourseTimeLine.css";


export default function SectionFaraBourseTimeLine() {
    return <>

        <section className="timeline" id="timelineSection">
            <div className="container">
                <h2 className="text-center mb-5">فرابورس ایران</h2>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار اول فرابورس</h3>
                        <p className="timeline-description">
                            بازار اول محل پذیرش شرکت‌هایی است که از نظر مالی و عملیاتی به سطح مناسبی از ثبات رسیده‌اند و الزامات قانونی پذیرش را احراز کرده‌اند.
                            <br/>
                            نمونه‌ای از شرایط پذیرش:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">حداقل سرمایه ثبت‌شده مطابق مقررات</li>
                            <li className="list-group-item">گذشت حداقل یک دوره فعالیت عملیاتی</li>
                            <li className="list-group-item">وضعیت مالی قابل قبول و عدم وجود محدودیت‌های اساسی قانونی</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار دوم فرابورس</h3>
                        <p className="timeline-description">
                            بازار دوم برای شرکت‌هایی در نظر گرفته شده است که شرایط پذیرش ساده‌تری نسبت به بازار اول دارند و در مرحله رشد قرار دارند.
                            <br/>
                            نمونه‌ای از شرایط پذیرش:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">سرمایه ثبت‌شده کمتر از بازار اول</li>
                            <li className="list-group-item">عدم شمول محدودیت‌های مهم قانونی از جمله مشمول نبودن ماده ۱۴۱ قانون تجارت</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار مشتقه فرابورس</h3>
                        <p className="timeline-description">
                            بازار مشتقه فرابورس بستری برای انجام معاملات ابزارهای مالی مشتقه مبتنی بر دارایی پایه است که با هدف پوشش ریسک، مدیریت نوسانات و ایجاد امکان استراتژی‌های متنوع سرمایه‌گذاری ایجاد شده است.
                            <br/>
                            ویژگی‌ها:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">معاملات ابزارهایی مانند قراردادهای اختیار معامله و سایر اوراق مشتقه</li>
                            <li className="list-group-item">مبتنی بر دارایی پایه مانند سهام، شاخص یا اوراق مالی</li>
                            <li className="list-group-item">مناسب سرمایه‌گذاران حرفه‌ای و آشنا با مفاهیم مدیریت ریسک</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار نوآفرین</h3>
                        <p className="timeline-description">
                            بازار نوآفرین با هدف حمایت از شرکت‌های دانش‌بنیان، فناور و استارتاپی ایجاد شده است. این بازار امکان تأمین مالی شرکت‌هایی را فراهم می‌کند که دارای مدل کسب‌وکار نوآورانه و قابلیت رشد هستند، حتی اگر هنوز به سودآوری پایدار نرسیده باشند.
                            <br/>
                            ویژگی‌ها:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">مناسب شرکت‌های نوپا و دانش‌ بنیان</li>
                            <li className="list-group-item">تمرکز بر رشد و آینده‌پذیری کسب‌وکار</li>
                            <li className="list-group-item">چارچوب پذیرش متناسب با ماهیت شرکت‌های نوآور</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار سوم (بازار عرضه)</h3>
                        <p className="timeline-description">
                            بازار عرضه بستری برای انجام معاملات اوراق بهاداری است که امکان یا شرایط پذیرش در سایر بازارها را ندارند.
                            <br/>
                            ویژگی‌ها و نمونه دارایی‌های قابل معامله:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">عدم نیاز به فرآیند پذیرش رسمی</li>
                            <li className="list-group-item">امکان انجام پذیره‌نویسی انواع اوراق بهادار</li>
                            <li className="list-group-item">محل انجام معاملات عمده و بلوکی</li>
                            <li className="list-group-item">بلوک سهام شرکت‌ها</li>
                            <li className="list-group-item">حق‌تقدم خرید سهام</li>
                            <li className="list-group-item">سهام ناشی از افزایش سرمایه</li>
                            <li className="list-group-item">انواع اوراق بدهی و گواهی‌های مالی</li>
                            <li className="list-group-item">دارایی‌هایی مانند املاک، مستغلات و حقوق مالکیت فکری</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار توافقی سهام</h3>
                        <p className="timeline-description">
                            بازار توافقی سهام بستری برای انجام معاملاتی است که بر اساس توافق مستقیم بین خریدار و فروشنده انجام می‌شود و معمولاً برای سهام با نقدشوندگی محدود یا شرایط خاص کاربرد دارد.
                            <br/>
                            ویژگی‌ها:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">انعطاف‌پذیری در تعیین قیمت و شرایط معامله</li>
                            <li className="list-group-item">مناسب برای معاملات خاص، بلوکی یا کم‌معامله</li>
                            <li className="list-group-item">خارج از سازوکار حراج پیوسته بازارهای عادی</li>
                        </ul>

                    </div>
                </div>


            </div>
        </section>

        <section>
            <div className="container-fluid fadak-bg-cream">
                <div className="container py-5">
                    <div className="text-center p-0 p-lg-5">
                        <h4 className="fw-bold">بازار پایه فرابورس</h4>
                        <p className="mt-3 text-center">
                            بازار پایه فرابورس بازاری است که شرکت‌های حاضر در آن الزامات ساده‌تری نسبت به بازارهای دیگر دارند و سطح شفافیت اطلاعاتی در آن پایین‌تر است؛ به همین دلیل ریسک سرمایه‌گذاری در بازار پایه بالاتر از سایر بازارها محسوب می‌شود.
                            <br/><br/>
                            شرکت‌های بازار پایه بر اساس وضعیت افشای اطلاعات، شرایط مالی و الزامات قانونی به سه تابلو تقسیم می‌شوند
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="services-section">
            <div className="container">

                <div className="row g-3 gy-lg-0 gx-lg-3">

                    <div className="col-12 col-lg-4">
                        <div className="card h-100 fadak-bg-cream rounded-4">
                            <div className="card-body text-center d-flex flex-column justify-content-around">

                                <div className="mb-3 d-flex flex-column gap-3">
                                    <i className="bi bi-building-check fs-1"></i>
                                    <h5 className="fw-bold">تابلو زرد بازار پایه</h5>
                                </div>

                                <p className="fadak-color-navy mt-3 text-center">
                                    شامل شرکت‌هایی با وضعیت افشای اطلاعات قابل قبول‌تر و ریسک کمتر نسبت به سایر تابلوهای بازار پایه.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 ">
                        <div className="card h-100 fadak-bg-cream rounded-4">
                            <div className="card-body text-center d-flex flex-column justify-content-around">

                                <div className="mb-3 d-flex flex-column gap-3">
                                    <i className="bi bi-building-check fs-1"></i>
                                    <h5 className="fw-bold">تابلو نارنجی بازار پایه</h5>
                                </div>

                                <p className="fadak-color-navy mt-3 text-center">
                                    شامل شرکت‌هایی با محدودیت‌های اطلاعاتی، مالی یا حقوقی بیشتر و سطح ریسک بالاتر نسبت به تابلو زرد.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="card h-100 fadak-bg-cream rounded-4">
                            <div className="card-body text-center d-flex flex-column justify-content-around">

                                <div className="mb-3 d-flex flex-column gap-3">
                                    <i className="bi bi-building-check fs-1"></i>
                                    <h5 className="fw-bold">تابلو قرمز بازار پایه</h5>
                                </div>

                                <p className="fadak-color-navy mt-3 text-center">
                                    شامل شرکت‌هایی با مشکلات جدی مالی یا حقوقی مانند ورشکستگی یا انحلال و دارای بالاترین سطح ریسک.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </section>



    </>
}