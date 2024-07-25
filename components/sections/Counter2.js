import CounterUp from "../elements/CounterUp";

export default function Counter2() {
    return (
        <>
            <section className="counter-area-two">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-trophy" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={1500} />+</h2>
                                    <p>Students <br /> Counseled Successfully</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-time" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={8} />+</h2>
                                    <p>Years of <br /> Experience in Education</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-happy" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={92} />K</h2>
                                    <p>Successful <br /> College Placements</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-china" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={10} />+</h2>
                                    <p>Countries <br /> Globally Operated In</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-shape-two">
                    <img src="/assets/img/images/h2_counter_shape.png" alt="" className="rotateme" />
                </div>
            </section>
        </>
    )
}
