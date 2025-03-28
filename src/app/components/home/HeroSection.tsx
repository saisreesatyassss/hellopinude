"use client";
import Image from "next/image";
import hero from "../../assests/heroImg.svg";
import pink from "../../assests/Group 698.svg";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import HeaderButton from "./ui/headerButton";
import Link from "next/link";

// const handleClick = async () => {
//   try {
//     // Sending the POST request to track button click analytics
//     await axios.post("https://api.reportzai.com/api/call-analytics");
//     console.log('Button click recorded successfully!');
//     // // alert('Button click recorded successfully!');
//   } catch (error) {
//     // console.error('Error recording button click:', error);
//     // alert('Failed to record button click');
//   }
// };

const HeroContent = memo(() => (
  <div className=" max-w-[734px]">
    <h1 className="font-m md:pt-6 md:text-[54px] md:leading-[70px] text-base font-bold md:mb-5 mb-2 ">
      Step Into The
      <br />
      Digital Revolution.
    </h1>
    <p className="font-light md:text-3xl text-xs">
      Take your business online today. Whether you're a small shop or a large
      enterprise, we provide smart AI digital tools to grow and connect with
      customers effortlessly with less effort from you{" "}
    </p>
    <div className="pt-5" />
    {/* <HeaderButton className="mt-5 shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] rounded-[57px] py-5 md:px-7 px-4 bg-black md:text-2xl text-sm font-bold text-white md:inline hidden hover:bg-black/90 transition-colors duration-200">
        Sign Up Now
      </HeaderButton> */}
      <Link href="https://quick.pintude.com" target="_blank" rel="noopener noreferrer">

<button
      type="button"
      // onClick={handleClick}
      data-umami-event="Signup button" 
      className="mt-5 rounded-full py-3 px-4 md:py-6 md:px-8 bg-black text-white font-semibold md:font-bold text-sm sm:text-xl md:text-2xl 
                 shadow-[0_0_20px_rgba(255,100,100,0.5)] 
                 hover:bg-black/90 hover:shadow-[0_0_25px_rgba(255,100,100,0.6)] 
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 
                 transition-all duration-300 ease-in-out
                 transform hover:scale-105
                 w-[10rem] sm:w-auto"
    >
      Sign Up Now
</button>
</Link>
    {/* <a href="tel:+91 82373 58619" className=" mt-5 shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] rounded-[57px] button py-3 md:px-7 px-4 bg-black md:text-2xl text-sm font-bold text-white md:hidden inline  ">
                 <svg className=" inline mr-2 md:w-[30px] w-4 md:h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.08-.21c1.12.45 2.34.69 3.6.69.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C10.29 22.5 1.5 13.71 1.5 2.99 1.5 2.44 1.95 1.99 2.5 1.99h3.59c.55 0 1 .45 1 1 0 1.25.24 2.48.69 3.6.17.42.08.91-.22 1.22l-2.2 2.2z"/></svg>
                 Miss-call Now
                 </a> */}
  </div>
));

HeroContent.displayName = "HeroContent";

export default function HeroSection() {
  return (
    <section className="pb-7 pt-2">
      <div className="max-w-[1327px] mx-auto p-2">
        <div className="flex  items-center lg:flex-row">
          <div className="lg:w-[60%] w-full  relative">
            <HeroContent />
            <Image
              src={pink}
              alt="digital connection "
              className="md:w-auto w-[42px] absolute bottom-0 right-0 z-[-1] "
              priority={true}
            />
          </div>
          <div className="lg:w-[40%] w-full  ">
            <Image
              src={hero}
              alt="Local business digital connection hero image"
              className="w-full "
              // Optimized from 1000 to actual display size
              priority={true}
              quality={85} // Slightly reduced quality for better performance
              placeholder="blur" // Add blur-up placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAABJRU5ErkJggg==" // Custom blur-up placeholder
            />
          </div>
        </div>
      </div>
    </section>
  );
}
