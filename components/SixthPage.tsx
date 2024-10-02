import React from 'react';

const SixthPage = () => {
    return (
        <section className="h-screen flex  relative">
            {/* Overlay */}
            <div className="absolute inset-0  bg-[#363636] opacity-60"></div>

            {/* Content */}
            <div className="m-10 relative w-screen" >
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <div className=''>
                                <h1 className='text-white text-[28px] mt-6 mb-2 font-edensor  leading-[32px]'>Kindly Confirm Your Presence and Share Your Blessings</h1>
                                <p className='text-white text-[14px] mt-4'>We kindly request your prompt response to confirm your attendance at our upcoming event. Alongside your RSVP, please take a moment to extend your warm regards and best wishes.</p>
                                <h1 className='my-2 text-white'>Nama</h1>
                                <input type="text" placeholder='' className='w-full px-2 text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none' />
                                <h1 className='my-2 text-white'>Kehadiran</h1>
                                <select name='kehadiran' id='kehadiran' className='w-full text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none'>
                                    <option value=""></option>
                                    <option value="Hadir">Hadir</option>
                                    <option value="Tidak Hadir">Tidak Hadir</option>
                                </select>
                                <h1 className='my-2 text-white'>Jumlah</h1>
                                <select name='jumlah' id='jumlah' className='w-full text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none'>
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <h1 className='my-2 text-white'>Ucapan</h1>
                                <textarea className='w-full px-2 h-20 text-white bg-gray-700 bg-opacity-60 border-b-2 border-b-white rounded-none' />
                                <button className="mt-2 px-6 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow text-[10px] ">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SixthPage;
