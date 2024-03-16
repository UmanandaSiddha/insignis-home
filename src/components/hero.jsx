import React from 'react';

const Hero = () => {
    return (
        <div className='flex justify-center items-center mt-13'>
            {/* <div className='mt-16 animate-bounce animate-once mx-10 text-[8rem] font-semibold text-white'> */}
            <div className='flex flex-col items-center mt-16 mx-10'>
                <div className='flex text-[8rem] font-semibold text-white gap-3'>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>I</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>N</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>S</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>I</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>G</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>N</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>I</p>
                    <p className='hover:text-yellow-400 transition ease-in-out delay-20 hover:-translate-y-1.5 hover:scale-110 duration-100'>S</p>
                </div>
                <p className='font-semibold text-lg'>Extraordinary Growth with Science</p>
                <p>26 Feb - 28 Feb 2023 - Tezpur University</p>
            </div>
        </div>
    )
}

export default Hero;