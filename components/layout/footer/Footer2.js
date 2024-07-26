"use client";

import Link from "next/link";

export default function Footer2() {
  return (
    <>
      <footer>
        <div className="footer__area-two">
          <div className="footer__top-two">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <div className="footer__content-two">
                      <div>
                        <Link href="/">
                          <img
                            style={{ marginLeft: "-13px", width: "150px" }}
                            src="/assets/img/logo/mainlogo.png"
                            alt="IBA International Education Consultancy"
                          />
                        </Link>
                      </div>
                      {/* <p>
                        Empowering global education journey with personalized
                        guidance. Your gateway to your dream country.
                      </p> */}
                      <div className="footer-info-list footer-info-two">
                        <ul className="list-wrap">
                          <li>
                            <div className="icon">
                              <i className="flaticon-phone-call" />
                            </div>
                            <div className="content">
                            <p>                            +977(984)-0334418                            </p>
                              </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-envelope" />
                            </div>
                            <div className="content">
                               <p> Inquiry.bageshworitraders@gmail.co{" "}</p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-pin" />
                            </div>
                            <div className="content">
                              <p>Ghorahi, Dang.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Useful Links</h4>
                    <div className="footer-link-list">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about-2">About us</Link>
                        </li>
                        <li>
                          <Link href="/Services-3">Services</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                          <Link href="/TermsofService">Terms of service</Link>
                        </li>
                        <li>
                          <Link href="/PrivacyPolicy">Privacy policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="footer__newsletter-inner">
                    <h2 className="title">Subscribe</h2>
                    <p>
                      Subscribe to our mailing list to receive daily updates
                      direct to your inbox!
                    </p>
                    <form>
                      <input type="text" placeholder="e-mail . . ." />
                      <button type="button" className="btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom-two">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text-two">
                    <p>
                      Copyright ©{" "}
                      <Link href="/">Bageshwori Traders & Media Hub</Link> | All
                      Right Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
