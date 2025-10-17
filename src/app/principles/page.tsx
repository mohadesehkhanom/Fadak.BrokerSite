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
                        <div className="col-md-6 col-lg-4">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4"
                                >
                                    <div className="icon-circle bg-primary bg-opacity-10 text-primary">
                                        <i className="bi bi-shield-check fs-2"></i>
                                    </div>
                                    <h4 className="card-title">رعایت قوانین کارگزاری</h4>
                                    <p className="card-text mt-4">پایبندی دقیق به تمام قوانین و مقررات کارگزاری برای تضمین
                                        عملیات
                                        اخلاقی و قانونی در تمام فعالیت‌های تجاری ما.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4"
                                >
                                    <div className="icon-circle bg-success bg-opacity-10 text-success">
                                        <i className="bi bi-cash-stack fs-2"></i>
                                    </div>
                                    <h4 className="card-title">مقررات مالی</h4>
                                    <p className="card-text mt-4">حفظ کنترل‌های مالی دقیق و پیروی از تمام مقررات قابل اجرا
                                        برای
                                        تضمین
                                        شفافیت و یکپارچگی در تمام امور مالی.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4"
                                >
                                    <div className="icon-circle bg-info bg-opacity-10 text-info">
                                        <i className="bi bi-lock fs-2"></i>
                                    </div>
                                    <h4 className="card-title">محرمانگی اطلاعات مشتریان</h4>
                                    <p className="card-text mt-4">محافظت از اطلاعات مشتریان با بالاترین سطح امنیت و حفظ
                                        محرمانگی
                                        دقیق
                                        در تمام تعاملات با مشتریان.</p>
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
                            <p className="ethics-paragraph">
                                اصول اخلاقی و معیارهای رفتار حرفه‌ای به عنوان یکی از نیازهای بنیادیِ حرفه‌ای کارگزاری با
                                الهام از اصول و معیارهای حرفه‌ایِ موسسه CFA و با توجه به ویژگی‌های بازار سرمایه کشور
                                تدوین شده و بارها مورد بررسی و تجدید نظر قرار گرفته است. در میانه راه از نظرات شرکت‌های
                                فعال در بازار سرمایه نیز بهره گرفته شد. همچنین نظرات برخی مشاوران متخصص در حوزه‌های
                                اخلاق، اخلاق حرفه‌ای، حقوق، مالی، سرمایه‌گذاری و دارندگان گواهینامه CFA در بهبود این
                                اصول و معیارها تأثیرگذار بوده است.
                            </p>
                            <p className="ethics-paragraph">
                                تبعیت شاغلان حرفه کارگزاری از اصول اخلاقی، تمامیِ فعالان بازار سرمایه را منتفع ساخته و
                                اطمینان سرمایه‌گذاران را به بازارهای مالی ارتقا می‌بخشد. اصول اخلاقی به تدریج موجب
                                اطمینان عمومی به بازار می‌شود و از گسترش و توسعه بازارها حمایت می‌کند. اخلاقیات صحیح و
                                دقیق برای بازار سرمایه و حرفه کارگزاری یک امر اساسی است. اطمینان، امری است که به سختی به
                                دست می‌آید و به راحتی از دست می‌رود. شرکت‌ها و افراد می‌توانند از طریق تعهد به بالاترین
                                استانداردهای اخلاقی و رفتار حرفه‌ای، این اطمینان را به وجود آورده و آن را حفظ نمایند.
                                اصول اخلاقی صرفاً یک صفت عالی نیست که تنها توسط برخی شاغلان رعایت گردد، بلکه باید در
                                تمام سطوح بازار سرمایه نفوذ کند و بهترین منافع مشتریان و کارفرمایان را حفظ نماید. گام
                                اصلی دستیابی به چنین هدف والایی باید از محل کار شاغلان آغاز شود. ضروری است که مدیران
                                ارشد شرکت‌های فعال در بازار سرمایه، فرهنگی قوی از اخلاقیات را نه تنها در میان تحلیل‌گران
                                و معامله‌گران بلکه در میان تمامیِ افرادی که به طور مستقیم یا غیرمستقیم با مشتریان،
                                فرآیند سرمایه‌گذاری، امور مالی و سایر فعالیت‌های حرفه‌ای ارتباط دارند اشاعه دهند.
                            </p>
                        </div>
                    </div>
                </div>

                <i className="bi ethics-icon ethics-icon-left bi-shield-check"></i>
                <i className="bi ethics-icon ethics-icon-right bi-balance-scale"></i>
            </section>
            <section>
                <div className="container my-5"> 
                    <div className="row g-4">

                        <div className="col-md-6 col-lg-4">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4"
                                >
                                    <div className="icon-circle bg-warning bg-opacity-10 text-warning">
                                        <i className="bi bi-star fs-2"></i>
                                    </div>
                                    <h4 className="card-title">کیفیت خدمات</h4>
                                    <p className="card-text mt-4">ارائه خدمات با <strong>بالاترین استانداردهای کیفیت</strong>،
                                        بهبود
                                        مستمر خدمات برای فراتر رفتن از انتظارات مشتریان.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4"
                                >
                                    <div className="icon-circle bg-danger bg-opacity-10 text-danger">
                                        <i className="bi bi-people fs-2"></i>
                                    </div>
                                    <h4 className="card-title">حقوق مشتریان</h4>
                                    <p className="card-text mt-4">احترام به حقوق مشتریان و جمع‌آوری فعال بازخورد برای بهبود
                                        خدمات
                                        و
                                        پاسخگویی موثر به نیازهای مشتریان.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card principle-card h-100 shadow-sm">
                                <div className="card-body text-center p-4"
                                >
                                    <div className="icon-circle bg-secondary bg-opacity-10 text-secondary">
                                        <i className="bi bi-exclamation-triangle fs-2"></i>
                                    </div>
                                    <h4 className="card-title">تصمیم‌گیری بی‌طرفانه</h4>
                                    <p className="card-text mt-4"><strong>پرهیز از منافع شخصی</strong> در فرآیندهای
                                        تصمیم‌گیری
                                        برای
                                        تضمین نتایج منصفانه و عینی برای تمام ذینفعان.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionOrganization/>

            <SectionFooter/>
        </>

    );
}
