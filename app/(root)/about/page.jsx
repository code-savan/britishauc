import React from 'react'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Footer from '@/components/Footer'
import Image from 'next/image'

const teamList = [
    {
        key: 1,
        img: "/collins.png",
        name: "Collins Onyeaji",
        role: "Senior Director - Programmes"
    },
    {
        key: 2,
        img: "/collins.png",
        name: "Vitalis Nwaogu",
        role: "Chairman - Board of Directors"
    },
    {
        key: 3,
        img: "/collins.png",
        name: "Rachel Borland",
        role: "Director - Business Partnerships"
    },
    {
        key: 4,
        img: "/david.png",
        name: "David Hobson",
        role: "Director - Quality Assurance"
    },
    {
        key: 5,
        img: "/collins.png",
        name: "Doris Okoro",
        role: "Director - Visas & Compliance"
    },
    {
        key: 6,
        img: "/collins.png",
        name: "Patience Ikpor",
        role: "Senior Manager - Recruitment"
    },
]


const page = () => {
  return (
    <div>
        <About about={true} />
        <div className='w-full px-[20px] md:px-[60px] lg:px-[180px]'>
            {/* <hr className='mb-3 mt-5' /> */}

            <div className='flex items-center space-x-2 mb-12 mt-5'>
                <div className='size-[15px] bg-[#017ffe] rounded-full' />
                <p className='text-[13px] font-poppins font-medium'>MEET THE TEAM</p>
            </div>

            <p className='text-[50px] font-semibold font-poppins leading-tight mb-10'>People behind <br />
           <span className='text-[#017ffe]'>British AUC</span>.</p>

{/* team  */}
           <div className='w-full flex flex-wrap items-start gap-16 justify-center  mb-16'>
            {teamList.map((team) => (
                <div key={team.key} className='w-[220px]'>
                    <div className='size-[220px] rounded-full mb-4 bg-[#f6f6f6] overflow-hidden'>
                    <Image src={team.img} alt='' width={300} height={300} className='bg-bottom shadow-sm' />
                    </div>

                    <p className='uppercase mb-1 text-center font-[600] text-[10px] text-[#017ffe] w-[70%] mx-auto'>
                    {team.role}
                    </p>
                    <p className='uppercase font-bold text-center text-[20px]'>
                    {team.name}
                    </p>
                </div>
            ))}
           </div>

        </div>
           <WhyUs />
        <Footer />
    </div>
  )
}

export default page
