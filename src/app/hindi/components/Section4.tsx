import Link from "next/link";
import React from "react";

export default function Section4() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto md:my-10">
        <div className="mx-4">
        <div className="shadow-xl px-5 py-14 rounded-md">
          <div className="text-center">
            <h2 className="md:text-5xl text-xl font-semibold text-center mb-5">
            अब कोई उलझन भरा मूल्य निर्धारण नहीं, <br/>
            सभी सुविधाएं एक ही कीमत पर।
              <br />
        
            </h2>
<div className="rounded-[6px] max-w-[614px] my-6 mx-auto p-[1px] bg-gradient-to-r from-[#E0D55C] to-[#F67F60]">
            <div className="text-center w-full p-5 bg-white rounded-[6px] max-w-[614px] ">
              <p className="text-sm md:text-2xl max-w-[558px] mx-auto">
              पिंट्यूड प्रदान करता है एक 
किफायती वार्षिक सब्सक्रिप्शन 
केवल
              </p>

              <h2 className="md:text-4xl text-2xl font-bold">₹500 per year</h2>


<div className="py-7 pt-10">
              <Link href={"https://quick.pintude.com"} 
   target="_blank" rel="noopener noreferrer"
   >
<button
   id="signup-button" 
   data-umami-event="Signup Button Hindi" 
   className="mt-3 md:mt-5 text-white py-3 px-4 md:py-6 md:px-8 rounded-[57px] mx-auto text-xl md:text-2xl 
             shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] 
             bg-[#FF5E62] 
             hover:bg-[#FF5E62]/90 hover:shadow-[0_0_20px_rgba(255,100,100,0.6)] 
             focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 
             transition-all duration-300 ease-in-out transform hover:scale-105 
             w-[12rem] sm:w-auto "
>
अभी रजिस्टर करें
</button>
</Link>
              </div>
            </div>

            </div>


<div className="flex flex-col gap-4 mt-12 text-left lg:flex-row custom-bullet max-w-[800px] mx-auto" >


    <div>

        <p className="">इस छोटे से निवेश के साथ, आप अपने व्यापार को डिजिटल बना सकते हैं, 
अपनी ऑनलाइन पहचान बढ़ा सकते हैं और अधिक ग्राहकों को आकर्षित 
कर सकते हैं।</p>
    </div>
    <div><p className="">यह निवेश कम लागत में अधिक लाभ देता है, जो इसे डिजिटल दुनिया में 
अपने व्यापार का विस्तार करने वाले व्यापारों के लिए अत्यधिक लाभकारी 
बनाता है।</p></div>


</div>
          </div>


        </div>
        </div>
      </div>
    </section>
  );
}
