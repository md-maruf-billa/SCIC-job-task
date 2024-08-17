import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Button from '../../../Shared/Button/Button';
const Banner = () => {
    return (
        <div className='bg-[#edf2ee]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="all-container mx-auto"
            >
                <SwiperSlide className='px-4 lg:px-0 py-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='md:w-1/2'>
                            <img src="./bannerimage1.png" alt="" />
                        </div>
                        <div className='space-y-3 text-center md:text-left'>
                            <h5 className='uppercase text-[#00B207] text-sm'>Welcome to eVoucher</h5>
                            <h1 className='text-4xl lg:text-7xl font-semibold lg:leading-[86px]'>Fresh & Healthy <br />
                                Organic Food</h1>
                            <h2 className='text-xl lg:text-3xl'>Sale up to <span className='text-[#FF8A00] font-semibold'>30% OFF</span></h2>
                            <p className='text-[#808080] text-sm '>Free shipping on all your order. we deliver, you enjoy</p>

                            <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white"} />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-4 lg:px-0 py-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='md:w-1/2'>
                            <img src="./person.png" alt="" />
                        </div>
                        <div className='space-y-3 text-center md:text-left'>
                            <h5 className='uppercase text-[#00B207] text-sm'>Welcome to eVoucher</h5>
                            <h1 className='text-4xl lg:text-7xl font-semibold lg:leading-[86px]'>Fresh & Healthy <br />
                                Organic Food</h1>
                            <h2 className='text-xl lg:text-3xl'>Sale up to <span className='text-[#FF8A00] font-semibold'>30% OFF</span></h2>
                            <p className='text-[#808080] text-sm '>Free shipping on all your order. we deliver, you enjoy</p>

                            <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white"} />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-4 lg:px-0 py-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='md:w-1/2'>
                            <img src="./person1.png" alt="" />
                        </div>
                        <div className='space-y-3 text-center md:text-left'>
                            <h5 className='uppercase text-[#00B207] text-sm'>Welcome to eVoucher</h5>
                            <h1 className='text-4xl lg:text-7xl font-semibold lg:leading-[86px]'>Fresh & Healthy <br />
                                Organic Food</h1>
                            <h2 className='text-xl lg:text-3xl'>Sale up to <span className='text-[#FF8A00] font-semibold'>30% OFF</span></h2>
                            <p className='text-[#808080] text-sm '>Free shipping on all your order. we deliver, you enjoy</p>

                            <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white"} />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-4 lg:px-0 py-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='md:w-1/2'>
                            <img src="./person2.png" alt="" />
                        </div>
                        <div className='space-y-3 text-center md:text-left'>
                            <h5 className='uppercase text-[#00B207] text-sm'>Welcome to eVoucher</h5>
                            <h1 className='text-4xl lg:text-7xl font-semibold lg:leading-[86px]'>Fresh & Healthy <br />
                                Organic Food</h1>
                            <h2 className='text-xl lg:text-3xl'>Sale up to <span className='text-[#FF8A00] font-semibold'>30% OFF</span></h2>
                            <p className='text-[#808080] text-sm '>Free shipping on all your order. we deliver, you enjoy</p>

                            <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white"} />

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-4 lg:px-0 py-4'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <div className='md:w-1/2'>
                            <img src="./bannerimage1.png" alt="" />
                        </div>
                        <div className='space-y-3 text-center md:text-left'>
                            <h5 className='uppercase text-[#00B207] text-sm'>Welcome to eVoucher</h5>
                            <h1 className='text-4xl lg:text-7xl font-semibold lg:leading-[86px]'>Fresh & Healthy <br />
                                Organic Food</h1>
                            <h2 className='text-xl lg:text-3xl'>Sale up to <span className='text-[#FF8A00] font-semibold'>30% OFF</span></h2>
                            <p className='text-[#808080] text-sm '>Free shipping on all your order. we deliver, you enjoy</p>

                            <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white"} />

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
