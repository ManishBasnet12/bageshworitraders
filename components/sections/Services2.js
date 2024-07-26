import Link from 'next/link'

export default function Services2() {
    return (
        <>
            <section className="services__area-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title text-white">Our Expertise</span>
                                <h2 className="title tg-element-title">Explore Our Comprehensive Educational Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gutter-24">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two" style={{height:'50vh'}}>
                                <div className="services__icon-two" style={{display: "ruby-text"}}>
                                    <i className="flaticon-pie-chart text-white" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title">Product</h2>
                                    <p>elling a wide range of products, such as laptops, laptop accessories, media equipment, sports equipment, and agriculture equipment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two" style={{height:'50vh'}}>
                                <div className="services__icon-two" style={{display: "ruby-text"}}>
                                    <i className="flaticon-budget text-white" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title">Installation and Setup </h2>
                                    <p>To ensure your new equipment is ready to use right out of the box, we offer professional installation and setup services. Our technicians will handle everything from unboxing to configuration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-two" style={{height:'50vh'}}>
                                <div className="services__icon-two" style={{display: "ruby-text"}}>
                                    <i className="flaticon-piggy-bank text-white" />
                                </div>
                                <div className="services__content-two">
                                    <h2 className="title">High-Quality Products</h2>
                                    <p>We are committed to providing only the best products from reputable manufacturers.We are committed to providing only the best products from reputable manufacturers. Our selection ensures reliability and top-notch performance, so you can trust that you're getting high-quality items every time you shop with us.</p>
                                </div>
                            </div>
                        </div>
     
                    </div>
                </div>
                <div className="services__shape-wrap">
                    <img src="/assets/img/images/h2_services_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/h2_services_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
