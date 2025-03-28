import React from 'react'
import NewsletterSection from './NewsletterSection'
import logo from '../../assests/PinTude_Logo_v4_Transparent 1.png'
import Image from 'next/image';
import Logo from './ui/Logo';
export default function Footer() {

    const shareLinks = {
        facebook:
          "https://www.facebook.com/sharer/sharer.php?u=https://hellopintude.com?utm_source=facebook&utm_medium=social&utm_campaign=pre_launch",
        twitter:
          "https://twitter.com/intent/tweet?url=https://hellopintude.com?utm_source=twitter&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!",
        instagram:
          "https://www.instagram.com/?url=https://hellopintude.com?utm_source=instagram&utm_medium=social&utm_campaign=pre_launch",
        linkedin:
          "https://www.linkedin.com/shareArticle?mini=true&url=https://hellopintude.com?utm_source=linkedin&utm_medium=social&utm_campaign=pre_launch",
        email:
          "mailto:social@pintude.co.in?subject=Join+PinTude+Pre-Launch&body=Check+out+PinTude:+https://hellopintude.com?utm_source=newsletter&utm_medium=email&utm_campaign=pre_launch",
        sms: "sms:?&body=Check+out+PinTude:+https://hellopintude.com?utm_source=sms&utm_medium=sms&utm_campaign=pre_launch",
        telegram:
          "https://telegram.me/share/url?url=https://hellopintude.com?utm_source=telegram&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!",
      };

  return (
    <footer>
      <div className="max-w-[1200px] py-9 mx-auto ">

{/* <NewsletterSection/> */}
<div className='py-8 my-5 max-w-[1120px] mx-auto border-footer '>
<p className='text-xl text-center p-4'>We Are Here To Help You at Every Step 
Give us a missed call and our representatives will get back to you with information and personalized support.</p>
<p className='text-xl font-medium text-center'>Made in India <br/>For India❤️</p>
</div>

<div className="grid grid-cols-1 place-items-center pt-5 lg:place-items-start md:grid-cols-3 gap-8 mt-10">
          
          <div className=" md:col-span-1 relative top-[12px] h-[146px] ">
             <Image className='invisible' src={logo} alt='logo'/> 

            <Logo/>
          </div>

          
          <div className='hidden lg:block'>
           
          </div>

         
          {/* <div className='max-w-[200px] w-full'>
          <h3 className=" text-xl font-semibold  mb-8">Company</h3>
            <ul className="space-y-1 text-base font-light footer-ul">
              <li>
                <a href="#" className=" ">Home</a>
              </li>
              <li>
                <a href="#" className=" ">About us</a>
              </li>
              <li>
                <a href="#" className=" ">Careers</a>
              </li>
              <li>
                <a href="#" className=" ">Contact Us</a>
              </li>
            </ul>
          </div>

         
          <div className='max-w-[200px] w-full '>
            <h3 className=" text-xl font-semibold  mb-8">Information</h3>
            <ul className="space-y-1 text-base font-light footer-ul">
              <li>
                <a href="#" className=" ">My Account</a>
              </li>
              <li>
                <a href="#" className=" ">Blogs</a>
              </li>
              <li>
                <a href="#" className=" ">Help</a>
              </li>
            </ul>
          </div> */}
          
          
<div className="mb-6 flex items-center h-full ">
<p className='text-base'>Copyright © 2024 Pintude, All Rights Reserved.</p>
                
              </div>

        </div>
<div>


</div>

      </div>
    </footer>
  )
}
