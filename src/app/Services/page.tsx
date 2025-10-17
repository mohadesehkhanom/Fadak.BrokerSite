"use client";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import "./Services.css"
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionFooter from "@/section/SectionFooter/SectionFooter";

export default function ServicesPage() {
    useEffect(() => {
        const chartFont = {
            family: "'Vazirmatn', sans-serif",
            size: 11,
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    titleFont: { weight: "bold", ...chartFont },
                    bodyFont: chartFont,
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || "";
                            if (label) label += ": ";
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat("fa-IR").format(
                                    context.parsed.y
                                ) + "٪";
                            }
                            return label;
                        },
                    },
                },
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: chartFont },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: chartFont,
                        callback: (value) => value + "٪",
                    },
                    grid: { color: "rgba(0, 0, 0, 0.05)" },
                },
            },
        };

        const chartConfigs = [
            {
                id: "goldChart",
                label: "رشد صندوق طلا",
                color: "#f39c12",
                background: "rgba(243, 156, 18, 0.1)",
                data: [5, 6, 8, 7, 9, 11, 10, 12, 14, 13, 15, 18],
            },
            {
                id: "equityChart",
                label: "رشد صندوق سهامی",
                color: "#1a3a5f",
                background: "rgba(26, 58, 95, 0.1)",
                data: [10, 8, 12, 15, 14, 18, 16, 20, 22, 19, 25, 28],
            },
            {
                id: "housingChart",
                label: "رشد صندوق مسکن",
                color: "#27ae60",
                background: "rgba(39, 174, 96, 0.1)",
                data: [3, 4, 3.5, 5, 4.5, 6, 5.5, 7, 6.5, 8, 7.5, 9],
            },
        ];

        chartConfigs.forEach(({ id, label, color, background, data }) => {
            const canvas = document.getElementById(id);
            if (!canvas) return;
            if (canvas){
                const ctx = canvas.getContext("2d");
                new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: [
                            "فروردین",
                            "اردیبهشت",
                            "خرداد",
                            "تیر",
                            "مرداد",
                            "شهریور",
                            "مهر",
                            "آبان",
                            "آذر",
                            "دی",
                            "بهمن",
                            "اسفند",
                        ],
                        datasets: [
                            {
                                label,
                                data,
                                borderColor: color,
                                backgroundColor: background,
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                            },
                        ],
                    },
                    options: chartOptions,
                });
            }


        });
    }, []);

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

                    <div className="container">
                        <div className="row g-4">
                            {[
                                {
                                    id: "goldChart",
                                    icon: "bi bi-coin",
                                    title: "صندوق طلا",
                                    text: "سرمایه‌گذاری امن و سودآور در بازار طلای ایران...",
                                },
                                {
                                    id: "equityChart",
                                    icon: "bi bi-graph-up-arrow",
                                    title: "صندوق سهامی",
                                    text: "برای سرمایه‌گذارانی که به دنبال رشد سرمایه و بازدهی...",
                                },
                                {
                                    id: "housingChart",
                                    icon: "bi bi-house-heart-fill",
                                    title: "صندوق مسکن",
                                    text: "سرمایه‌گذاری در یکی از پایدارترین بازارهای کشور...",
                                },
                            ].map((card) => (
                                <div key={card.id} className="col-lg-4 col-md-6">
                                    <div className="fund-card bg-white p-4 rounded-4 shadow-sm h-100 text-center">
                                        <div
                                            className="icon-box d-flex align-items-center justify-content-center rounded-circle mb-3"
                                            style={{
                                                width: 80,
                                                height: 80,
                                                backgroundColor: "rgba(26,58,95,0.1)",
                                            }}
                                        >
                                            <i
                                                className={card.icon}
                                                style={{ fontSize: "2rem", color: "#1a3a5f" }}
                                            ></i>
                                        </div>
                                        <h3 className="fw-bold mb-3">{card.title}</h3>
                                        <p className="text-muted small mb-3">{card.text}</p>
                                        <div style={{ height: "180px" }}>
                                            <canvas id={card.id}></canvas>
                                        </div>
                                        <a href="#" className="btn btn-outline-primary rounded-pill mt-3" >
                                            اطلاعات بیشتر
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
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
