import React from 'react';
import Countdown from './Countdown';

const FourthPage = () => {
    const targetDate = '2024-10-10T20:25:00';

    return (
        <section className="h-screen flex  relative">
            {/* Overlay */}
            <div className="absolute inset-0  bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 mt-20 relative w-screen" >
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <div className=''>
                                <hr className='text-white' />
                                <h1 className='text-white text-[30px] mt-6 mb-2 font-edensor'>Pewiwahan</h1>
                                <p className='text-white'>Monday, 10 September 2024</p>
                                <p className='text-white'>at 09.00 WITA-Selesai</p>
                                <p className='text-white text-[12px] pt-2'> Jl. Matahari Terbit No.3, Sanur, Denpasar Selatan, Kota Denpasar, Bali </p>
                                <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px]">Location</button>

                                <h1 className='text-white text-[30px] mt-6 mb-2 font-edensor text-end'>Resepsi</h1>
                                <p className='text-white text-end'>Monday, 10 September 2024</p>
                                <p className='text-white text-end'>at 09.00 WITA-Selesai</p>
                                <p className='text-white text-[12px] pt-2 text-end'> Jl. Matahari Terbit No.3, Sanur, Denpasar Selatan, Kota Denpasar, Bali </p>
                                <div className='flex justify-end gap-3'>
                                    <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px] ">Save The Date</button>
                                    <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px] ">Location</button>
                                </div>

                            </div>
                        </div>
                        <div className="pt-10 ">
                            <div className=''>
                                <Countdown targetDate={targetDate} />
                            </div>
                            <hr className='text-white mt-6' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FourthPage;
