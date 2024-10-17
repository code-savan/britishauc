"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CircleArrowRight, GraduationCap, Headset, Library, Volleyball } from 'lucide-react'

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronDown, ChevronUp, FileText, Grid, Headphones, PlayCircle, Users, Phone } from 'lucide-react';


// const Nav = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const toggleDropdown = () => setIsOpen(!isOpen);

//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//           setIsOpen(false);
//         }
//       };

//       document.addEventListener('mousedown', handleClickOutside);
//       return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex">
//               <div className="flex-shrink-0 flex items-center">
//                 <span className="text-2xl font-bold">🚀 Spark</span>
//               </div>
//               <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                 <div className="relative inline-flex items-center px-1 pt-1 text-sm font-medium" ref={dropdownRef}>
//                   <button
//                     onClick={toggleDropdown}
//                     className="inline-flex items-center text-gray-700 hover:text-gray-900"
//                   >
//                     Overview
//                     {isOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
//                   </button>
//                   {isOpen && (
//                     <div className="absolute top-full left-0 w-64 mt-2 bg-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out opacity-100">
//                       <div className="p-4">
//                         <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                           <FileText className="mr-2 h-4 w-4" /> Overview
//                         </a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                           <Grid className="mr-2 h-4 w-4" /> App integrations
//                         </a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                           <Headphones className="mr-2 h-4 w-4" /> Support Center
//                         </a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                           <PlayCircle className="mr-2 h-4 w-4" /> Tutorials
//                         </a>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                           <Users className="mr-2 h-4 w-4" /> Community
//                         </a>
//                       </div>
//                       <div className="border-t border-gray-100 p-4">
//                         <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Contact</h3>
//                         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
//                           <Phone className="mr-2 h-4 w-4" /> Call us
//                         </a>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Solutions
//                 </a>
//                 <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Resources
//                 </a>
//                 <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                   Pricing
//                 </a>
//               </div>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:items-center">
//               <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
//                 Sign in
//               </button>
//               <button className="ml-3 px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800">
//                 Get started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
// }

