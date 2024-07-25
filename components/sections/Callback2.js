'use client';

import { useState } from "react";
import Snackbar from "awesome-snackbar";

export default function Callback2() {
    const [isLoading, setIsLoading] = useState(false);
    const [callbackFields, setCallbackFields] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const requestCallback = async () => {
        setIsLoading(true);
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

                setIsLoading(false);
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
            setIsLoading(false);
            console.error("Error:", error);
        }
    }

    return (
        <>
            <section className="call-back-area call-back-area-two" style={{marginBottom:"100px"}}>
                <div className="container">
                    <div className="call-back-wrap">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-5">
                                <div className="call-back-content">
                                    <div className="section-title white-title mb-10 tg-heading-subheading animation-style3">
                                        <h2 className="title tg-element-title">Request A Call Back</h2>
                                    </div>
                                    <p>Ever find yourself staring at your computer screen slogan to come to mind? Oftentimes.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
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
                                                    <input value={callbackFields.phone} onChange={e => setCallbackFields({ ...callbackFields, phone: e.target.value })} type="text" placeholder="Phone *" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <button disabled={isLoading} type="submit" onClick={requestCallback} className="btn">
                                                { isLoading ? <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path class="spinner_0XTQ" d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"/></svg> : 'Send Now'}
                                                    </button>
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
    )
}
