"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const flags = [
    '/1.svg?height=50&width=80',
    '/2.svg?height=50&width=80',
    '/3.svg?height=50&width=80',
    '/4.svg?height=50&width=80',
    '/5.svg?height=50&width=80',
    '/6.svg?height=50&width=80',
    '/7.svg?height=50&width=80',
    '/8.svg?height=50&width=80',
    '/9.svg?height=50&width=80',
    '/10.svg?height=50&width=80',
    '/11.svg?height=50&width=80',
    '/12.svg?height=50&width=80',
  ]

const Hero = () => {
    const [duplicatedFlags, setDuplicatedFlags] = useState(flags)

  useEffect(() => {
    setDuplicatedFlags([...flags, ...flags])
  }, [])

  return (
    <div className='w-full min-h-[calc(100dvh-100px)] px-[20px] md:px-[60px] lg:px-[180px] py-[20px]'>
    <p className='text-[15px] font-poppins font-medium'>We&apos;re British AUC,</p>

    <p className='font-bold font-poppins text-[40px] '>Want to Study
    in Germany<span className='text-[#017ffe]'>?</span></p>
    <p className='text-[16px] font-roboto  font-medium mb-8'>Lets take the stress off you! We will get you into any university or <br />  college around the world.</p>

    <div className='flex w-full  h-[360px] items-center space-x-10'>
    <div className='w-full border-[5px] border-slate-100 rounded-[20px] h-full shadow-sm hero1' />
    <div className='w-full border-[5px] border-slate-100 rounded-[20px] h-full shadow-sm hero2' />
    <div className='w-full border-[5px] border-slate-100 rounded-[20px] h-full shadow-sm hero3' />
    </div>

<div className='mt-6 flex space-x-6 items-center'>
    <div className="flex space-x-4 items-center">
    <button className='py-[10px] px-[35px] rounded-3xl bg-[#017ffe] text-[#faf9fb] shadow-sm cursor-pointer text-[14px] font-poppins border-slate-300 font-semibold border'>Learn More</button>
    <button className='py-[10px] px-[35px] font-semibold rounded-3xl text-slate-800 shadow-sm cursor-pointer text-[14px] font-poppins border border-slate-600'>Register</button>
    </div>

    <p className='text-[14px] font-poppins'>We have helped over 1000 Nigerian students gain university admission <br /> in over 25 countries across the globe.

</p>
</div>
<div className="w-full flex items-center space-x-2 pt-4">
    <div className=' flex items-center space-x-3 justify-between w-fit'>
        <div>
        <div className='size-[16px] rounded-full border-4  border-[#a2cdf8f8]  bg-[#017ffe]'/>
        </div>
        <span className='w-full font-semibold text-[15px] font-poppins text-slate-800 leading-tight'>Partnered With</span>
    </div>

<div className="w-full overflow-hidden p-4 cursor-pointer">
      <div
        className="relative flex"
        style={{
          width: `${flags.length * 92 * 2}px`,
          animation: 'scroll 45s linear infinite',
        }}
      >
        {duplicatedFlags.map((flag, index) => (
          <Image
            key={index}
            src={flag}
            alt={`Flag ${index + 1}`}
            width={100}
            height={100}
            className="w-[90px] h-[60px] mx-3"
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
</div>
    </div>
  )
}

export default Hero
