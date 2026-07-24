import "./Services.css"
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import {redirect} from "next/navigation";

export default function ServicesPage() {
    redirect("/services");


    return (
        <>
            <SectionNavbarMenu/>

            <div dir="rtl" lang="fa" style={{ fontFamily: "Vazirmatn, sans-serif" }}>
                <section
                    className="text-center text-white py-5"
                    style={{
                        background:
                            "linear-gradient(rgba(26,58,95,0.8), rgba(26,58,95,0.8)), url('/assets/images/background/676-1920x800.jpg') center/cover",
                    }}
                >
                    <div className="container py-5">
                        <h1 className="fw-bold display-5 mb-3">
                            خدمات جامع مالی و سرمایه‌گذاری
                        </h1>
                        <p className="lead mb-4">
                            در کارگزاری ما، با ارائه ابزارها و خدمات پیشرفته، مسیر
                            سرمایه‌گذاری شما را هموار و امن می‌سازیم.
                        </p>
                        <a href="#services" className="btn btn-warning btn-lg rounded-pill">
                            بیشتر بدانید
                        </a>
                    </div>
                </section>

                {/* ======== بخش خدمات ======== */}
                <section id="services" className="py-5 bg-light">
                    <div className="container text-center mb-5">
                        <h2 className="fw-bold text-primary mb-3">
                            صندوق‌های سرمایه‌گذاری
                        </h2>
                        <p className="text-muted">
                            سرمایه‌گذاری هوشمند در متنوع‌ترین صندوق‌ها با بازدهی جذاب
                        </p>


                    </div>


                </section>

                <section className="service-center-section">
                    <div className="container">
                        <h2>مرکز خدمات و پشتیبانی</h2>
                        <p>تیم ما آماده است تا در تمام مراحل سرمایه‌گذاری، از تحلیل تا اجرا، در کنار شما باشد و بهترین راهکارها را ارائه دهد.</p>
                        <div className="row g-4 justify-content-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-center-card">
                                    <div className="icon-box">
                                        <i className="bi bi-chat-dots-fill"></i>
                                    </div>
                                    <h3>مشاوره مالی و سرمایه‌گذاری</h3>
                                    <p>دریافت مشاوره تخصصی از تحلیل‌گران مجرب برای بهینه‌سازی پرتفوی و رسیدن به اهداف مالی شما در کوتاه‌ترین زمان ممکن.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="service-center-card">
                                    <div className="icon-box">
                                        <i className="bi bi-person-workspace"></i>
                                    </div>
                                    <h3>سبدگردان اختصاصی</h3>
                                    <p>واگذاری مدیریت دارایی‌های خود به متخصصان ما. سبدگردانان با استراتژی‌های مشخص، سرمایه شما را به صورت حرفه‌ای مدیریت می‌کنند.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="service-section">
                    <div className="container">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 order-lg-2">
                                <h2>سامانه یکپارچه معاملاتی آنلاین</h2>
                                <p>قدرتمندترین، سریع‌ترین و هوشمندترین پلتفرم معاملاتی کشور. در هر زمان و مکانی به تمامی بازارهای سرمایه دسترسی داشته باشید.</p>
                                <p>با ابزارهای تحلیلی پیشرفته، امکان سفارش‌گذاری سریع و پایش لحظه‌ای بازار، تجربه‌ای متفاوت از معامله خواهید داشت.</p>
                                <a href="#" className="btn">ورود به پنل معاملاتی</a>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <img src="/assets/images/background/309-600x450.jpg" className="img-fluid service-img" alt="سامانه معاملاتی"/>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <SectionFooter/>
        </>
    );
}