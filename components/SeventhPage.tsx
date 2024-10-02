import React from 'react';
import Countdown from './Countdown';

const SeventhPage = () => {
    return (
        <section className="h-screen flex  relative">
            {/* Overlay */}
            <div className="absolute inset-0  bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 relative w-screen" >
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <div>
                                <h1 className='text-white text-[30px] mt-6 mb-2 font-edensor'>Wedding Gift</h1>
                                <p className='text-white text-[13px] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae omnis, illo est modi dolore, dignissimos quis molestiae blanditiis provident velit minus quia doloribus obcaecati dicta!</p>
                                <div className='flex items-center justify-between py-3'>
                                    <div>
                                        <h1 className='text-white leading-[18px]'>MANDIRI</h1>
                                        <h1 className='text-white leading-[18px]'>56789876</h1>
                                        <h1 className='text-white leading-[18px]'>Nevermind</h1>
                                    </div>
                                    <div>
                                        <button className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px] ">Copy</button>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex items-center justify-between py-3'>
                                    <div>
                                        <h1 className='text-white leading-[18px]'>BCA</h1>
                                        <h1 className='text-white leading-[18px]'>56789876</h1>
                                        <h1 className='text-white leading-[18px]'>Nevermind</h1>
                                    </div>
                                    <div>
                                        <button className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px] ">Copy</button>
                                    </div>
                                </div>
                                <hr />
                                <div className='flex items-center justify-between py-3'>
                                    <div>
                                        <h1 className='text-white leading-[18px]'>BNI</h1>
                                        <h1 className='text-white leading-[18px]'>56789876</h1>
                                        <h1 className='text-white leading-[18px]'>Nevermind</h1>
                                    </div>
                                    <div>
                                        <button className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px] ">Copy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SeventhPage;
