'use client'

import Image from 'next/image'
import { useState } from 'react'
import insta from "../../assests/Group 112.svg"
import link from "../../assests/Group 113.svg"
import twitter from "../../assests/Group 114.svg"
import axios from 'axios'
export default function Footer2() {
  const [mobileNumber, setMobileNumber] = useState("");
  const formatMobileNumber = (mobileNumber: string): string => {
    // Remove +91, 91, and leading 0, if present
    return mobileNumber
      .replace(/[^\d]/g, "")
      .replace(/^\+91[\-\s]?/, "") // Remove +91 with optional - or space
      // .replace(/^91/, "") // Remove 91 if it's at the start
      .replace(/^0/, "") // Remove leading 0
      .slice(-10); // Ensure the result is only the last 10 digits
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    if (!formatMobileNumber(mobileNumber) || formatMobileNumber(mobileNumber).length < 10 || formatMobileNumber(mobileNumber).length > 11) return;
    await axios
      .post("https://api.reportzai.com/hellopintudenotify", {
        number: formatMobileNumber(mobileNumber),
      })
      .then((res) => {
        setMobileNumber("");
      })
      .catch((err) => {
        console.log(err);
        setMobileNumber("");
      });
  };

  return (
    <footer className="bg-[#1C1C1C] text-white pt-12 ">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="md:text-6xl text-xl font-bold mb-4">अपडेटेड रहें!</h2>
        <p className="md:text-3xl text-sm mb-8">
        अपना मोबाइल नंबर दर्ज करें और सबसे पहले जानें 
        जब हमारा ऐप लॉन्च हो.
        </p>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex  sm:flex-row px-3 max-w-[800px] mx-auto relative">
            <input
              type="tel"
              aria-label="Phone Number"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="मोबाइल नंबर..."
              className="flex-1 md:h-[90px] h-[50px] px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="md:px-8 bg-gradient-to-r from-[#F97F51] to-[#F9C051]  relative left-[-15px] px-2 py-3 md:text-2xl text-xs rounded-lg font-semibold text-white  hover:opacity-90 transition-opacity"
            >
              सूचित करें!
            </button>
          </div>
        </form>

        <div className="text-center mb-8">
          <p className="text-gray-300 text-xs">
            Made in India
            <br />
            for India ❤️
          </p>
        </div>

        
      </div>

      <hr className='border-b border-[#FFFFFF]'/>

      <div className="flex max-w-[1300px] mx-auto text-left py-5  sm:flex-row justify-between items-center gap-4 text-gray-400 md:text-sm text-[8px]">
          <p>Copyright © 2024 PinTude, All Rights Reserved.</p>
          
          <div className="flex gap-2 md:gap-6">
            <a 
            id="linkedin-button" data-umami-event="linkedin button"
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://hellopintude.com?utm_source=linkedin&utm_medium=social&utm_campaign=pre_launch" 
             target='_blank'
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Image alt='linkden' src={insta} className='md:w-auto w-5'/>
            </a>
            <a 
            id="facebook-button" data-umami-event="facebook button"
              href="https://www.facebook.com/sharer/sharer.php?u=https://hellopintude.com?utm_source=facebook&utm_medium=social&utm_campaign=pre_launch" 
              target='_blank'
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Image alt='facebook' src={link} className='md:w-auto w-5'/>
            </a>
            <a 
            id="twitter-button" data-umami-event="twitter button"
              href="https://twitter.com/intent/tweet?url=https://hellopintude.com?utm_source=twitter&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!" 
              target='_blank'
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
               <Image alt='twitter' className='md:w-auto w-5' src={twitter}/>
            </a>
          </div>
        </div>
    </footer>
  )
}

