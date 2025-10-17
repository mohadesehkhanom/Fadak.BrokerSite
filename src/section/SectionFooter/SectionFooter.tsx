import "./SectionFooter.css"


export default function SectionFooter() {
    return <>
        <footer className="footer footer-section5 position-relative">
            <div className="container">
                <div className="footer-top section">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__contact wow fadeInDown" data-wow-duration="0.8s">
                                <h4 className="footer__title text-white mb-4">راه های ارتباطی</h4>
                                <div className="footer__content d-grid gap-3">
                                    <a href="tel:+982163479000">
                                        <span className="btn_theme social_box">
                                            <i className="bi bi-telephone-plus"></i>
                                        </span>
                                        <span dir={'ltr'}>(+98) 21 63479000</span>
                                    </a>
                                    <a href="mailto:info@fadakbrokerage.ir">
                                        <span className="btn_theme social_box">
                                            <i className="bi bi-envelope-open"></i>
                                        </span>
                                        <span>info@fadakbrokerage.ir</span>
                                    </a>
                                    <a href="#">
                                         <span className="btn_theme social_box">
                                            <i className="bi bi-geo-alt"></i>
                                        </span>
                                        <span className="white-clr">
                                            تهران، خیابان حافظ جنوبی، بعد از سازمان بورس، بن بست ایرانیان، ساختمان ایرانیان،  پلاک 2 ،طبقه اول
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer5-widget wow fadeInDown" data-wow-duration="0.8s">
                                <h4 className="footer__title text-white mb-xl-4 mb-3">معاملات</h4>
                                <ul className="d-grid gap-xxl-3 gap-2">
                                    <li><a href="#" className="text-white">معاملات بر خط</a></li>
                                    <li><a href="#" className="text-white">معاملات اینترنتی</a></li>
                                    <li><a href="#" className="text-white">سامانه سهام عدالت</a></li>
                                    <li><a href="#" className="text-white">خدمات مشتریان</a></li>
                                    <li><a href="#" className="text-white">ثبت نام غیر حضوری</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer5-widget wow fadeInDown" data-wow-duration="0.8s">
                                <h4 className="footer__title text-white mb-xl-4 mb-3">دسترسی سریع</h4>
                                <ul className="page-linking d-grid gap-xxl-3 gap-2">
                                    <li><a href="/faq" className="text-white fs-seven">سوالات متداول</a></li>
                                    <li><a href="/Brokerage-branch" className="text-white fs-seven">شعب و دفاتر</a></li>
                                    <li><a href="/contact" className="text-white fs-seven">ارتباط با ما</a></li>
                                    <li><a href="/about" className="text-white fs-seven">درباره فدک</a></li>
                                    <li><a href="/bank-accounts" className="text-white fs-seven">شماره حساب</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="Tradexy5-logo-area mb-md-0 mb-3 wow fadeInDown" data-wow-duration="0.8s">
                                <a href="https://trustseal.enamad.ir/?id=576835&Code=3kNB3rg8dKlDvvd7RJuKzQdCvDUaNyai" className="flogo mb-md-4 mb-3">
                                    <img src="/assets/images/certificate/enamad.png" alt="img"/>
                                </a>
                                <p className="text-white">از طریق شبکه های اجتماعی با ما در ارتباط باشید.</p>
                                <div className="social-area mt_20">
                                    <div className="social flex-wrap">
                                        <a href="https://www.instagram.com/rahnamabrokerage"
                                           className="btn_theme social_box"><i className="bi bi-instagram"></i></a>
                                        <a href="https://rhpayment1.fadakbrokerage.ir/hamrah-trader#"
                                           className="btn_theme social_box"><i className="bi bi-linkedin"></i></a>
                                        <a href="http://telegram.me/rahnamabroker" className="btn_theme social_box"><i
                                            className="bi bi-telegram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-white py-lg-4 py-3">
                <div className="container">
                    <p className="copyright text-center">
                        کلیه حقوق متعلق به کارگزاری فدک می‌باشد.
                    </p>
                </div>
            </div>
        </footer>
    </>
}