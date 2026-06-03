import "./SectionFaraBourse.css"

export default function SectionFaraBourse() {
    return (
        < >

            <section className="section-Fara-Bourse">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-end offset-md-6 ">
                            {/*<h4 className=" fw-bold mb-3 text-dark">بورس کالا و انرژی</h4>*/}
                            {/*<p className="lead text-dark">ارائه تمامی خدمات پذیرش، مشاوره و معامله</p>*/}
                        </div>
                    </div>
                </div>
            </section>

            <section className="commodity-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center">
                            <img
                                src="/assets/images/slider/farabourse_no_text_600x400.webp"
                                className="metal-img rounded-4"/>
                        </div>
                        <div className="col-lg-7 mb-4 mb-lg-0 mt-5 mt-lg-0">
                            <h4 className="fw-bold mb-4">معرفی فرابورس ایران</h4>
                            <p className=" lh-lg mb-4 text-justify">
                                فرابورس ایران یکی از بازارهای رسمی اوراق بهادار کشور است که تحت نظارت سازمان بورس و اوراق بهادار فعالیت می‌کند. این بازار با هدف تأمین مالی شرکت‌های نوپا، کوچک و متوسط و همچنین ایجاد تنوع در ابزارهای مالی بازار سرمایه راه‌اندازی شده است.
                                <br/>
                                فعالیت فرابورس در قالب بازارهای متنوعی انجام می‌شود که هر یک متناسب با سطح بلوغ شرکت‌ها و نوع اوراق بهادار طراحی شده‌اند.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h4 className="vision-title">شرایط فرابورس</h4>
                            <p className="lead mt-3 text-center">
                                فرابورس با تسهیل شرایط پذیرش و معاملات نسبت به بورس اوراق بهادار، این امکان را فراهم کرده است تا شرکت‌هایی که شرایط ورود به بورس را ندارند، بتوانند از طریق بازار سرمایه منابع مالی مورد نیاز خود را تأمین کنند.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
