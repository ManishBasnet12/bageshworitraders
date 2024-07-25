import Link from 'next/link'

export default function Request2() {
    return (
        <>
            <section className="request__area-two">
                <div className="request__bg-two" data-background="/assets/img/bg/h2_request_bg.jpg" />
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-5 col-lg-6">
                            <div className="request__content-two">
                                <h2 className="title">Empowering Futures Through <span>Diverse Solutions for Technology</span></h2>
                                <div className="request__phone">
                                    <div className="icon">
                                        <i className="flaticon-phone-call text-white" />
                                    </div>
                                    <div className="content">
                                        <Link href="tel:0123456789">+977(984)-0636305</Link>
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
