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
                                <table className='w-52 mt-3 border-separate border-spacing-2 -ml-2'>
                                    <tbody>
                                        <tr className=' w-24 h-20 '>
                                            <th className=' bg-[#87CEEB]' />
                                            <th className='bg-[#9DC183]'/>
                                        </tr>
                                        <tr className=' w-24 h-20 '>
                                            <th className=' bg-[#FFDAB9]'/>
                                            <th className='bg-[#F5F5DC]'/>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FifthPage;
