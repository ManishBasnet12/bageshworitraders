import Link from 'next/link'

export default function Team2() {
    return (
        <>
            <section className="team__area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">MEET OUR TEAM</span>
                                <h2 className="title tg-element-title">Meet Our Specialized Team <br /> Of Experts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gutter-24">
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="team__item-two shine-animate-item">
                                <div className="team__thumb-two shine-animate">
                                    <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721725743/448886511_7855589394506796_6398320140526690469_n_usalrl.jpg" alt="" />
                                </div>
                                <div className="team__content-two">
                                    <h4 className="title"><Link href="/team-details">Pujan Rai</Link></h4>
                                    <span>Managing Director</span>
                                    <div className="team__social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="team__item-two shine-animate-item">
                                <div className="team__thumb-two shine-animate">
                                    <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721725743/365896126_3361796090739895_3731644348771319251_n_phvxqq.jpg" alt="" />
                                </div>
                                <div className="team__content-two">
                                    <h4 className="title"><Link href="/team-details">Anil Tamang</Link></h4>
                                    <span>Counsellor </span>
                                    <div className="team__social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="team__item-two shine-animate-item">
                                <div className="team__thumb-two shine-animate">
                                    <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721726157/bijen-1_dkk82n.jpg" alt="" />
                                </div>
                                <div className="team__content-two">
                                    <h4 className="title"><Link href="/team-details">Bijen Shrestha</Link></h4>
                                    <span>Document Export</span>
                                    <div className="team__social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-8">
                            <div className="team__item-two shine-animate-item">
                                <div className="team__thumb-two shine-animate">
                                    <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721726209/248175301_3015809875361428_411480392599138993_n_fn3wlw.jpg" alt="" />
                                </div>
                                <div className="team__content-two">
                                    <h4 className="title"><Link href="/team-details">Amit Tamang</Link></h4>
                                    <span>Finance Advisor</span>
                                    <div className="team__social-two">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team__shape">
                    <img src="/assets/img/team/team_shape01.png" alt="" data-parallax="{&quot;y&quot; : 100 }" />
                    <img src="/assets/img/team/team_shape02.png" alt="" className="alltuchtopdown" />
                </div>
            </section>
        </>
    )
}
