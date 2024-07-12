import React from 'react'
import HeroImage from '@/public/hero.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='mt-10 mb-10'>
        <div className='xl:mx-20 rounded-[62px] hero-main-border p-10 mx-2'>
            <div className='w-[100%] xl:flex text-white flex-row'>
                <div className='xl:w-[60%] xl:my-14 my-4'>
                    <h1 className='font-bold xl:text-[80px] text-[40px] xl:text-start text-center xl:w-[800px] leading-tight '>Shop Our Stunning Shoe Collection</h1>
                    <p className='xl:text-[20px] text-[16px] xl:w-[600px] xl:text-start text-center  mt-5'>We believe that every step you take should be a statement of confidence and individuality. Our meticulously crafted footwear blends timeless elegance with modern innovation.</p>
                    <div className='flex gap-4 mt-7 xl:justify-start justify-center'>
                        <div className='bg-white rounded-[48px] w-fit h-fit py-3 px-5'>
                            <span className='text-black font-bold'>Buy now</span>
                        </div>
                        <div className='border-[1px] border-[#908d8d] rounded-[48px] w-fit h-fit py-3 px-5'>
                            <span className='text-white font-bold'>Explore</span>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[40%] flex justify-center pb-10 xl:pb-0'>
                    <div className='' >
                        <Image src={HeroImage} alt='' width={0} height={0} className='xl:w-[450px] xl:h-[450px] w-[280px] h-[280px] mx-auto'/>
                        <div className='boxshadow'>123</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero