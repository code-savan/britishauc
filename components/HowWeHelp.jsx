"use client"
// import Image from 'next/image'

import { useState } from 'react'

const helpContent = [
    {
        title: "Education and Career Counseling",
        content: `At British AUC's Free Application Centre, our highly qualified and experienced counsellors are dedicated to guiding you towards the right academic path and helping you make informed decisions about your future career.
    <br/>
   We understand that budget constraints can be a factor in studying abroad, and we strive to assist you in finding affordable universities that align with your financial resources.
    <br/>`,
    image: "/01.webp"
      },
  {
    title: "University and Visa Application Support",
    content: `We take pride in providing comprehensive support throughout the university/college application process. Our team will assist you in accurately completing application forms, ensuring that all relevant information is included to increase your chances of admission.
<br/>
   Additionally, we take full charge of your visa application, ensuring that the correct documents are prepared, the application fee is paid, and achieving an outstanding 100% success rate.`,
    image: "/02.webp"
  },
  {
    title: "Scholarship and Accommodation Arrangement",
    content: `At British AUC's Free Application Centre, we are committed to helping Nigerian students secure scholarships, whether they are need-based or athletic scholarships. We have established partnerships with institutions that offer generous scholarships, discounts, or bursaries.
<br/>
Additionally, we assist every student in finding high-quality accommodation options, ranging from university residential halls to private accommodations and host families, relieving students and parents from the stress of securing suitable housing near their chosen university.`,
    image: "/03.webp"
  },
  {
    title: "Passport, Visa and Travel Services",
    content: `Our dedicated team provides extensive assistance with essential travel documents and services. Whether you need assistance with procuring or renewing your international passport or require guidance with visitor visa applications or renewals for parents accompanying their child, we are here to support you throughout the process, ensuring a smooth and hassle-free travel experience.`,
    image: "/04.webp"
  },
  {
    title: "Liaising with University Officials and Pre-Departure Support",
    content: `British AUC's Free Application Centre regularly hosts officials from renowned universities and colleges at our application centers. This unique opportunity allows students and parents to interact directly with representatives from various countries, gaining valuable firsthand information about their study plans.
<br/>
Moreover, we provide pre-departure support, equipping students with vital information about transportation systems, climates, time zones, laws, cultures, money matters, and other important aspects of their chosen study destination, ensuring a well-prepared transition.
`,
    image: "/05.webp"
  },
  {
    title: "Ongoing Support while studying",
    content: `Our commitment to your success extends beyond your departure. Throughout your study journey, British AUC's Free Application Centre remains dedicated to providing continuous support and assistance.<br/> We are here to help you navigate any challenges, ensuring a smooth integration into your chosen college or university community. We strive to ensure that you have all the necessary help and resources to thrive academically and personally.
`,
    image: "/06.webp"
  }
]

const HowWeHelp = () => {
    const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='w-full px-[20px] md:px-[60px] lg:px-[180px] py-16 h-auto'>
        <div>
    <p className='font-poppins text-[30px] font-semibold text-center mb-4'>How We Can Help</p>
    <p className='font-poppins text-[14px] text-center mb-4 text-balance text-slate-700 font-medium'><span className='font-semibold'>BRITISH AUC</span> promises to offer a range of exceptional services tailored to meet your study abroad needs. Our expert team provides free visa and admission application support to universities worldwide. We will guide you through the intricate process, ensuring a seamless experience. Additionally, we offer up-to-date information on universities, scholarships, accommodations, and pre-departure assistance. Our personalized approach and proven track record will empower you to make informed decisions and embark on an exciting journey towards academic success and personal growth. Trust <span className='font-semibold'>BRITISH AUC</span>  to make your study abroad dreams a reality.
</p>
        </div>
    <div className="w-full pt-4">
    <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="md:w-2/6 h-fit">

            <nav className="flex flex-col space-y-2 border-l overflow-hidden shadow-gray-200 shadow-sm m-auto w-fit rounded-[20px] py-5">
              {helpContent.map((item, index) => (
                <button
                  key={index}
                  className={`text-[15px] text-left text-slate-700  font-semibold py-2 px-4 transition-colors ${
                    activeTab === index
                      ? ' text-slate-950 bg-gray-100'
                      : 'hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-[#faf9fb]'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
          <div className="md:w-4/6 h-fit">
            <div style={{
        backgroundImage: `url(${helpContent[activeTab].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className=" p-12 rounded-[30px] border-gray-100 border shadow-sm min-h-[420px] overflow-hidden relative flex items-end">
               <div className="size-full absolute bg-[#1b2230a8] top-0 left-0 " />

<div className='max-h-[200px] text-white absolute left-1/2 transform -translate-x-1/2 z-10 w-[90%] bottom-8' >

              <h4  className="text-[18px] font-semibold mb-1 w-[70%] text-white">{helpContent[activeTab].title}</h4>
              <p dangerouslySetInnerHTML={{ __html: helpContent[activeTab].content }} className=" transition-all duration-200 text-[13px] font-semibold"></p>
</div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default HowWeHelp
