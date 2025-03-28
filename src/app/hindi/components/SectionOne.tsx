import Image from "next/image"
import img from "../../assests/500 rs.svg"
import arow from "../../assests/arow.svg"


import createBiz from "../../assests/create biz page.svg"
import showCase from "../../assests/showcase services.svg"

export default function BusinessLanding() {
  return (
    <div className="bg-[#F8F9DE] px-4 md:px-6 py-3 md:py-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center    md:py-10">
          <h2 className="text-sm md:text-5xl font-bold mb-3 md:mb-4">
          स्थानीय ग्राहकों द्वारा खोजे जाएं
          </h2>
          <p className="text-xs md:text-2xl  mb-4">
          अपने आसपास के ग्राहकों को जोड़ें और अपनी सेवाओं 
          का विस्तार करें।
          </p>
        </div>

    

        <div className="grid grid-cols-2 gap-3 md:gap-8">
          <div className="bg-white rounded-lg shadow-md col-span-2 flex items-center w-full max-w-[1013px] mx-auto">
          <div className=" flex  items-center gap-4 w-full max-w-[830px] mx-auto md:py-10  p-4">
            <div className="mr-4">
              <Image
                src={img}
                alt="Business Page Icon"
                className="md:w-[170px] w-[80px]"
              
              />
            </div>
            <div className="text-center">
            <h2 className="text-sm md:text-4xl font-bold mb-2">
            ₹500 प्रति साल में व्यापार को ऑनलाइन लाएं
            </h2>
            <p className="text-[12px] md:text-3xl font-light mb-4">
            आपके व्यापार की पहुंच बढ़ाने के लिए सभी 
टूल्स के साथ किफायती मूल्य।.
            </p>
            <a href="https://pintude.com/" target="_blank" className=" text-[#FF5E62] md:text-[14px] text-[10px] md:text-2xl font-semibold  ">
            और जानें <Image
                src={arow}
                alt="Business Page Icon"
                className="inline ml-3 md:w-auto w-3"
               
              />
            </a>
          </div>
          </div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 items-center bg-white rounded-lg shadow-md md:py-10 p-4">
            <div className="md:mr-4">
              <Image
                src={createBiz}
                alt="Services Icon"
                className="md:w-[140px] w-[50px]"
              />
            </div>
            <div className="text-center">
              <h3 className="text-[16px] md:text-3xl font-semibold mb-1">
              व्यापार पेज तैयार करें
              </h3>
              <p className="text-[12px] md:text-2xl ">
              अपने पेशेवर व्यापार पेज को जल्दी और 
              आसानी से सेट करें.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:flex-row flex-col bg-white rounded-lg shadow-md md:py-10 p-4">
            <div className="md:mr-4">
              <Image
                src={showCase}
                alt="Connect Icon"
                className="md:w-[140px] w-[50px]"
                
              />
            </div>
            <div className="text-center">
              <h3 className="text-[16px] md:text-3xl font-semibold mb-1 ">
              अपने दिए सेवाओं को दर्शाए
              </h3>
              <p className="text-[12px] md:text-2xl ">
              जो आपके व्यापार को खास बनाता है, 
उसे प्रमुख बनाएं और ग्राहकों को आकर्षित करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

