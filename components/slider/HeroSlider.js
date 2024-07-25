'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 6000,
    },
};
export default function HeroSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide className="swiper-slide slider__single slider_home-2">
                    <div className="slider__bg" data-background="/assets/img/slider/slider_bg01.jpg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <span className="sub-title py-4">We Are Expert In This Field</span>
                                    <h2 className="title">Welcome to bageshwori traders
                                    and media hub</h2>
                                    {/* <p>Empowering students to achieve their academic dreams abroad with expert guidance and personalized support every step of the way.</p> */}
                                    <Link href="/contact" className="btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__shape">
                        <img src="/assets/img/slider/slider_shape01.png" alt="" />
                        <img src="/assets/img/slider/slider_shape02.png" alt="" />
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className="swiper-slide slider__single">
                    <div className="slider__bg" data-background="/assets/img/slider/slider_bg02.jpg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="slider__content">
                                    <span className="sub-title py-4">We Are Expert In This Field</span>
                                    <h2 className="title">Your Global Education Journey Starts Here</h2>
                                    <p>Navigate the path to international education with our expert consultancy, providing tailored guidance and unwavering support for a successful study abroad experience.</p>
                                    <Link href="/contact" className="btn">Free Consulting</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider__shape">
                        <img src="/assets/img/slider/slider_shape01.png" alt="" />
                        <img src="/assets/img/slider/slider_shape02.png" alt="" />
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </>
    )
}
