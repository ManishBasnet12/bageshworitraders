"use client";
import { useState } from "react";

export default function Choose2() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section className="choose__area-two" style={{marginBottom:"100px"}}>
        <div
          className="choose__bg"
          data-background="/assets/img/aboutus/chooseus.jpg"
        />
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-10">
              <div className="choose__content-two">
                <div className="section-title mb-20 tg-heading-subheading animation-style3">
                  <span className="sub-title">Why Choose Us</span>
                  <h2 className="title tg-element-title">
                  Why Bageshwori Traders & Media Hub Stands Out






                  </h2>
                </div>
                <p>
                Our commitment to excellence, extensive range of high-quality products, and exceptional customer service set us apart. Whether you're looking for the latest media technology, reliable sports and agricultural equipment, or professional-grade software, we offer unparalleled expertise and a customer-centric approach to meet all your needs.
                </p>
                {/* <div className="choose__tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" onClick={() => handleOnClick(1)}>
                      <button style={{fontSize:'20px'}}
                        className={
                          activeIndex == 1 ? "nav-link active btn-sm" : "nav-link btn-sm"
                        }
                        id="goal-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#goal-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="goal-tab-pane"
                        aria-selected="true"
                      >
                        Personalized Education Planning
                      </button>
                    </li>
                    <li className="nav-item" onClick={() => handleOnClick(2)}>
                      <button style={{fontSize:'20px'}}
                        className={
                          activeIndex == 2 ? "nav-link active btn-sm" : "nav-link btn-sm"
                        }
                        id="management-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#management-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="management-tab-pane"
                        aria-selected="false"
                      >
                        Academic Risk Management
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className={
                        activeIndex == 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="goal-tab-pane"
                      role="tabpanel"
                      aria-labelledby="goal-tab"
                      tabIndex={0}
                    >
                      <div className="choose__tab-content">
                        <p>
                          Our approach to personalized education planning
                          ensures each student's journey is tailored to their
                          unique strengths and aspirations.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check" />
                            Customized Learning Pathways
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Experienced Educational Advisors
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Access to Exclusive Resources
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Proven Track Record of Success
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex == 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="management-tab-pane"
                      role="tabpanel"
                      aria-labelledby="management-tab"
                      tabIndex={0}
                    >
                      <div className="choose__tab-content">
                        <p>
                          Managing academic risks is crucial for long-term
                          success. We guide students in making informed
                          decisions that align with their educational goals.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check" />
                            Strategic College Selection
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Scholarship and Financial Aid Guidance
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Career Path Alignment
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Continuous Support Throughout the Journey
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                  <div className="choose__tab-content">
                        {/* <p>
                          Our approach to personalized education planning
                          ensures each student's journey is tailored to their
                          unique strengths and aspirations.
                        </p> */}
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check" />
                             Diverse Product Range
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Quality Assurance
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Tailored Software Solutions
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Competitive Pricing
                          </li>
                        </ul>
                      </div>
                {/* <div className="operating__box">
                  <div className="icon">
                    <i className="fas fa-globe" />
                  </div>
                  <div className="content">
                    <p>
                    Empowering futures since 2020
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="choose__shape-wrap-two">
          <img
            src="/assets/img/images/h2_choose_shape01.png"
            alt=""
            data-parallax='{"x" : -80 , "y" : 80 , "rotateZ":80}'
          />
          <img
            src="/assets/img/images/h2_choose_shape02.png"
            alt=""
            data-aos="fade-left"
            data-aos-delay={400}
          />
        </div>
      </section>
    </>
  );
}
