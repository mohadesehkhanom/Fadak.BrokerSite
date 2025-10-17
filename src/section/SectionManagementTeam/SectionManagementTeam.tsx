
import './SectionManagementTeam.css'

export default function SectionManagementTeam() {
    return <>
        <section className="section-team values-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-team-title">تیم مدیریتی</h2>
                    <p className="section-team-subtitle">متخصصان با تجربه در خدمت شما</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member">
                            <div className="team-image">
                                <img src="/assets/images/background/3542.jpg" alt="مدیرعامل"/>
                            </div>
                            <h3 className="team-name">احمد محمدی</h3>
                            <p className="team-position">مدیرعامل</p>
                            <div className="team-social">
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-envelope-fill"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member">
                            <div className="team-image">
                                <img src="/assets/images/background/3542.jpg" alt="معاون مالی"/>
                            </div>
                            <h3 className="team-name">سارا رضایی</h3>
                            <p className="team-position">معاون مالی</p>
                            <div className="team-social">
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-envelope-fill"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member">
                            <div className="team-image">
                                <img src="/assets/images/background/3542.jpg" alt="معاون فناوری"/>
                            </div>
                            <h3 className="team-name">رضا کریمی</h3>
                            <p className="team-position">معاون فناوری</p>
                            <div className="team-social">
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-envelope-fill"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-member">
                            <div className="team-image">
                                <img src="/assets/images/background/3542.jpg" alt="معاون عملیات"/>
                            </div>
                            <h3 className="team-name">زهرا احمدی</h3>
                            <p className="team-position">معاون عملیات</p>
                            <div className="team-social">
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-envelope-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}