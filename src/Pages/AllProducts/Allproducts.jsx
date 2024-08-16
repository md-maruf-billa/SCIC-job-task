import React from 'react';
import { useTimer } from 'react-timer-hook';
import Button from '../../Shared/Button/Button';

const AllProducts = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 20000);
    const {
        seconds,
        minutes,
        hours,
        days,

    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });



    return (
        <div className='all-container mx-auto px-2'>

            {/*  Upper banner */}

            <div className='bg-[url(https://i.postimg.cc/RZsVqBvd/Discount-Bannar.png)] bg-no-repeat bg-cover py-[68px] md:pl-[68px] relative mt-6 rounded-xl flex flex-col items-center md:items-start justify-center'>
                <p className='text-sm uppercase text-white'>Best Deals</p>
                <h1 className='text-3xl md:text-5xl text-white font-semibold mt-3'>Sale of the Month</h1>
                <div className='text-[#969898] text-4xl flex items-center gap-3 text-center mt-5'>
                    <div>
                        <span className='text-[#00b207]'>{days}</span>
                        <h2 className='uppercase text-xs'>Days</h2>
                    </div>
                    :<div>
                        <span className='text-[#00b207]'>{hours}</span>
                        <h2 className='uppercase text-xs'>Hours</h2>
                    </div>

                    :<div>
                        <span className='text-[#00b207]'>{minutes}</span>
                        <h2 className='uppercase text-xs'>Mins</h2>
                    </div>
                    :<div>
                        <span className='text-[#00b207]'>{seconds}</span>
                        <h2 className='uppercase text-xs'>Secs</h2>
                    </div>
                </div>
                <Button btnText={"Shop Now"} customStyle={"bg-[#00b207] text-white mt-8"} />

                <p className='bg-[#ff8a00] w-fit absolute top-3 md:top-1/2 lg:top-[20%] right-3 md:left-1/2 lg:left-[40%] flex flex-col text-white p-3 md:p-5 rounded-full justify-center items-center'><span className='text-2xl font-semibold'>56% </span><span>OFF</span></p>

            </div>


            {/* -------Features header------ */}

            <div className='flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 mt-10'>
                <div className='flex items-center gap-4 flex-wrap'>
                    <select className="select select-bordered w-fit ">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                    <select className="select select-bordered w-fit ">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered w-fit ">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>


                <div className='flex items-center gap-4 flex-wrap'>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>

                    <select className="select select-bordered w-fit ">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className="select select-bordered w-fit ">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
            </div>





        </div>
    );
};

export default AllProducts;