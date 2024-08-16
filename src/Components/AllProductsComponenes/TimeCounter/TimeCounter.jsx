import React from 'react';
import { useTimer } from 'react-timer-hook';

const TimeCounter = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 20000);

    const {
        seconds,
        minutes,
        hours,
        days,

    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
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
    );
};

export default TimeCounter;