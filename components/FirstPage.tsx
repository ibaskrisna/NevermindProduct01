import React from 'react';

const FirstPage = () => {
  return (
    <section className="h-screen flex justify-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#363636] h-full opacity-60"></div>

      {/* Content */}
      <div className="m-10 relative z-10">
        <div className="row">
          <div className="col-md-8 text-center">
            <div className="mt-3">
              <h1 className="text-gray-900">
                <img src="/images/gcover.png" alt='photo'></img>
              </h1>
              <h2 className='text-white text-start text-[12px] mt-2'>The Groom</h2>
              <h1 className='text-white text-start text-[28px]'>Yoga Adi Krisna</h1>
              <p className='text-white text-start text-[16px] italic'>First Child of Two Siblings</p>
              <p className='text-white text-start text-[14px] mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit consectetur repellat blanditiis modi quaerat quam minus, incidunt error itaque omnis?</p>
              <p className='text-white text-start text-[9px] mt-2'>@yogakokkrisna</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
