import SectionNavbarMenu from "@/section/SectionHeader/SectionNavbarMenu";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "کارگزاری فدک",
    description: ''
};
export default function NotFound() {
    return (

        <>
            <SectionNavbarMenu/>
            <section className="error-page d-center text-center section bg-fixed ">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xxl-8">
                            <div className="error-page__thumb">
                                <img src="/assets/images/review/404.jpg" alt="images"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-xxl-6">
                            <div className="section__content mt-5">
                                <h2 className="section__content-title text-light">
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
