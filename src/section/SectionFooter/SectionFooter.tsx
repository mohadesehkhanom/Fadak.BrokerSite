import "./SectionFooter.css"
import Image from "next/image";


export default function SectionFooter() {
    return <>
        <footer className="footer footer-section5 position-relative">
            <div className="container">
                <div className="footer-top section py-5">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__contact">
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
                            <div className="footer5-widget">
                                <h4 className="footer__title text-white mb-xl-4 mb-3">معاملات</h4>
                                <ul className="d-grid gap-xxl-3 gap-2">
                                    <li><a href="https://fadak.exirbroker.com/exir/" className="text-white">آنلاین سهام</a></li>
                                    <li><a href="https://fadak.tsetab.ir/" className="text-white">آنلاین مشتقه </a></li>
                                    <li><a href="https://fadak.irbrokersite.ir/" className="text-white">آفلاین سهام </a></li>
                                    <li><a href="https://fadak.ebgo.ir/Login" className="text-white">بورس کالا</a></li>
                                    <li><a href="#" className="text-white">ثبت نام غیر حضوری</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer5-widget">
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
                            <div className=" mb-md-0 mb-3">
                                <a href="https://trustseal.enamad.ir/?id=576835&Code=3kNB3rg8dKlDvvd7RJuKzQdCvDUaNyai" className="flogo mb-md-4 mb-3">
                                    <Image
                                        src="/assets/images/certificate/enamad.png"
                                        alt=""
                                        width="120"
                                        height="130"
                                    />

                                </a>
                                <p className="text-white">از طریق شبکه های اجتماعی با ما در ارتباط باشید.</p>
                                <div className="social-area mt_20">
                                    <div className="social flex-wrap">
                                        <a href="https://www.instagram.com/fadakwealthmanagement/" className="btn_theme social_box">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/fadak-wealth-management" className="btn_theme social_box">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                        {/*<a href="http://telegram.me/rahnamabroker" className="btn_theme social_box">*/}
                                        {/*    <i className="bi bi-telegram"></i>*/}
                                        {/*</a>*/}
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