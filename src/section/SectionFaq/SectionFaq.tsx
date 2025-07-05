'use client'

import {Accordion} from "react-bootstrap";

export default function SectionFaq() {


    return <>
        <section className="video-tutorial-section white-bg section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="section__header">
                            <h2 className="section__header-title wow fadeInUp" data-wow-duration="0.8s">سوالات متداول</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between gy-4 gy-lg-0">
                    <div className="col-12">
                        <div className="accordion wow fadeInDown" data-wow-duration="0.8s" id="faq">
                            <Accordion className='accordion wow fadeInDown' data-wow-duration="0.8s" id="faq">

                                <Accordion.Item eventKey="0" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">مدارک مورد نیاز برای افتتاح حساب معاملات بر خط چیست؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">
                                            اصل شناسنامه، اصل کارت ملی و مدرک تحصیلی (حداقل دیپلم).
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">آیا برای استفاده از سامانه معاملات برخط به نرم افزار خاصی نیاز است؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">
                                            سامانه معاملات برخط کارگزاری  راهنمای سرمایه گذاران نرم‌افزاری تحت وب (www.rs.rhbroker.com) است و نیازی به نصب نرم‌افزاری بر روی سیستم کامپیوتر مشتری نیست. بنابراین فقط با اجرای نرم‌افزار بر روی مرورگر سیستم عامل خود می‌توانید از این سرویس استفاده کنید. البته توجه به این نکته ضروریست که شرکت راهنمای سرمایه گذاران مرورگر را به عنوان بهترین مرورگر برای کاربری سیستم آنلاین تریدینگ معرفی می‌نماید.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">چرا نمی‌توانم سهم خود را بفروشم؟ پس از ارسال سفارش فروش با پیغام خطای دارایی شما برای قراردادن این سفارش کافی نمی‌باشد مواجه می شوم</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">
                                            شما در دو‌حالت با این پیغام مواجه خواهید شد:
                                        </p>
                                        <p className="mb-0">
                                            ۱- شما این سهم را ندارید.
                                        </p>
                                        <p className="mb-0">
                                            ۲- کارگزار ناظر سهام مربوطه کارگزاری دیگری است. لذا شما باید نسبت به تغییر ناظر سهام مربوطه اقدام نمائید. این حالت حتی زمانی‌که این سهام را از این کارگزاری خریداری نموده باشید نیز قابل رخ دادن است
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">چرا سهمی را که خریده‌ام در پرتفوی خود نمی‌بینم؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">
                                            زمانی‌که کارگزار ناظر سهم شما، کارگزاری غیر از راهنمای سرمایه گذاران باشد شما در پرتفوی خود این سهم را نمی‌توانید ببینید. ممکن است کارگزار ناظر سهم شما کارگزاری راهنمای سرمایه گذاران باشد (تنها سهم را از کارگزاری راهنمای سرمایه گذاران خرید کرده باشید) ولی به دلیل افزایش سرمایه، کارگزار ناظر سهمتان به حالت پیش‌فرض (سپرده‌گذاری مرکزی) تغییر یافته باشد که در آن صورت هم باید تغییر کارگزار ناظر دهید.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">معاملات اوراق بهادار در بورس تهران در چه ساعاتی انجام می گیرد؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">
                                            معاملات اوراق‌ بهادار از ساعت ۰۹:۰۰ تا ۱۲:۳۰ روزهای شنبه تا چهارشنبه هر هفته به جزء روزهای تعطیل انجام می شود. همچنین ساعت پیش‌گشایش بازار که در آن امکان انجام معاملات وجود ندارد از ساعت ۸:۳۰ شروع و تا ساعت ۰۹:۰۰ ادامه می‌یابد که در آن تنها امکان ورود سفارشات و تغییر قیمت وجود دارد.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">آیا سازوکار خاصی برای خرید سهام شرکت‌هایی که برای اولین بار در بورس عرضه می شوند وجود دارد؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">بله، عرضه سهام شرکت‌های تازه پذیرفته شده هم بر‌اساس ساز و کار حراج انجام می‌شود اما تفاوت‌هایی با معاملات معمول دارد. خریداران سفارش‌های خرید خود را با قیمت‌های پیشنهادی از طریق کارگزاران وارد سامانه معاملاتی می‌کنند. در پایان جلسه معاملاتی، فروشنده بر‌اساس قیمت‌های پیشنهادی خریداران، قیمت فروش خود را اعلام می‌کند و بر‌اساس آن معامله انجام می‌شود. در‌این مرحله درصدی از سهام شرکت برای فروش عرضه می‌شود. البته در روز عرضه اولیه، محدودیت دامنه نوسان روزانه اعمال نمی‌شود.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">تسویه معاملات چیست و چگونه انجام می‌شود؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">پس از انجام معاملات، تسویه معاملات بین فروشنده و خریدار توسط کارگزار فروشنده و کارگزار خریدار از طریق شرکت سپرده‌گذاری‌ مرکزی اوراق بهادار و تسویه وجوه انجام می‌شود. شرکت سپرده‌گذاری مرکزی اوراق بهادار و تسویه وجوه به عنوان امین، نقش اتاق پایاپای را ایفا می‌کند. تسویه معاملات سه روز کاری بعد از انجام معامله (T+3)صورت می‌گیرد.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">منظور از (ح) که گاهی درپایان اسم یک شرکت یا نماد آن آورده می‌شود چیست؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">(ح) نمایانگر حق تقدم سهام مورد نظر است که به انتهای نماد شرکت اضافه می‌شود.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">آزمون معاملات بر‌خط شامل چه مباحثی می باشد؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">آزمون معاملات برخط به صورت کتبی توسط کارگزاری راهنمای سرمایه گذاران برگزار می‌گردد. این آزمون شامل 10 سوال تستی می‌باشد که بر‌گرفته از قوانین و محدودیت‌های معاملات بر‌خط و همچنین سایر قوانین و مقررات مورد نیاز برای معاملات در بورس و فرابورس می‌باشد.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9" className="accordion-item accordion_bg">
                                    <Accordion.Header className="accordion-header">آیا افراد برای انجام معاملات برخط باید شرایط خاصی را دارا باشند؟</Accordion.Header>
                                    <Accordion.Body className="accordion-body">
                                        <p className="mb-0">بله؛ افراد متقاضی باید دارای ۱۸ سال تمام بوده و همچنین حداقل مدرک تحصیلی آنها دیپلم باشد. در ضمن این افراد باید دانش کافی در زمینه انجام معاملات را نیز دارا باشند.</p>
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}


