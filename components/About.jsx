import Image from 'next/image'
import React from 'react'

const About = ({about}) => {
  return (
    <div className='bg-[#f6f6f6] w-full px-[20px] md:px-[60px] lg:px-[180px] py-16 h-auto'>
        {
            about ?
            <p className='font-poppins text-[30px] font-semibold text-center mb-4'>Meet <span className='text-[#017ffe]'>British AUC</span> </p>
            :
            <p className='font-poppins text-[30px] font-semibold text-center mb-4'>Who We Are</p>
        }
        <div className="flex w-full space-x-4 items-center">
<div className="flex-1 p-10 rounded-md">
<div className="w-[550px] h-[360px] bg-[#017ffea7] relative rounded-[10px] shadow-sm">
<Image src={"/about.webp"} alt='about' className='rounded-[10px] absolute -right-3 -bottom-4 shadow-sm' width={550} height={500} />
</div>
</div>


<div className="flex-1 py-10 space-y-5">
        {
    about ?
    <p className='font-poppins text-slate-700 text-[15px]'>
        <span className='font-semibold text-slate-800'>BRITISH AUC</span> is a leading organization that offers comprehensive support for students aspiring to study abroad. Our expert team assists students throughout the entire process, providing free visa and admission application services to universities worldwide. With a proven track record, we have successfully guided thousands of students to renowned universities and colleges across the globe.
    </p>
    :
    <p>
        <span className='font-semibold text-slate-800'>BRITISH AUC</span>  is a Free Visa and Admission Application Centre that support admission and visa application to universities and countries around the world for <span className='italic text-slate-800'>WHOLLY FREE OF CHARGE.</span>
    </p>
}


{
    about ?
    <p className='font-poppins text-slate-700 text-[15px]'>
        We offer a one-stop shop, providing up-to-date information on universities, scholarships, accommodations, and pre-departure support. Our personalized guidance ensures a seamless and stress-free experience. At <span className='font-semibold text-slate-800'>BRITISH AUC</span>, we are committed to helping students make informed decisions, unlock their potential, and embark on a transformative journey towards a brighter future.


    </p>
    :
    <p className='font-poppins text-slate-700 text-[15px]'>
    <span className='font-semibold text-slate-800'>BRITISH AUC&apos;s</span>   Free Application Centre is a one-stop shop for all your study abroad support services. Our application centres have helped thousands of international students study in universities and colleges in the <span className='italic text-slate-800'>UK, USA, Canada, Australia, Ireland, Germany, Turkey, Cyprus,</span> etc.
    </p>
}

    <button className='py-[10px] px-[35px] rounded-3xl bg-[#017ffe] text-[#faf9fb] shadow-sm cursor-pointer text-[14px] font-poppins font-semibold border-slate-300 border'>Speak to an Advisor</button>
</div>
        </div>
        </div>
  )
}

export default About
