"use client";

import React from 'react'
import DesBanner from '../../assests/Group 316.png'
import HeaderButton from './ui/headerButton'
import call from '../../assests/Call.png'
import axios from 'axios';
import Typewriter from './ui/TypeWrighter';

export default function HeroSection() {
  
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
 
  return (
    <section className='relative'>
        <div className="hero-image">
          <img className="w-screen hidden lg:block" src={DesBanner.src} />
          <div className='flex justify-between'>
          <img className="w-auto h-[100px] block lg:hidden" src={DesBanner.src} />
          
          </div>
        </div>
        <div className="hero-content relative  py-4 lg:py-10 px-5 lg:bg-transparent md:bg-transparent md:p-6  bottom-0 lg:absolute">
          <div className="grid grid-cols-1 py-0 md:py-10 lg:py-0">
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>
                  <Typewriter/>
                   Business Owners</h1>
              <h2 className="banner-sub-heading lg:text-7xl text-3xl font-bold  max-w-[720px] mx-auto">Step Into The Digital World with PinTude</h2>
              <h3 className="banner-heading text-2xl mt-5 mb-8">
              Smart Solutions. Affordable Prices. Future Ready.
              </h3>


        {/* <a     onClick={handleClick}
                onTouchStart={handleClick} href="tel:+91 82373 58619"  className="rounded-2xl button py-4 px-6 bg-black text-sm text-white inline lg:hidden  " >
              
        <svg className='inline mr-3' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="30" width="30" height="30" transform="rotate(-90 0 30)" fill="url(#pattern0_150_51)"/>
  <defs>
    <pattern id="pattern0_150_51" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use href="#image0_150_51" transform="scale(0.02)"/>
    </pattern>
    <image id="image0_150_51" width="50" height="50" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO3ZvWsUQRgH4IkERFGDIBoRPxBEECzEYGMTq4iFoqBN/gGb5B+wUkxlEwtBrMTaIo0E7ERQG7UxCtoEDGIhgooS48cj666Q4rKzd97tzcE+9S7MD2bnfefdEBqNRqPRAezACZzHBPaEQYG9uIwFrT3F6ZAqHMAd/FTNPEZCKrABV/Fd+xYwmkKIY3jt/zzBcL8CDOESfuiOi/0IsQVzuut5P06kl7rvc50hDuGt3rhR50f9oQcBPmIK6+oIMY5PXQ7wq6g523seoAhxDsuRRf3GIr5WDPEQR2oJUIS4UKFKL+F48fxWzJYcyUuYzI7uOkOcwUokxCPsbPHuQdxf9dwKrmNzbQGKhUxU2E53sT5SME9iGvtqDVAs4Ci+RELc7ltLUQX2430kxLVa93iHbcerSIhbqYcYKvZ8mbmkt1Om6GJjp9OaH3YSMBY5Zt9hV0gZNuJNpGL/LXZJw0xkSy2G1MkHBbE79res7Qgpk3eeVcyGVMlveVVHNlkDeDikCFe050GShdDaE8Ayp0KCs9hOTIeUyK+t7VruSyteBmc7CDITUiO/NLUju55uCqnB7jaDTIZUyf9PVJ12pHfs/pP9ZKk4dxoLqcO9SJCbYRBgBC9KxpjbwqCQF8fHLYJMhUGD4ewnC55lo/1sKl7LQLnRaDTCKn8ACe5K+aGW5lkAAAAASUVORK5CYII="/>
  </defs>
</svg>

Give us a Missed Call Now
              
        </a>

      
<HeaderButton className="rounded-2xl button py-4 px-6 bg-black text-white lg:inline  hidden  ">

<img className='inline mr-3' src={call.src}/>
Give us a Missed Call Now</HeaderButton> */}

            </div>
          </div>
        </div>
      </section>
  )
}
