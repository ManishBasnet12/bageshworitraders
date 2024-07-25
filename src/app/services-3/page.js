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
                                    <h2 className="title">Discover Our Range of Educational Services</h2>
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
                                            <h2 className="title"><Link href="/services-details">College Application Guidance</Link></h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our College Application Guidance service helps students navigate the complexities of college applications, ensuring they present their best selves to prospective universities. From crafting compelling essays to organizing transcripts and recommendation letters, we provide comprehensive support tailored to each student's needs.</p>
                                        <Link href="/services-details" className="btn btn-two">Read More</Link>
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
                                            <h2 className="title"><Link href="/services-details">School Branding<br /> and Promotion</Link></h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our School Branding and Promotion service specializes in creating a strong and recognizable brand for educational institutions. From designing logos and websites to managing social media campaigns and organizing events, we ensure schools effectively communicate their values and achievements to current and prospective families.</p>
                                        <Link href="/services-details" className="btn btn-two">Read More</Link>
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
                                            <h2 className="title"><Link href="/services-details">College Savings <br />Plans and Tuition Funding</Link></h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our College Savings Plans and Tuition Funding service provides families with comprehensive financial strategies to cover the cost of higher education. From setting up 529 plans to exploring tax-advantaged accounts and scholarship opportunities, we offer personalized advice to help parents and students plan for the future with confidence.</p>
                                        <Link href="/services-details" className="btn btn-two">Read More</Link>
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
                                            <h2 className="title"><Link href="/services-details">Tax-Saving <br />Strategies for Education</Link></h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our Tax-Saving Strategies for Education service helps families understand and utilize tax incentives available for educational expenses. From understanding deductions for tuition fees and scholarships to exploring tax credits for educational materials and equipment, our experts guide you through the complexities of tax laws to maximize your savings on education-related costs.</p>
                                        <Link href="/services-details" className="btn btn-two">Read More</Link>
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
                                            <h2 className="title"><Link href="/services-details">Investment <br />Strategies for Education</Link></h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our Investment Strategies for Education service guides families and institutions in making informed decisions about allocating funds towards educational goals. Whether it's saving for college, investing in educational technology, or funding research projects, our experts provide personalized advice to help clients build sustainable financial growth for education.</p>
                                        <Link href="/services-details" className="btn btn-two">Read More</Link>
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
                                            <h2 className="title"><Link href="/services-details">Strategic <br />Launch for Educational Ventures</Link></h2>
                                        </div>
                                    </div>
                                    <div className="services__content-three">
                                        <p>Our Strategic Launch for Educational Ventures service assists entrepreneurs and organizations in planning and executing successful launches for new educational programs, tech startups, and non-profit initiatives. From market analysis and competitive positioning to fundraising strategies and operational planning, we provide comprehensive support to ensure ventures make a meaningful impact in education.</p>
                                        <Link href="/services-details" className="btn btn-two">Read More</Link>
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