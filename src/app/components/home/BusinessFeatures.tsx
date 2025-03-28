import React from 'react';
import icon1 from '../../assests/Group 709.svg'
import icon2 from '../../assests/Group 714.svg'
import icon3 from '../../assests/Group 708.svg'
const BusinessFeatures = () => {
  return (
    <div className="grid md:grid-cols-3 pt-10 grid-cols-2 flex-col lg:flex-row gap-6 md:gap-4 p-2 ">
      {/* Feature 1 */}
      <div className="flex max-w-[330px] md:col-span-1 col-span-2  mb-12  md:mb-0 mx-auto relative flex-col items-center bg-[#FFDFE0] rounded-lg shadow-lg p-1 text-center">
        <img
          src={icon1.src} // Update this with the actual path of the uploaded image
          alt="Feature 1"
          // Adjust size as needed
          className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 md:w-auto w-[68px]'
        />
        <div className="md:text-2xl text-base font-semibold pt-10">Boost Local<br/>
        Visibility</div>
        <p className="mt-2 md:text-2xl text-xs">
        Get your business discovered on the PinTude app by customers actively searching for products and services in the area you operate in.       </p>
      </div>



       {/* Feature 3 */}
       <div className="flex  max-w-[330px] relative mx-auto flex-col items-center bg-[#FFDFE0] rounded-lg shadow-lg p-1 text-center">
      <img src={icon2.src}  className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 md:w-auto w-[68px]' />
        <h3 className="md:text-2xl text-base font-semibold pt-10">Online Reputation<br/> Management</h3>
        <p className="mt-2 md:text-2xl text-xs">
        Easily keep your business
information accurate with
the PinTude Account Verification
Badge, gain better trust from
online search traffic that visits
your business page.        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex max-w-[330px] relative w-full mx-auto flex-col items-center bg-[#FFDFE0] rounded-lg shadow-lg p-1 text-center">
       <img src={icon3.src} className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 md:w-auto w-[68px]'  />
        <h3 className="md:text-2xl text-base font-semibold pt-10">Increase Foot <br/>Traffic</h3>
        <p className="mt-2 md:text-2xl   text-xs mx-auto">
        Drive more people to
visit your store in person,
turning online searches into
real-world visits.        </p>
      </div>

     
    </div>
  );
};

export default BusinessFeatures;
