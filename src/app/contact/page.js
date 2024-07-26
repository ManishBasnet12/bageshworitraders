'use client';

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Snackbar from "awesome-snackbar"
import { useState } from "react"

export default function Contact() {

    const [callbackBtnLoading, setCallbackLoading] = useState(false);
    const [callbackFields, setCallbackFields] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [isLoading, setIsLoading] = useState(false);
    const [contactFields, setContactFields] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const submitContactDetails = async() => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("name", contactFields.name);
        formData.append("phone", contactFields.phone);
        formData.append("email", contactFields.email);
        formData.append("message", contactFields.message);

        try {
            const response = await fetch(
                `${process.env.API}/api/contact`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {

                setIsLoading(false);
                new Snackbar('Contact Details Submitted Successfully!', {
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
                setContactFields({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                })
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Error:", error);
        }
    }

    const requestCallback = async () => {
        setCallbackLoading(true);
        const formData = new FormData();
        formData.append("name", callbackFields.name);
        formData.append("phone", callbackFields.phone);
        formData.append("email", callbackFields.email);

        try {
            const response = await fetch(
                `${process.env.API}/api/request-callback`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {

                setCallbackLoading(false);
                new Snackbar('Callback Requested Successfully!', {
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
                setCallbackFields({
                    name: '',
                    phone: '',
                    email: ''
                })
            }
        } catch (error) {
            setCallbackLoading(false);
            console.error("Error:", error);
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contact With Us">
                <div>
                    <section className="contact__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.509441630905!2d82.48326617600065!3d28.03946561076392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39979500675bb9b3%3A0x5ee3c1a2a1169525!2sBageshwori%20Traders%20%26%20Media%20Hub%20Pvt%20Ltd.!5e0!3m2!1sen!2snp!4v1721806503628!5m2!1sen!2snp" width={600} height={450} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="contact__content">
                                        <div className="section-title mb-35">
                                            <h2 className="title">Get In Touch
                                            </h2>
                                        </div>
                                        <div className="contact__info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Address</h4>
                                                        <p>Ghorahi, Dang</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Phone</h4>
                                                        +977(986)-8612453
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mail" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">E-mail</h4>
                                                       Inquiry.bageshworitraders@gmail.com
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact__form-wrap">
                                        <h2 className="title">Inquire About Our Services</h2>
                                        {/* <p>Your information will be kept confidential and used solely to assist with your educational inquiry. Required fields are marked *.</p> */}
                                        <form>
                                            <div className="form-grp">
                                                <textarea  name="message" placeholder="Message" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input  type="text" name="name" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input  type="email" name="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input  type="number" name="phone" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp checkbox-grp">
                                                <input type="checkbox" name="checkbox" id="checkbox" />
                                                <label htmlFor="checkbox">I agree to the terms and conditions.</label>
                                            </div>
                                            
                                            <button  type="button" className="btn">
                                                Submit
                                            </button>
                                        </form>
                                        {/* <p className="ajax-response mb-0" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* call-back-area */}
                    {/* <section className="call-back-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Schedule a Callback</h2>
                                        </div>
                                        <p>Interested in learning more about our educational services? Fill out the form below to request a callback from one of our experts.</p>
                                        <div className="shape">
                                            <img src="/assets/img/images/call_back_shape.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="call-back-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input value={callbackFields.name} onChange={e => setCallbackFields({ ...callbackFields, name: e.target.value })} type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input value={callbackFields.email} onChange={e => setCallbackFields({ ...callbackFields, email: e.target.value })} type="email" placeholder="E-mail *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input value={callbackFields.phone} onChange={e => setCallbackFields({ ...callbackFields, phone: e.target.value })} type="number" placeholder="Phone *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button onClick={requestCallback} disabled={callbackBtnLoading} type="submit" className="btn">
                                                        
                                                        { callbackBtnLoading ? <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="spinner_0XTQ" d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"/></svg> : 'Request Callback'}
                                                        </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </Layout>
        </>
    )
}