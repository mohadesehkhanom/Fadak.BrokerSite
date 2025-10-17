import "./SectionTimeLine.css";


export default function SectionTimeLine() {
    return <>

        <section className="timeline" id="timelineSection">
            <div className="container">
                <h2 className="text-center mb-5">تایم‌لاین راه‌اندازی ما</h2>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-building"></i>
                    </div>
                    <div className="timeline-date">هفته ۱-۲</div>
                    <div className="timeline-content completed">
                        <span className="completion-badge"><i className="bi bi-check"></i></span>
                        <h3 className="timeline-title">ثبت شرکت</h3>
                        <p className="timeline-description">
                            ثبت قانونی شرکت بورسی، شامل ثبت نام تجاری، دریافت شناسه مالیاتی و ایجاد ساختار حقوقی شرکت.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">حقوقی</span>
                            <span className="tag">ثبت</span>
                            <span className="tag">مطابقت قانونی</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-shield-check"></i>
                    </div>
                    <div className="timeline-date">هفته ۳-۴</div>
                    <div className="timeline-content completed">
                        <span className="completion-badge"><i className="bi bi-check"></i></span>
                        <h3 className="timeline-title">رعایت مقررات</h3>
                        <p className="timeline-description">
                            دریافت مجوزها و تاییدیه‌های لازم برای فعالیت‌های معاملاتی و ایجاد چارچوب‌های نظارتی و مدیریت ریسک.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">مجوزها</span>
                            <span className="tag">مطابقت</span>
                            <span className="tag">مدیریت ریسک</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-bank"></i>
                    </div>
                    <div className="timeline-date">هفته ۵-۶</div>
                    <div className="timeline-content completed">
                        <span className="completion-badge"><i className="bi bi-check"></i></span>
                        <h3 className="timeline-title">راه‌اندازی بانکی و مالی</h3>
                        <p className="timeline-description">
                            افتتاح حساب‌های بانکی شرکتی، ایجاد ارتباط با مؤسسات مالی و راه‌اندازی سیستم‌های پرداخت.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">بانک</span>
                            <span className="tag">مالی</span>
                            <span className="tag">سیستم پرداخت</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-laptop"></i>
                    </div>
                    <div className="timeline-date">هفته ۷-۸</div>
                    <div className="timeline-content completed">
                        <span className="completion-badge"><i className="bi bi-check"></i></span>
                        <h3 className="timeline-title">زیرساخت فناوری</h3>
                        <p className="timeline-description">
                            پیاده‌سازی پلتفرم‌های معاملاتی، ایجاد شبکه‌های امن، راه‌اندازی دیتاسنترها و یکپارچه‌سازی نرم‌افزارها و ابزارهای تحلیلی.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">فناوری</span>
                            <span className="tag">زیرساخت</span>
                            <span className="tag">امنیت</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-people"></i>
                    </div>
                    <div className="timeline-date">هفته ۹-۱۰</div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">تشکیل تیم</h3>
                        <p className="timeline-description">
                            جذب پرسنل کلیدی شامل معامله‌گران، تحلیل‌گران، مسئولان مطابقت قانونی و کارکنان پشتیبانی. اجرای برنامه‌های آموزشی و ایجاد فرهنگ سازمانی.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">منابع انسانی</span>
                            <span className="tag">استخدام</span>
                            <span className="tag">آموزش</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-gear"></i>
                    </div>
                    <div className="timeline-date">هفته ۱۱-۱۲</div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">راه‌اندازی عملیاتی</h3>
                        <p className="timeline-description">
                            نهایی کردن فرآیندهای عملیاتی، ایجاد جریان‌های کاری معاملاتی، راه‌اندازی سیستم‌های ارتباطی و اجرای کنترل کیفیت.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">عملیات</span>
                            <span className="tag">فرآیندها</span>
                            <span className="tag">کنترل کیفیت</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <div className="timeline-date">هفته ۱۳-۱۴</div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">ورود به بازار</h3>
                        <p className="timeline-description">
                            آغاز فعالیت‌های معاملاتی، ایجاد حضور در بازار، انجام اولین معاملات و برقراری ارتباط با فعالان بازار.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">راه‌اندازی</span>
                            <span className="tag">ورود به بازار</span>
                            <span className="tag">اولین معاملات</span>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-icon">
                        <i className="bi bi-graph-up"></i>
                    </div>
                    <div className="timeline-date">هفته ۱۵+</div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">رشد و توسعه</h3>
                        <p className="timeline-description">
                            گسترش فعالیت‌ها، ورود به بازارهای جدید، بهینه‌سازی استراتژی‌های معاملاتی و دستیابی به اهداف رشد پایدار.
                        </p>
                        <div className="timeline-tags">
                            <span className="tag">رشد</span>
                            <span className="tag">توسعه</span>
                            <span className="tag">بهینه‌سازی</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}