import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Services3() {
    return (
        <>

            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="All Services">
                <section className="services__area-three services__bg-three" data-background="/assets/img/bg/h3_services_bg.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title white-title text-center mb-50">
                                    <span className="sub-title">OUR SERVICES</span>
                                    <h2 className="title">Discover Our Range of  Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center gutter-24">
                            <div className="col-lg-4 col-md-6">
                                <div className="services__item-three">
                                    <div className="services__item-top">
                                        <div className="services__icon-three">
                                            <i className="flaticon-profit" />
                                        </div>
                                        <div className="services__item-top-title">
                                            <h2 className="title">Wide Product Range</h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>We offer a diverse selection of laptop accessories and parts. From essential chargers and batteries to specialized media equipment, our products cater to both individual users and businesses, ensuring you find exactly what you need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services__item-three">
                                    <div className="services__item-top">
                                        <div className="services__icon-three">
                                            <i className="flaticon-target" />
                                        </div>
                                        <div className="services__top-title">
                                            <h2 className="title">Competitive Pricing</h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Enjoy high-quality products at affordable prices. We regularly offer discounts and promotions, making it easy for you to get the best value for your money without compromising on quality.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services__item-three">
                                    <div className="services__item-top">
                                        <div className="services__icon-three">
                                            <i className="flaticon-financial-profit" />
                                        </div>
                                        <div className="services__top-title">
                                            <h2 className="title">Exceptional Customer Service</h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our dedicated and knowledgeable support team is always ready to assist you. Whether you need help with product selection or troubleshooting, we're committed to providing friendly and reliable customer service to ensure your satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services__item-three">
                                    <div className="services__item-top">
                                        <div className="services__icon-three">
                                            <i className="flaticon-piggy-bank" />
                                        </div>
                                        <div className="services__top-title">
                                            <h2 className="title">High-Quality Products</h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>We are committed to providing only the best products from reputable manufacturers. Our selection ensures reliability and top-notch performance, so you can trust that you're getting high-quality items every time you shop with us.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services__item-three">
                                    <div className="services__item-top">
                                        <div className="services__icon-three">
                                            <i className="flaticon-investment-1" />
                                        </div>
                                        <div className="services__top-title">
                                            <h2 className="title">Training and Workshops</h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>We provide training sessions and workshops to help you get the most out of your technology. Our training programs are designed to empower you with the knowledge you need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services__item-three">
                                    <div className="services__item-top">
                                        <div className="services__icon-three">
                                            <i className="flaticon-startup" />
                                        </div>
                                        <div className="services__top-title">
                                            <h2 className="title">Installation and Setup</h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>To ensure your new equipment is ready to use right out of the box, we offer professional installation and setup services. Our technicians will handle everything from unboxing to configuration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}