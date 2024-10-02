import React from 'react';

const ThirdPage = () => {
    return (
        <section className="h-screen flex  relative">
            {/* Overlay */}
            <div className="absolute inset-0  bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 relative z-10 w-screen">
                <div className="row">
                    <div className="col-md-8">
                        <div className="mt-10">
                            <h1 className='text-white text-[28px] leading-[28px]'>The Journey of</h1>
                            <h1 className='text-white text-[28px] leading-[28px]'>Two Souls</h1>
                            <h1 className='text-white text-[28px] leading-[28px]'>in Love</h1>
                            <hr className='my-3' />
                            <p className='text-white text-[18px] mb-2'>2020</p>
                            <p className='text-white text-[14px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non deleniti aliquam nisi sunt voluptate voluptatibus iusto libero, voluptatem eaque voluptas possimus sed minus labore laudantium et. Pariatur, molestias nam.</p>
                            <h1 className='text-white text-[18px] my-2'>2021</h1>
                            <p className='text-white text-[14px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non deleniti aliquam nisi sunt voluptate voluptatibus iusto libero, voluptatem eaque voluptas possimus sed minus labore laudantium et. Pariatur, molestias nam.</p>
                            <h1 className='text-white text-[18px] my-2'>2022</h1>
                            <p className='text-white text-[14px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium non deleniti aliquam nisi sunt voluptate voluptatibus iusto libero, voluptatem eaque voluptas possimus sed minus labore laudantium et. Pariatur, molestias nam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ThirdPage;
