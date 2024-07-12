"use client"
import React, { useState } from 'react'
import Logo from '@/public/logo.png'
import Image from 'next/image'

const Navbar = () => {
    const [active, setActive] = useState('Home');
  return (
    <div>
        <div className='justify-between flex mt-5 xl:mx-20 mx-2'>
            <div className='bg-white w-fit h-fit rounded-full'>
                <Image src={Logo} alt='Logo' width={70} height={70} />
            </div>
            <div className='text-[20px] text-white xl:flex gap-5 my-auto hidden'>
                <span 
                    className="flex flex-col relative cursor-pointer"
                    onClick={() => setActive('Home')}
                >
                    Home
                    <span className={` ${active === "Home" ? "absolute inset-0 flex items-center justify-center mt-3 " : "hidden"} `}>_</span>
                </span>
                <span 
                    className="flex flex-col relative cursor-pointer"
                    onClick={() => setActive('About Us')}
                >
                    About Us
                    <span className={` ${active === "About Us" ? "absolute inset-0 flex items-center justify-center mt-3 " : "hidden"} `}>_</span>
                </span>
                <span 
                    className="flex flex-col relative cursor-pointer"
                    onClick={() => setActive('Testimonials')}
                >
                    Testimonials
                    <span className={` ${active === "Testimonials" ? "absolute inset-0 flex items-center justify-center mt-3 " : "hidden"} `}>_</span>
                </span>
                <span 
                    className="flex flex-col relative cursor-pointer"
                    onClick={() => setActive('Contact Us')}
                >
                    Contact Us
                    <span className={` ${active === "Contact Us" ? "absolute inset-0 flex items-center justify-center mt-3 " : "hidden"} `}>_</span>
                </span>
            </div>
            <div className='bg-white rounded-[48px] w-fit h-fit py-3 px-5'>
                <span className='text-black font-medium'>Sign up</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar