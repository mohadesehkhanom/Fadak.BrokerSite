import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import "./principles.css"
import SectionOrganization from "@/section/SectionOrganization/SectionOrganization";

export default function Page() {


    return (
        <>
            <SectionNavbarMenu/>

            <section className="principles-header-section">
                <div className="container principles-header-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 fw-bold text-white">اصول و ارزش‌های حرفه‌ای</h1>
                            <p className="lead text-white-50">تعهد ما به برتری در هر جنبه‌ای از کسب‌وکارمان</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="icon-circle bg-primary bg-opacity-10 text-primary">
                                        <i className="bi bi-shield-check fs-2"></i>
                                    </div>
                                    <h4 className="card-title">مسئولیت پذیری و پاسخگویی</h4>
                                    <p className="card-text mt-4">در کارگزاری ما، اعتماد مشتریان سرمایه‌ای گران‌بهاست. با شفافیت در عملکرد و پاسخگویی در همه مراحل، همواره در کنار شما هستیم.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4" >
                                    <div className="icon-circle bg-success bg-opacity-10 text-success">
                                        <i className="bi bi-cash-stack fs-2"></i>
                                    </div>
                                    <h4 className="card-title">عدالت در رویه‌ها و خدمات</h4>
                                    <p className="card-text mt-4">ما به اصول انصاف و بی‌طرفی پایبندیم؛ همه مشتریان ما از فرصت‌ها و خدمات یکسان در بازار سرمایه برخوردارند.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="icon-circle bg-info bg-opacity-10 text-info">
                                        <i className="bi bi-lock fs-2"></i>
                                    </div>
                                    <h4 className="card-title">تقویت فرهنگ نوآوری</h4>
                                    <p className="card-text mt-4">با تکیه بر فناوری‌های روز و نگاه خلاقانه، همواره به‌دنبال ارائه راهکارهای نو برای تسهیل و بهبود تجربه سرمایه‌گذاری هستیم.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4">
                                    <div className="icon-circle bg-info bg-opacity-10 text-info">
                                        <i className="bi bi-lock fs-2"></i>
                                    </div>
                                    <h4 className="card-title">صیانت از اطلاعات مشتری</h4>
                                    <p className="card-text mt-4">منیت اطلاعات مشتریان برای ما خط قرمز است؛ با بهره‌گیری از زیرساخت‌های پیشرفته، از داده‌های شما با دقت و اطمینان حفاظت می‌کنیم.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="ethics-section">
                <div className="container ethics-content">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="ethics-title">اصول اخلاقی و معیارهای رفتار حرفه‌ای</h2>
                            <p className="ethics-paragraph">در کارگزاری فدک، پایبندی به اصول اخلاقی و رفتار حرفه‌ای، سنگ‌بنای اعتماد در بازار سرمایه است. این اصول با الهام از استانداردهای بین‌المللی مؤسسه CFA و با در نظر گرفتن ویژگی‌های بازار سرمایه ایران تدوین و به مرور زمان بازنگری شده‌اند.</p>
                            <p className="ethics-paragraph">رعایت اخلاق حرفه‌ای توسط فعالان بازار، نه تنها منافع سرمایه‌گذاران را حفظ می‌کند، بلکه موجب رشد اعتماد عمومی و توسعه پایدار بازارهای مالی می‌شود.</p>
                            <p className="ethics-paragraph">اعتماد، سرمایه‌ای گران‌بهاست که به‌سختی به دست می‌آید و به‌راحتی از بین می‌رود. از این رو، شرکت‌ها و کارکنان باید با پایبندی به بالاترین استانداردهای اخلاقی، در حفظ این اعتماد بکوشند.</p>
                            <p className="ethics-paragraph">ما در  فدک باور داریم که فرهنگ اخلاق‌مدار باید از درون سازمان آغاز شود. مدیران و کارکنان در همه سطوح، از تحلیل‌گران و معامله‌گران گرفته تا نیروهای پشتیبانی، موظف به رعایت این اصول هستند تا منافع مشتریان و کارفرمایان در بالاترین سطح حفظ شود.</p>
                        </div>
                    </div>
                </div>

                <i className="bi ethics-icon ethics-icon-left bi-shield-check"></i>
                <i className="bi ethics-icon ethics-icon-right bi-balance-scale"></i>
            </section>
            <SectionOrganization/>

            <SectionFooter/>
        </>

    );
}
