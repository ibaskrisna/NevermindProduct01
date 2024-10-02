import React from 'react';

const Hero: React.FC = () => {
      return (
        <div className="min-h-screen justify-center">
            <div className="text-center text-white">
                <h1 className="text-sm pt-[50px] font-sans ">You're Invited to</h1>
                <h1 className="text-2xl mb-2 font-belgiano">The Wedding of</h1>
                <h2 className="text-5xl mb-4 font-edensor font-[2px]">Yoga <span className='font-abigail'>&</span> Irma</h2>
                <p className="text-md mb-4 font-belgiano">Monday, 10 September 2024</p>

                <p className="text-xl mb-2 pt-[180px] italic font-belgiano">Dear,</p>
                <p className="text-2xl mb-4 italic font-edensor">Nama Tamu</p>
                <p className="text-[12px] mb-1 italic font-edensor">We apologize if there any misspelling title or name</p>
                <p className="text-[12px] mb-4 italic font-edensor">Mohon maaf jika ada kesalahan penyebutan gelar atau nama.</p>
                {/* <Countdown targetDate={targetDate} /> */}
                <button className="mt-2 px-2 py-1 bg-white text-gray-800 opacity-80 font-semibold rounded-xl shadow">Open Invitation</button>
            </div>
        </div>
    );
};

export default Hero;
