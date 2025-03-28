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
        <div className="md:text-2xl text-base font-semibold pt-10">अपनी डिजिटल प्रतिष्ठा 
        को बढ़ावा दें</div>
        <p className="mt-2 md:text-2xl text-xs">
        अब अपनी व्यापार जानकारी को सही रखना 
और भी आसान हो गया है, पिंट्यूड 
अकाउंट बैज के साथ।इससे आपके पेज पर 
आने वाले ऑनलाइन ट्रैफिक से अधिक 
विश्वास मिलेगा।      </p>
      </div>



       {/* Feature 3 */}
       <div className="flex  max-w-[330px] relative mx-auto flex-col items-center bg-[#FFDFE0] rounded-lg shadow-lg p-1 text-center">
      <img src={icon2.src}  className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 md:w-auto w-[68px]' />
        <h3 className="md:text-2xl text-base font-semibold pt-10">ग्राहक संख्या बढ़ाएं</h3>
        <p className="mt-2 md:text-2xl text-xs">
        अपने व्यापार में अधिक ग्राहकों को लाने 
के लिए, ऑनलाइन खोजों को असल में 
परिवर्तित करें, अपने स्टोर पर 
ट्रैफिक बढ़ाएं।      </p>
      </div>

      {/* Feature 2 */}
      <div className="flex max-w-[330px] relative w-full mx-auto flex-col items-center bg-[#FFDFE0] rounded-lg shadow-lg p-1 text-center">
       <img src={icon3.src} className='absolute top-[-50px] left-1/2 transform -translate-x-1/2 md:w-auto w-[68px]'  />
        <h3 className="md:text-2xl text-base font-semibold pt-10">स्थानीय पहचान को 
        और बढ़ाएं</h3>
        <p className="mt-2 md:text-2xl   text-xs mx-auto">
        अपने व्यापार को पिंट्यूड ऐप पर दिखाएं, 
जहां ग्राहक अपने इलाके में सेवाएं और 
उत्पाद ढूंढ रहे हैं।      </p>
      </div>

     
    </div>
  );
};

export default BusinessFeatures;
