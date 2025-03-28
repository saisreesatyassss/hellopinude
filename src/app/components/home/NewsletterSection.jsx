import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-gray-900 max-w-[842px] mx-5 lg:mx-auto text-white p-6 rounded-[28px] shadow-md lg:flex-row flex flex-col items-center">
      <div className='lg:w-[50%] w-full'>
          <h2 className="text-xl font-normal mb-2 max-w-[361px] ">
            Subscribe To Our Newsletter To Always Be Updated
          </h2>
          <p className="text-sm text-[#787878] font-normal mb-4">Instant Notification</p>
          </div>
          <div className="lg:w-[50%]  w-full ">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow w-[70%] p-2 rounded-[17px] border border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[17px] text-white px-4 py-2 hover:opacity-90 transition duration-200 relative mt-5 lg:mt-0 md:left-[-32px] lg:left-[-32px]">
              Subscribe
            </button>
            <p className="text-sm text-[#787878] font-normal mt-2">We Will Not Spam You</p>
      </div>
      
    </div>
  );
};

export default NewsletterSection;
