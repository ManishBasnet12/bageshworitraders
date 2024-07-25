import Link from 'next/link'

export default function Choose3() {
    return (
        <>
            <section className="choose__area-three">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 col-md-9 order-0 order-lg-2">
                            <div className="choose__img-wrap-three">
                                <div className="main-img">
                                    <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721751372/264055744_672895874086960_235245380993418051_n_glipwf.png" alt="" />
                                    <a className="play-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-play" /></a>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Modal BODYYYY
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <img src="https://res.cloudinary.com/dfcl5nzvk/image/upload/v1721837713/visa_sucess_ieloq6.jpg" alt="" data-parallax="{&quot;y&quot; : 80 }" />
                                <div className="shape">
                                    <img src="/assets/img/images/h3_choose_img_shape.jpg" alt="" className="alltuchtopdown" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="choose__content-three">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title">Why We Are The Best</span>
                                    <h2 className="title tg-element-title">We Offer Educational Insight & World-Class Consulting</h2>
                                </div>
                                <p>
                                At our educational consultancy, we pride ourselves on successfully navigating challenges of varying complexity within the academic landscape. We provide long-term support and continuously adapt our strategies through innovative approaches. Our extensive portfolio showcases our commitment to excellence across various educational domains.
                                </p>
                                <div className="choose__list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="choose__list-box">
                                                <div className="choose__list-icon">
                                                    <i className="flaticon-financial-profit" />
                                                </div>
                                                <div className="choose__list-content">
                                                    <h4 className="title">Academic Planning</h4>
                                                    <p>We empower institutions and individuals to excel academically.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="choose__list-box">
                                                <div className="choose__list-icon">
                                                    <i className="flaticon-report" />
                                                </div>
                                                <div className="choose__list-content">
                                                    <h4 className="title">Curriculum Development</h4>
                                                    <p>Our expertise extends to crafting comprehensive and engaging curricula.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose__shape-wrap-three">
                    <img src="/assets/img/images/h3_choose_shape01.jpg" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                    <img src="/assets/img/images/h3_choose_shape02.jpg" alt="" />
                </div>
            </section>
        </>
    )
}
