import React from 'react';

const SecondPage = () => {
    return (
        <section className="h-screen flex justify-center relative">
            {/* Overlay */}
            <div className="absolute inset-0  bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 relative z-10">
                <div className="row">
                    <div className="col-md-8 text-center">
                        <div className="mt-3">
                            <h1 className="text-gray-900">
                                <img src="/images/bcover.png" alt='photo'></img>
                            </h1>
                            <h2 className='text-white text-end text-[12px] mt-2 font-belgiano'>The Bride</h2>
                            <h1 className='text-white text-end text-[28px] font-edensor'>Irma Pradnyani</h1>
                            <p className='text-white text-end text-[16px] italic font-edensor'>Second Child of Three Siblings</p>
                            <p className='text-white text-end text-[14px] mt-2 font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consectetur repellat blanditiis modi quaerat quam minus, incidunt error itaque omnis?</p>
                            <p className='text-white text-end text-[9px] mt-2 font-sans'>@ewmaaa</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondPage;
