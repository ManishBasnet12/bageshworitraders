"use client";

export default function Callback2() {
  return (
    <>
      <section
        className="call-back-area call-back-area-two"
        style={{ margin: "100px 0px" }}
      >
        <div className="container">
          <div className="call-back-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-5">
                <div className="call-back-content">
                  <div className="section-title white-title mb-10 tg-heading-subheading animation-style3">
                    <h2 className="title tg-element-title">
                      Request A Call Back
                    </h2>
                  </div>
                  <p>
                    Ever find yourself staring at your computer screen slogan to
                    come to mind? Oftentimes.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="call-back-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="text" placeholder="Name *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="email" placeholder="E-mail *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="text" placeholder="Phone *" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <button className="btn">Send Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
