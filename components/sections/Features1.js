import Link from 'next/link'

export default function Features1() {
    return (
        <>
            <section className="features__area">
                <div className="container-fluid p-0">
                    <div className="features__item-wrap">
                        <div className="row g-0" style={{maxWidth:"1320px", margin:"auto"}}>
                            <div className="col-lg-4 col-md-6">
                                <div className="features__item"  style={{borderBottom:'none', display:'block', textAlign:'center'}}>
                                    <div className="features__icon" style={{margin:'0 auto'}}>
                                    <i className="flaticon-profit" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Wide Product Range</h4>
                                        <p> We offer a diverse selection of laptop accessories and parts. From essential chargers and batteries to specialized media equipment, our products cater to both individual users and businesses, ensuring you find exactly what you need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="features__item" style={{borderBottom:'none', display:'block', textAlign:'center'}}>
                                    <div className="features__icon" style={{margin:'0 auto'}}>
                                        <i className="flaticon-light-bulb" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Competitive Pricing</h4>
                                        <p>Enjoy high-quality products at affordable prices. We regularly offer discounts and promotions, making it easy for you to get the best value for your money without compromising on quality.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="features__item" style={{borderBottom:'none', display:'block', textAlign:'center'}}>
                                    <div className="features__icon" style={{margin:'0 auto'}}>
                                        <i className="flaticon-target" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Exceptional Customer Service</h4>
                                        <p>Our dedicated and knowledgeable support team is always ready to assist you. Whether you need help with product selection or troubleshooting, we're committed to providing friendly and reliable customer service to ensure your satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="row g-0" style={{maxWidth:"1320px", margin:"auto"}}>
                            <div className="col-lg-4 col-md-6">
                                <div className="features__item" style={{borderBottom:'none', display:'block', textAlign:'center'}}>
                                    <div className="features__icon" style={{margin:'0 auto'}}>
                                        <i className="flaticon-financial-profit" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">High-Quality Products</h4>
                                        <p>We are committed to providing only the best products from reputable manufacturers. Our selection ensures reliability and top-notch performance, so you can trust that you're getting high-quality items every time you shop with us.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="features__item" style={{borderBottom:'none', display:'block', textAlign:'center'}}>
                                    <div className="features__icon" style={{margin:'0 auto'}}>
                                        <i className="flaticon-light-bulb" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Training and Workshops</h4>
                                        <p>We provide training sessions and workshops to help you get the most out of your technology. Our training programs are designed to empower you with the knowledge you need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="features__item" style={{borderBottom:'none', display:'block', textAlign:'center'}}>
                                    <div className="features__icon" style={{margin:'0 auto'}}>
                                        <i className="flaticon-target" />
                                    </div>
                                    <div className="features__content">
                                        <h4 className="title">Installation and Setup</h4>
                                        <p>To ensure your new equipment is ready to use right out of the box, we offer professional installation and setup services. Our technicians will handle everything from unboxing to configuration.</p>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
