import Image from "next/image";

export default function SectionCapitalMarketServices(){
    return <>
        <section className="section step-process-section4" style={{ backgroundColor: "#f9fafb" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section__header section-header2 text-center mb-xxl-4 mb-4 pb-2">
                            <h2 className="section__header-title mb-3">چرا کارگزاری فدک</h2>
                            <p>
                                برای خرید و فروش در بازار سهام از قابلیت‌های متنوع فدک به صورت رایگان استفاده کن.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row flex-row-reverse justify-content-center g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="step-process-item text-center position-relative">
                            <div className="icon-area d-center">
                                <div className="icon d-center">
                                    <Image
                                        src="/assets/images/icon/customer-support.png"
                                        width={64}
                                        height={64}
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <div className="cont">
                                <h4 className="mb-xxl-3 mb-2">تنوع ابزارهای معاملاتی</h4>
                                <p>
                                    امکان معامله سهام، صندوق‌های قابل معامله، اوراق مشتقه، اوراق بدهی، معاملات در بورس کالا و سایر اوراق بهادار برات فراهمه!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-5">
                        <div className="step-process-item text-center position-relative mt-lg-5">
                            <div className="icon-area d-center">
                                <div className="icon d-center">
                                    <Image
                                        src="/assets/images/icon/select-account.png"
                                        width={64}
                                        height={64}
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <div className="cont">
                                <h4 className="mb-xxl-3 mb-2">هر یک ریال سرمایه‌ت برای ما مهم است</h4>
                                <p>
                                    در کارگزاری حتی پول‌های راکد سرمایه‌گذاری می‌شن. ما این مبلغ رو در یک صندوق با درآمد ثابت سرمایه‌گذاری می‌کنیم و پایان هر ماه سودش رو به حسابت می‌ریزیم. سودی بیشتر از بانک!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="step-process-item text-center position-relative">
                            <div className="icon-area d-center">
                                <div className="icon d-center">
                                    <Image
                                        src="/assets/images/icon/profit-sharing.png"
                                        width={64}
                                        height={64}
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <div className="cont">
                                <h4 className="mb-xxl-3 mb-2">معامله کن، اعتبار بگیر، دوباره معامله کن!</h4>
                                <p>
                                    دیگه محدود به حسابت در کارگزاری نیستی؛ چون می‌تونی درخواست اعتبار بدی و در لحظه دریافت کنی. با خیال راحت معامله کن و از بازار جا نمون!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}