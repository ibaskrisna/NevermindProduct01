import React from 'react';
import Countdown from './Countdown';

const FifthPage = () => {
    return (
        <section className="h-screen flex  relative">
            {/* Overlay */}
            <div className="absolute inset-0  bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 mt-[-50px] relative w-screen" >
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <div className=''>
                                <h1 className='text-white text-[30px] mt-6 mb-2 font-edensor'>DRESSCODE</h1>
                                <p className='text-white'>WE KINDLY ENCOURAGE OUR GUESTS TO WEAR THESE COLORS FOR OUR SPECIAL DAY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FifthPage;
