


export default function SectionContactUs() {


    return <>
        <section className="sign-up contact section">
            <div className="container">
                <div className="row gy-5 gy-xl-0 justify-content-center justify-content-lg-between">

                    <div className="col-12 col-lg-5 col-xxl-4">
                        <div className="more-help">
                            <h5 className="contact__title">نیاز به کمک بیشتری دارید؟</h5>
                            <div className="more-help__content">

                                <div className="card card--small">
                                    <div className="card--small-icon">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <h6 className="card--small-title">شماره تماس</h6>
                                        <div className="gap-1 flex-column">
                                            <a href="tel:+1234567891" className="card--small-call">(123) 456-7891</a>
                                            <a href="tel:+1234567891" className="card--small-call">(907) 456-7891</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card--small">
                                    <div className="card--small-icon">
                                        <i className="bi bi-envelope-open"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <h6 className="card--small-title">آدرس ایمیل</h6>
                                        <div className="gap-1 flex-column">
                                            <a href="mailto:info@fadakbrokerage.ir" className="card--small-call">info@fadakbrokerage.ir</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card card--small">
                                    <div className="card--small-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="card--small-content">
                                        <h6 className="card--small-title">آدرس</h6>
                                        <div className="gap-1 flex-column">
                                            <p className="text-justify">تهران، خیابان حافظ جنوبی، بعد از سازمان بورس، بن بست ایرانیان، ساختمان ایرانیان،  پلاک 2 ،طبقه اول</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-7 col-xxl-8">
                        <form method="POST" autoComplete="off" id="frmContactus"
                              className="sign-up__form white-bg rounded-4 h-100">
                            <h5 className="contact__title">با ما در تماس باشید</h5>
                            <div className="sign-up__form-part">
                                <div className="input-group mb-xxl-4 mb-3">
                                    <div className="input-single">
                                        <label className="label" htmlFor="name">نام</label>
                                        <input type="text" className="form-control" name="name" id="name"
                                               placeholder="نام خود را وارد کنید..." required />
                                    </div>
                                    <div className="input-single">
                                        <label className="label" htmlFor="email">ایمیل</label>
                                        <input type="email" className="form-control" name="email" id="email"
                                               placeholder="ایمیل خود را وارد کنید..." required />
                                    </div>
                                </div>
                                <div className="input-group mb-xxl-4 mb-3">
                                    <div className="input-single">
                                        <label className="label" htmlFor="phone">شماره تماس</label>
                                        <input type="tel" className="form-control" name="phone" id="phone"
                                               placeholder="شماره خود را وارد کنید..." required />
                                    </div>
                                </div>
                                <div className="input-single">
                                    <label className="label" htmlFor="message">پیام</label>
                                    <textarea className="form-control" id="message" name="message" rows={5}
                                              placeholder="پیام خود را وارد کنید..." required></textarea>
                                </div>
                            </div>
                            <span id="msg"></span>
                            <button type="submit" className="btn fadak-btn  mt_40 " name="submit"  id="submit">
                                ارسال پیام
                            </button>
                        </form>
                    </div>


                </div>
            </div>
        </section>

    </>
}


