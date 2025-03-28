"use client"
import Image from "next/image"; 
import hero from '../../assests/heroImg.svg'
import pink from '../../assests/Group 698.svg'
import React, { memo } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import HeaderButton from "../../components/home/ui/headerButton";
import Link from "next/link";

const handleClick = async () => {
  try {
       // Sending the POST request to track button click analytics
      await axios.post('https://api.reportzai.com/api/call-analytics');
      // // alert('Button click recorded successfully!');

  } catch (error) {
      // console.error('Error recording button click:', error);
      // alert('Failed to record button click');
  }
};

 
const HeroContent = memo(() => (
  <div className=" max-w-[734px]">
    <h1 className="font-m md:pt-6 md:text-[54px] md:leading-[70px] text-base font-bold md:mb-5 mb-2 ">
    डिजिटल सफलता की <br/>
    ओर कदम बढ़ाएं।
    </h1>
    <p className="font-light md:text-3xl text-xs">
    आज ही अपना व्यापार ऑनलाइन ले जाएं. 
चाहे आप एक छोटी दुकान चलाते हों या एक 
बड़ा उद्यम, हम आपको स्मार्ट एआई डिजिटल 
टूल्स प्रदान करते हैं, जो आपके ग्राहकों से जुड़ने 
और व्यापार बढ़ाने कोबेहद आसान और कम 
मेहनत वाला बना देते हैं।    </p>
<div className="pt-5"/>
<Link href="https://quick.pintude.com" target="_blank" rel="noopener noreferrer">
<button
      type="button"
      // onClick={handleClick}
      data-umami-event="Signup Button Hindi" 
      className="mt-5 rounded-full py-3 px-4 md:py-6 md:px-8 bg-black text-white font-semibold md:font-bold text-sm sm:text-xl md:text-2xl 
                 shadow-[0_0_20px_rgba(255,100,100,0.5)] 
                 hover:bg-black/90 hover:shadow-[0_0_25px_rgba(255,100,100,0.6)] 
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 
                 transition-all duration-300 ease-in-out
                 transform hover:scale-105
                 w-[10rem] sm:w-auto"
    >
      अभी रजिस्टर करें
</button>
</Link>

  </div>
));

HeroContent.displayName = "HeroContent";

export default function HeroSection() {
  return (
    <section className="pb-7 pt-2">
      <div className="max-w-[1327px] mx-auto p-2">
        <div className="flex  items-center lg:flex-row">
          <div className="lg:w-[60%] w-full relative">
            <HeroContent />
            <Image src={pink} alt="digital connection " className="md:w-auto w-[42px] absolute bottom-0 right-0 z-[-1] " priority={true}/>

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
