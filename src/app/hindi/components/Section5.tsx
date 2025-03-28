"use client";
import Image from "next/image";
import React from "react";
import coin from "../../assests/pikaso_texttoimage_one-piece-10gm-gold-coin-and-100-pieces-10gm-silve 1.png";
import { HeadManagerContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";
import HeaderButton from "../../components/home/ui/headerButton";
import axios from "axios";
import Link from "next/link";
export default function Section5() {
  const handleClick = async () => {
    try {
      // Sending the POST request to track button click analytics
      await axios.post("https://api.reportzai.com/api/call-analytics");
      // // alert('Button click recorded successfully!');
    } catch (error) {
      // console.error('Error recording button click:', error);
      // alert('Failed to record button click');
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#E0D55C] to-[#F67F60]">
      <div className="max-w-[1200px] md:py-9 py-4 mx-auto ">
        <div className="mx-2">
          <div className=" px-5 md:py-14 py-5 rounded-[30px] text-center max-w-[1300px] text-white mx-auto">
            <h2 className="md:text-5xl text-xl font-bold  md:mb-5 mb-2">
              हमारी विशेष लॉन्च ऑफर<br className="md:hidden inline"></br>
              (सीमित समय के लिए)
            </h2>

            <p className=" md:text-3xl text-xs font-light mx-auto md:mb-5 mb-2">
              100 भाग्यशाली विजेता एक चांदी का सिक्का जीत सकते हैं, और एक मुख्य
              विजेता 10 ग्राम सोने का सिक्का जीतने का मौका पाएंगे।
            </p>

            <div className="px-1 bg-white rounded-xl text-black py-8 max-w-[567px] mx-auto">
              <Image
                className="inline mb-4 md:w-[227px] w-[114px]"
                src={coin}
                alt="coin"
              />
              <p className="py-5 md:text-2xl text-xs">
                पिंट्यूड पर
                <span className="font-bold italic text-[#FF5E62]">
                  {" "}
                  60 दिनों
                </span>{" "}
                के भीतर साइन अप करें, अपने व्यापार को रजिस्टर करें, भुगतान करें
                और पुष्टि करें, और सीधे ड्रॉ में भाग लें!
              </p>
              <div className="mt-6">
                <Link
                  href="https://quick.pintude.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    // onClick={handleClick}
      data-umami-event="Signup Button Hindi" 
                    className="mt-0 md:mt-5 rounded-[57px] py-3 px-3 bg-black text-white font-semibold text-xs 
             shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] 
             hover:bg-black/90 hover:shadow-[0_0_20px_rgba(255,100,100,0.6)] 
             focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 
             transition-all duration-300 ease-in-out
             transform hover:scale-105
             w-[17rem] sm:w-[30rem] sm:text-xl "
                  >
                    आज ही रजिस्टर करें और जीतने का मौका पाएं!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
