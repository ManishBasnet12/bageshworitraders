import Link from 'next/link'

export default function Project2() {
    return (
        <>
            <section className="project__area-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">our products</span>
                                <h2 className="title tg-element-title">Explore Our Diverse Product Range
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-24">
                        <div className="col-lg-4 col-md-6">
                            <div className="project__item-two">
                                <div className="project__thumb-two">
                                    <img src="/assets/img/products/laptop.png" alt="" />
                                </div>
                                <div className="project__content-two">
                                    <h2 className="title">Laptpos</h2>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project__item-two">
                                <div className="project__thumb-two">
                                    <img src="/assets/img/products/laptopacc.jpg" alt="" />
                                </div>
                                <div className="project__content-two">
                                    <h2 className="title">Laptops accessories</h2>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project__item-two">
                                <div className="project__thumb-two">
                                    <img src="/assets/img/products/mediaacc.jpg" alt="" />
                                </div>
                                <div className="project__content-two">
                                    <h2 className="title">Media accessories</h2>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="project__item-two">
                                <div className="project__thumb-two">
                                    <img src="/assets/img/products/software.png" alt="" />
                                </div>
                                <div className="project__content-two">
                                    <h2 className="title">Software</h2>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="project__item-two">
                                <div className="project__thumb-two">
                                    <img src="/assets/img/products/sport.jpg" alt="" />
                                </div>
                                <div className="project__content-two">
                                    <h2 className="title">Sports equipments</h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project__shape-wrap-two">
                    <img src="/assets/img/project/h2_project_shape.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