// export default Nav


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (isOpen) {

      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimatingOut(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAnimatingOut(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsAnimatingOut(false);
        }, 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

    return (
        <nav className=" py-5 flex justify-between items-center relative px-[20px] md:px-[60px] lg:px-[180px]">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={120} height={120} />
      </Link>

      <div className="flex items-center space-x-6 cursor-pointer text-gray-700">
        <ul className="flex space-x-3 text-[14px] font-satoshi">
          <li><Link href={"/about"}>About Us</Link></li>
          <li><Link href={"/services"}>Services</Link></li>
        </ul>
        <button
          className="size-[35px] rounded-full bg-white shadow-sm flex items-center justify-center transition-all duration-300"
          onClick={toggleMenu}
        >
          <div className=" relative size-[10px] m-auto space-y-[2px]">
            <div
              className={` w-[7px] h-[1.4px] rounded-full bg-slate-800 mx-auto transition-all duration-300 ${
                isOpen
                  ? 'rotate-45 bottom-1/2 -translate-y-1/2 w-[12px] absolute'
                  : 'rotate-0 translate-y-0 top-0'
              }`}
            />
            <div
              className={` w-[10px] h-[1.4px] rounded-full bg-slate-800 mx-auto  transition-all duration-300 ${
                isOpen ? 'opacity-0 hidden' : 'opacity-100'
              }`}
            />
            <div
              className={` w-[7px] h-[1.4px] rounded-full bg-slate-800 mx-auto transition-all duration-300 ${
                isOpen
                  ? '-rotate-45 bottom-1/2 -translate-y-1/2 w-[12px] absolute'
                  : 'rotate-0 translate-y-0 bottom-0 '
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute top-[75%] right-0 mt-2 w-[900px] h-[235px] bg-white text-slate-700  transition-all duration-300 ease-in-out transform origin-top-right shadow-md cursor-pointer flex items-center ${
            isAnimatingOut ? "scale-90 opacity-0" : "scale-100 opacity-100"
          }`}
        >
            {/* left  */}
         <div className='w-[68%] h-full p-5 space-y-3'>
         <div className='flex items-center space-x-3 w-full h-[120px] border'>
            {/* uk  */}
          <div className="w-1/3 h-full nav1 shadow-md">
          <div className="size-full bg-[#121721c2] flex justify-end flex-col p-2">

          <div className="flex space-x-1">

            <p className='text-white font-bold text-[20px] font-poppins leading-tight'>
          Study in <br /> the UK
            </p>
            <CircleArrowRight className='-rotate-45 text-white' />
          </div>
            <p className='text-white text-[10px] font-poppins leading-tight'>
          Check out the schools available to Study in UK today
            </p>

          </div>
          </div>
          {/* usa  */}
          <div className="w-1/3 h-full nav2 shadow-md">
          <div className="size-full bg-[#121721c2] flex justify-end flex-col p-2">

          <div className="flex space-x-1">

            <p className='text-white font-bold text-[20px] font-poppins leading-tight'>
          Study in <br /> the USA
            </p>
            <CircleArrowRight className='-rotate-45 text-white' />
          </div>
            <p className='text-white text-[10px] font-poppins leading-tight'>
          Check out the schools available to Study in USA today
            </p>

          </div>
          </div>
          {/* canada  */}
          <div className="w-1/3 h-full nav3 shadow-md">
          <div className="size-full bg-[#121721c2] flex justify-end flex-col p-2">

          <div className="flex space-x-1">

            <p className='text-white font-bold text-[20px] font-poppins leading-tight'>
          Study in <br /> Canada
            </p>
            <CircleArrowRight className='-rotate-45 text-white' />
          </div>
            <p className='text-white text-[10px] font-poppins leading-tight'>
          Check out the schools available to Study in Canada today
            </p>

          </div>
          </div>
         </div>
          <div className='w-full bg-white h-fit py-1 flex space-x-4'>
            {/* blog  */}
          <button className='bg-[#faf9fb] w-full p-2  flex items-center justify-between shadow-sm hover:scale-105 transition-all duration-300'>
          <div className='flex items-center space-x-2'>
          <div className='flex items-center justify-center bg-white size-[40px]'>
          <Library className='size-6'/>
          </div>
          <div className='flex flex-col items-start leading-tight'>
          <span className='text-[15px] font-semibold'>
            Blog
          </span>
          <span className='text-[6px] text-slate-600 text-left font-semibold'>
            Reach out to us via email or one  of  our <br /> social handles
          </span>

          </div>
          </div>

          <ArrowRight className='size-5 -rotate-45'/>
            </button>

            {/* events  */}
          <button className='bg-[#faf9fb] w-full p-2 flex items-center justify-between shadow-sm hover:scale-105 transition-all duration-300'>
          <div className='flex items-center space-x-2'>
          <div className='flex items-center justify-center bg-white size-[40px]'>
          <GraduationCap className='size-6' />
          </div>
          <div className='flex flex-col items-start leading-tight'>
          <span className='text-[15px] font-semibold'>
            Events
          </span>
          <span className='text-[6px] text-slate-600 text-left font-semibold'>
            Reach out to us via email or one  of  our <br /> social handles
          </span>

          </div>
          </div>

          <ArrowRight className='size-5 -rotate-45'/>
            </button>
          </div>



         </div>







         {/* right  */}
         <div className='w-[32%] bg-[#eeedee] h-full p-5 space-y-3 flex flex-col justify-center'>
         <button className='bg-white w-full p-2 flex items-center justify-between hover:scale-105 transition-all duration-300'>
          <div className='flex items-center space-x-2'>
          <div className='flex items-center justify-center bg-[#faf9fb] size-[40px]'>
          <Headset className='size-5' />
          </div>
          <div className='flex flex-col items-start leading-tight'>
          <span className='text-[15px] font-semibold'>
            Contact Us
          </span>
          <span className='text-[6px] text-slate-600 text-left font-semibold'>
            Reach out to us via email or one  of  our <br /> social handles
          </span>

          </div>
          </div>

          {/* <ArrowUpRight className='size-5' /> */}
            </button>
         <button className='bg-white w-full p-2 flex items-center justify-between hover:scale-105 transition-all duration-300'>
          <div className='flex items-center space-x-2'>
          <div className='flex items-center justify-center bg-[#faf9fb] size-[40px]'>
          <Volleyball className='size-5' />
          </div>
          <div className='flex flex-col items-start leading-tight'>
          <span className='text-[15px] font-semibold'>
            Sports
          </span>
          <span className='text-[6px] text-slate-600 text-left font-semibold'>
            Check out our Sports Page for more info <br /> on football academys
          </span>

          </div>
          </div>

          <ArrowUpRight className='size-5' />
            </button>
         </div>
        </div>
      )}

    </nav>
    )
}


export default Nav
