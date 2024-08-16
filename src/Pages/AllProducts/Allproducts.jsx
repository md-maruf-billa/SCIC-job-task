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
        <div className='all-container mx-auto'>

            {/*  Upper banner */}

            <div className='bg-[url(https://i.postimg.cc/RZsVqBvd/Discount-Bannar.png)] bg-no-repeat bg-cover py-[68px] pl-[68px] relative mt-6 rounded-xl'>
                <p className='text-sm uppercase text-white'>Best Deals</p>
                <h1 className='text-5xl text-white font-semibold mt-3'>Sale of the Month</h1>
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

                <p className='bg-[#ff8a00] absolute top-[20%] left-[40%] flex flex-col text-white p-5 rounded-full justify-center items-center'><span className='text-2xl font-semibold'>56% </span><span>OFF</span></p>

            </div>





        </div>
    );
};

export default AllProducts;