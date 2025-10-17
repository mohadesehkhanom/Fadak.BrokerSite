import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import SectionFooter from "@/section/SectionFooter/SectionFooter";
import Link from "next/link";

export default function NotFound() {
    return (

        <>
            <SectionNavbarMenu/>

            <section className="error-page d-center text-center section bg-fixed"
                     data-background="assets/images/element/common-bg.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9 col-xxl-8">
                            <div className="error-page__thumb wow fadeInDown" data-wow-duration="0.8s">
                                <img src="/assets/images/review/error-thumb.png" alt="images"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-xxl-6">
                            <div className="section__content mt-5">
                                <h2 className="section__content-title wow fadeInUp" data-wow-duration="0.8s">
                                    صفحه مورد نظر یافت نشد
                                </h2>
                                {/*<Link href="/" className="btn fadak-btn">*/}
                                {/*    رفتن به صفحه اصلی*/}
                                {/*    <i className="bi bi-arrow-up-right"></i>*/}
                                {/*    <span></span>*/}
                                {/*</Link>*/}
                                {/*<a href="/" className="btn fadak-btn">*/}
                                {/*   */}
                                {/*</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<SectionFooter/>*/}
        </>
    );
}
