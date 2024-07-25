'use client';

import Link from "next/link";
import { useState } from "react";
import Snackbar from "awesome-snackbar";

export default function Footer2() {

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const subscribeNewsletter = async() => {
    setIsLoading(true);
    const formData = new FormData();
        formData.append("email", email);
    
        try {
          const response = await fetch(
            `${process.env.API}/api/newsletter`,
            {
              method: "POST",
              body: formData,
            }
          );
    
          if (response.ok) {
            setEmail("");
            setIsLoading(false);
            new Snackbar(`Subscribed`, {
              position: 'top-right',
              actionText: '✗',
              style: {
                  container: [
                      ['background-color', '#1dab45'],
                      ['border-radius', '5px']
                  ],
                  message: [
                      ['color', '#eee'],
                  ],
                  bold: [
                      ['font-weight', 'bold'],
                  ],
                  actionButton: [
                      ['color', 'white'],
                  ],
              }
          }); 
          }
        } catch (error) {
          setIsLoading(false);
          console.error("Error:", error);
        }
  }

  return (
    <>
      <footer>
        <div className="footer__area-two">
          <div className="footer__newsletter-two">
            <div className="container">
              <div className="footer__newsletter-inner">
                <h2 className="title">
                  Subscribe Newsletter For Latest Updates
                </h2>
                <form >
                  <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="e-mail . . ." />
                  <button disabled={isLoading} onClick={subscribeNewsletter} type="button" className="btn">
                    { isLoading ? <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="spinner_0XTQ" d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"/></svg> : 'Subscribe'}
                    
                  </button>
                </form>
                <div className="footer__social-two">
                  <ul className="list-wrap">
                    <li>
                      <Link
                        href="https://www.facebook.com/ibaintconsultancy/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/ibainternational/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.tiktok.com/ibaconsultancy/"
                        target="_blank"
                      >
                        <i className="fab fa-tiktok" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/iba">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__top-two">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <div className="footer__content-two">
                      <div>
                        <Link href="/">
                          <img style={{ marginLeft: "-13px", width:"150px"}}
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
                              <Link href="tel:0123456789">
                              +977(986)-8612453</Link>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-envelope" />
                            </div>
                            <div className="content">
                              <Link href="mailto:info@apexa.com">
                              Inquiry.bageshworitraders@gmail.co                              </Link>
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
                <div className="col-xl-2 col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Information</h4>
                    <div className="footer-link-list">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">Information</Link>
                        </li>
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/team">Meet our team</Link>
                        </li>
                        <li>
                          <Link href="/contact">Case stories</Link>
                        </li>
                        <li>
                          <Link href="/blog">Latest news</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Top Links</h4>
                    <div className="footer-link-list">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">How it’s Work</Link>
                        </li>
                        <li>
                          <Link href="/contact">Partners</Link>
                        </li>
                        <li>
                          <Link href="/contact">Testimonials</Link>
                        </li>
                        <li>
                          <Link href="/contact">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/contact">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Instagram Posts</h4>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta01.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta02.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta03.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta04.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta05.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta06.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                      <Link href="/">
                  Bageshwori Traders & Media Hub
                      </Link>{" "}
                      | All Right Reserved
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
