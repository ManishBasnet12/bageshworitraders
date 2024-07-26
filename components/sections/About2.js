import Link from 'next/link'

export default function About2() {
    return (
        <>
            <section className="about__area-two about__bg" data-background="/assets/img/bg/about_bg.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="about__img-wrap-two">
                                <img src="/assets/img/aboutus/aboutus.jpg" alt="" />
                                <div className="shape">
                                    <img src="/assets/img/images/h2_about_img_shape.png" alt="" className="alltuchtopdown" />
                                </div>
                                <div className="experience__box-two">
                                    <div className="experience__shape">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 295" fill="none" preserveAspectRatio="none">
                                            <path d="M70.7685 260.479C77.6405 257.127 82 250.15 82 242.503L82 44.8205C82 36.5032 76.8524 29.054 69.0724 26.1128L-3.51784e-06 9.7784e-07L0 295L70.7685 260.479Z" fill="currentcolor" />
                                        </svg>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-two">
                                <div className="section-title mb-20 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Who we are</span>
                                    <h2 className="title tg-element-title">About Us</h2>
                                </div>
                                <p>At Bageshwori Traders & Media Hub, we pride ourselves on offering excellent customer service, great prices, and products you can rely on. Take a look around and find everything you need to keep your technology running smoothly and efficiently. We're here to help you get the most out of your devices!</p>
                                <div className="about__content-inner">
                                    {/* <div className="about__list-box">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-arrow-button" />Personalized Learning Paths</li>
                                            <li><i className="flaticon-arrow-button" />Career Guidance Counseling</li>
                                            <li><i className="flaticon-arrow-button" />University Application Assistance</li>
                                            <li><i className="flaticon-arrow-button" />Expert Tutoring Services</li>
                                        </ul>
                                    </div> */}
                                    <div className="about__list-img">
                                        <img src="/assets/img/images/about_list_img.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="about-bottom">
                                    <div className="author-wrap">
                                        <div className="thumb">
                                            <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721729738/395374259_6874276072638138_4344786900598922701_n_uwllap.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            {/* <img src="/assets/img/images/sign.png" alt="" /> */}
                                            <h4 className="title">Bimal Raj Dangi <span>, Managing Director</span></h4>
                                        </div>
                                    </div>
                                    {/* <Link href="" className="btn btn-two">Read More</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__shape-wrap-two">
                    <img src="/assets/img/images/h2_about_shape01.png" alt="" data-parallax="{&quot;x&quot; : -80 , &quot;y&quot; : 80 , &quot;rotateZ&quot;:80}" />
                    <img src="/assets/img/images/h2_about_shape02.png" alt="" data-parallax="{&quot;y&quot; : 100 }" />
                    <img src="/assets/img/images/h2_about_shape03.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
