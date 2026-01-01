import "./SectionBourseTimeLine.css";


export default function SectionBourseTimeLine() {
    return <>

        <section className="timeline" id="timelineSection">
            <div className="container">
                <h2 className="text-center mb-5">بورس اوراق بهادار</h2>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار اول بورس</h3>
                        <p className="timeline-description">
                            بازار اول محل پذیرش شرکت‌های بزرگ، باسابقه و دارای عملکرد مالی پایدار است.
                            <br/>
                            این بازار معمولاً محل معامله سهام شرکت‌های بزرگ و شاخص‌ساز است.
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">سطح بالای شفافیت اطلاعاتی</li>
                            <li className="list-group-item">سابقه فعالیت عملیاتی مناسب</li>
                            <li className="list-group-item">رعایت کامل الزامات قانونی و مالی</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار دوم بورس</h3>
                        <p className="timeline-description">
                            بازار دوم برای شرکت‌هایی در نظر گرفته شده است که اندازه کوچک‌تر یا سابقه فعالیت کوتاه‌تری نسبت به بازار اول دارند اما همچنان شرایط پذیرش بورس را احراز کرده‌اند.
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">شفافیت و انضباط اطلاعاتی مناسب</li>
                            <li className="list-group-item">شرکت‌های در حال رشد و توسعه</li>
                            <li className="list-group-item">سطح ریسک بالاتر نسبت به بازار اول</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار ابزارهای نوین مالی</h3>
                        <p className="timeline-description">
                            این بازار به معاملات انواع اوراق بدهی، صندوق‌های سرمایه‌گذاری قابل معامله (ETF) و سایر ابزارهای مالی اختصاص دارد.
                            <br/>
                            نمونه ابزارهای قابل معامله:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">انواع اوراق بدهی دولتی و شرکتی</li>
                            <li className="list-group-item">صندوق‌های سرمایه‌گذاری قابل معامله</li>
                            <li className="list-group-item">اوراق مبتنی بر دارایی و پروژه</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار مشتقه بورس</h3>
                        <p className="timeline-description">
                            بازار مشتقه بستری برای معاملات ابزارهای مالی مبتنی بر دارایی پایه است و بیشتر برای پوشش ریسک و مدیریت نوسانات مورد استفاده قرار می‌گیرد.
                            <br/>
                            این بازار نیازمند دانش تخصصی بیشتری است و بیشتر مناسب سرمایه‌گذاران حرفه‌ای می‌باشد.
                            <br/>
                            نمونه ابزارها:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">قراردادهای اختیار معامله (Option)</li>
                            <li className="list-group-item">قراردادهای آتی (Futures)</li>
                        </ul>

                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building text-white"></i>
                    </div>
                    <div className="timeline-date"></div>
                    <div className="timeline-content completed">
                        <h3 className="timeline-title">بازار بلوک و عمده</h3>
                        <p className="timeline-description">
                            این بازار برای انجام معاملات با حجم بالا و انتقال مالکیت‌های عمده طراحی شده است.
                            <br/>
                            ویژگی‌ها:
                        </p>
                        <ul className="list-group list-group-numbered">
                            <li className="list-group-item">معاملات عمده و بلوکی</li>
                            <li className="list-group-item">عدم تأثیرگذاری شدید بر تابلو معاملات عادی</li>
                            <li className="list-group-item">مناسب برای جابه‌جایی‌های مدیریتی یا سرمایه‌گذاری‌های بزرگ</li>
                        </ul>

                    </div>
                </div>


            </div>
        </section>

    </>
}