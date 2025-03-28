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
              No More Complex Pricing,
              <br />
              One Price For All The Features
            </h2>
            <div className="rounded-[6px] max-w-[614px] my-6 mx-auto p-[1px] bg-gradient-to-r from-[#E0D55C] to-[#F67F60]">
            <div className="text-center  p-5 bg-white rounded-[6px]  max-w-[614px] w-full">
              <p className="text-sm md:text-2xl max-w-[558px] mx-auto">
                PinTude Offers An Affordable Annual Subscription For Only{" "}
              </p>

              <h2 className="md:text-4xl text-2xl  font-bold">₹500 per year</h2>


<div className="py-7 pt-10">
  <Link href={"https://quick.pintude.com"} 
   target="_blank" rel="noopener noreferrer"
   >
<button
   id="signup-button" 
   data-umami-event="Signup button" 
   className="mt-3 md:mt-5 text-white py-3 px-4 md:py-6 md:px-8 rounded-[57px] mx-auto text-xl md:text-2xl 
             shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] 
             bg-[#FF5E62] 
             hover:bg-[#FF5E62]/90 hover:shadow-[0_0_20px_rgba(255,100,100,0.6)] 
             focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 
             transition-all duration-300 ease-in-out transform hover:scale-105 
             w-[12rem] sm:w-auto "
>
  Signup Now
</button>
</Link>


              </div>
            </div>

</div>


<div className="flex flex-col gap-4 mt-12 text-left lg:flex-row custom-bullet max-w-[800px] mx-auto" >


    <div>

        <p className="">For this minimal investment, you can take
your business digital, establish
a strong online presence, and attract
more customers</p>
    </div>
    <div><p className="">The benefits far 
outweigh the cost, 
making it an excellent 
value for businesses 
looking to expand their 
reach in the digital 
space</p></div>


</div>
          </div>


        </div>
        </div>
      </div>
    </section>
  );
}
//hh