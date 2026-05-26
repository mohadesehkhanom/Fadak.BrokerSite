import "./SectionBourse.css"

export default function SectionBourse() {
    return (
        < >

            <section className="section-Bourse">
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
                                src="https://placehold.co/600x400"
                                className="metal-img rounded-4"/>
                        </div>
                        <div className="col-lg-7 mb-4 mb-lg-0 mt-5 mt-lg-0">
                            <h4 className="fw-bold mb-4">بورس اوراق بهادار تهران</h4>
                            <p className=" lh-lg mb-4 text-justify">
                                بورس اوراق بهادار تهران یکی از ارکان اصلی بازار سرمایه کشور است که تحت نظارت سازمان بورس و اوراق بهادار فعالیت می‌کند. این بازار بستری شفاف، قانونمند و رسمی برای خرید و فروش اوراق بهادار فراهم می‌کند و نقش مهمی در تأمین مالی شرکت‌های بزرگ و توسعه‌یافته کشور دارد.
                                <br/>
                                فعالیت بورس در قالب بازارهای مختلف انجام می‌شود که متناسب با نوع شرکت‌ها و ابزارهای مالی طراحی شده‌اند.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="vision-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h4 className="vision-title">شفافیت در بورس</h4>
                            <p className="lead mt-3 text-center text-ju">
                                شرکت‌های پذیرفته‌شده در بورس معمولاً از سطح بالاتری از شفافیت، ثبات مالی و انضباط اطلاعاتی برخوردارند و به همین دلیل، ریسک سرمایه‌گذاری در بورس نسبت به بازارهای خارج از بورس و برخی بازارهای فرابورس کمتر است.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
