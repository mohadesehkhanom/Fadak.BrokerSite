import "./SectionContactUs.css"


export default function SectionContactUs() {


    return <>
        <section className="sign-up contact section d-flex align-items-center">
            <div className="container d-flex align-items-center">
                <div className="row gy-5 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">

                    <div className="col-12 col-lg-5 col-xxl-4">
                        <div className="more-help rounded-3">
                            <h5 className="contact__title pb-4 mb-4">نیاز به کمک بیشتری دارید؟</h5>
                            <div className="more-help__content">

                                <div className="card card--small p-3">
                                    <div className="card--small-icon">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <p className="card--small-title">شماره تماس</p>
                                        <div className="gap-1 flex-column">
                                            <a href="tel:+1234567891" className="card--small-call dir-ltr number-farsi">(021) 63479000</a>
                                            {/*<a href="tel:+1234567891" className="card--small-call">(021) 456-7891</a>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="card card--small p-3">
                                    <div className="card--small-icon">
                                        <i className="bi bi-envelope-open"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <p className="card--small-title">آدرس ایمیل</p>
                                        <div className="gap-1 flex-column">
                                            <a href="mailto:info@fadakbrokerage.ir" className="card--small-call">info@fadakbrokerage.ir</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card--small p-3">
                                    <div className="card--small-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <p className="card--small-title">دفتر مرکزی</p>
                                        <div className="gap-1 flex-column">
                                            <p className="text-justify">تهران، نظامی گنجوی، خیابان سید جمال الدین اسدآبادی، کوچه دیدار، پلاک ۱۲، طبقه ۲</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card--small p-3">
                                    <div className="card--small-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <p className="card--small-title">دفتر عملیات</p>
                                        <div className="gap-1 flex-column">
                                            <p className="text-justify">تهران، حافظ بعد از جمهوری بن بست ایرانیان کارگزاری فدک طبقه اول و دوم</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-7 col-xxl-8 card rounded-3">
                        <form method="POST" autoComplete="off" id="frmContactus"
                              className="sign-up__form white-bg rounded-4 h-100 card-body">
                            <h5 className="contact__title pb-3 mb-3">ثبت پیشنهاد، انتقاد و شکایت</h5>
                            <p className="text-start my-3">نظرات شما برای ما مهم است و به ما کمک می کند کیفیت خدماتمان را بهبود دهیم. چنانچه در هر زمینه نظری دارید برای ما بنویسید. اگر در هر مورد شکایتی دارید ما را در جریان بگذارید. ما متعهدیم ظرف ۴۸ ساعت به شکایت شما رسیدگی کنیم.</p>
                            <div className="sign-up__form-part">
                                <div className="input-group mb-xxl-4 mb-3">
                                    <div className="input-single">
                                        <label className="label" htmlFor="name">نام</label>
                                        <input type="text" className="form-control" name="name" id="name" required />
                                    </div>
                                    <div className="input-single">
                                        <label className="label" htmlFor="email">ایمیل</label>
                                        <input type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div className="input-group mb-xxl-4 mb-3">
                                    <div className="input-single">
                                        <label className="label" htmlFor="phone">شماره تماس</label>
                                        <input type="tel" className="form-control" name="phone" id="phone" required />
                                    </div>
                                </div>
                                <div className="input-single">
                                    <label className="label" htmlFor="message">پیام</label>
                                    <textarea className="form-control" id="message" name="message" rows={5} required></textarea>
                                </div>
                            </div>
                            <span id="msg"></span>
                            <button type="submit" className="fadak-button mt_40 float-end" name="submit"  id="submit">
                                ارسال پیام
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    </>
}


