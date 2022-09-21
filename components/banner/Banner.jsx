import Slider from "react-slick";
import { motion } from 'framer-motion';

import { Container } from "../common";
export function Banner() {
    const variants = {
        hidden: {
            y: 0,
            opacity: 0,
        },
        visible: {
            y: -250,
            opacity: 1,
            transition: { ease: 'easeOut', duration: 2 },
        },
    };
    const variants1 = {
        hidden: {
            y: 0,
            opacity: 0,
        },
        visible: {
            y: -250,
            opacity: 1,
            transition: { ease: 'easeOut', duration: 2 },
        },
    };
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="font-Rokkitt py-4 max-w-full">
            <Slider {...settings}>
                <div className="h-[500px] w-full relative">
                    <img className="w-full h-full object-cover" src="/images/banner/banner1.jpg" />
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="absolute w-full text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                            <div className="text-3xl md:text-6xl font-bold my-2 md:my-4 ">
                                MEN'S
                            </div>
                            <div className="text-xl md:text-3xl font-bold my-2 md:my-4 ">
                                SHOES
                            </div>
                            <div className="text-4xl md:text-[50px] my-2 md:my-4 font-thin">
                                COLLECTION
                            </div>
                            <div className="text-[#ffffffcc] my-2 md:my-4">
                                NEW TRENDING SHOES
                            </div>
                            <button className="bg-[#616161] hover:bg-[#ffffffcc] px-[30px] py-[15px] rounded-3xl my-2 md:my-4">
                                SHOP COLLECTION
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="h-[500px] w-full relative ">
                    <img className="w-full h-full object-cover " src="/images/banner/banner2.jpg" />
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="absolute w-full text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                            <div className="text-3xl md:text-6xl font-bold my-2 md:my-4 ">
                                HUGE
                            </div>
                            <div className="text-xl md:text-3xl font-bold my-2 md:my-4">
                                SALES
                            </div>
                            <div className="text-4xl md:text-[50px] my-2 md:my-4 font-thin">
                                <strong>50%</strong> OFF
                            </div>
                            <div className="text-[#ffffffcc] my-2 md:my-4">
                                Big sale sandals
                            </div>
                            <button className="bg-[#616161] hover:bg-[#ffffffcc] px-[30px] py-[15px] rounded-3xl my-2 md:my-4 ">
                                SHOP COLLECTION
                            </button>
                        </div>
                    </motion.div>

                </div>
                <div className="h-[500px] w-full relative">
                    <img className="w-full h-full object-cover" src="/images/banner/banner3.jpg" />
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="absolute w-full text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                            <div className="text-3xl md:text-6xl font-bold my-2 md:my-4 ">
                                NEW
                            </div>
                            <div className="text-xl md:text-3xl font-bold my-2 md:my-4">
                                ARRIVAL
                            </div>
                            <div className="text-4xl md:text-[50px] my-2 md:my-4 font-thin">
                                UP TO <strong>30%</strong> OFF
                            </div>
                            <div className="text-[#ffffffcc] my-2 md:my-4">
                                New stylish shoes for men
                            </div>
                            <button className="bg-[#616161] hover:bg-[#ffffffcc] px-[30px] py-[15px] rounded-3xl my-2 md:my-4 ">
                                SHOP COLLECTION
                            </button>
                        </div>
                    </motion.div>
                </div>
            </Slider>
        </div>
    )
}