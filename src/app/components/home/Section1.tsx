"use client"

import React, { Profiler } from 'react'
import promo from '../../assests/Rectangle 7.png'
import Image from 'next/image'
import HeaderButton from './ui/headerButton'
import axios from 'axios';


import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaTelegramPlane,
  } from "react-icons/fa";
  import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import Promo from './ui/Promo';
export default function Section1() {

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
    <section>
        <div className='max-w-[1200px] mx-auto my-10 p-6'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 place-content-center">
      <div className=" p-4 ">
        <h2 className='font-bold text-4xl mb-6'>Who are we and what do<br className='lg:inline hidden'/> we offer?</h2>

        <p className='italic'>PinTude is a digital platform that helps businesses, whether small local shops, home-grown brands, home based businesses or big multi-location brands, get noticed online and attract more customers.

</p><p className='italic'>
Think of it as an online version of your business card with
maps that makes it easier for people nearby to find your
business when they search for services or products.</p><p>

PinTude helps customers discover you online and encourages
them to visit your store in person.
</p>

<p className='py-4'><a    onClick={handleClick}
                onTouchStart={handleClick}   href="tel:+91 82373 58619"  className=" shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] text-xs rounded-2xl button py-4 px-6 bg-black text-white inline lg:hidden " >
              
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

              <HeaderButton className="shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] rounded-2xl button py-4 px-6 bg-black text-white lg:inline hidden ">
              <svg className=" inline mr-2 w-[30px] h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.08-.21c1.12.45 2.34.69 3.6.69.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C10.29 22.5 1.5 13.71 1.5 2.99 1.5 2.44 1.95 1.99 2.5 1.99h3.59c.55 0 1 .45 1 1 0 1.25.24 2.48.69 3.6.17.42.08.91-.22 1.22l-2.2 2.2z"/></svg>
              Give us a Missed Call Now
              </HeaderButton></p>
<p className='italic'>
Tell Your Friends and Family who are in Business / Professional Services about Pintude</p>

<div className="mt-6 ">
                
                <p className="mt-2 text-base"><svg className='inline mr-3' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="15" height="15" fill="url(#pattern0_30_114)"/>
  <defs>
    <pattern id="pattern0_30_114" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use href="#image0_30_114" transform="scale(0.02)"/>
    </pattern>
    <image id="image0_30_114" width="50" height="50" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA9JJREFUaEPtmc+PFEUUx7+ve7PrLGh2wemqmWw2kZsRgggEOBA0QFBMjBfxykX/Bw7gukSDcIITBgJXAhe4YGI0Go5CFhJj/HFxD+tsv150x2hkSe/UgyK9yTD2THexbE9ns3XqpF5XvU99X9WrH4RVUmiVcGANpGxKrimyAop4SqkjRHRURLYBGAXQAPDN4++zzPxjrz5LoYjWuioi1wDs6+KsEZHJKIomAUiaTd9B6vX68OLi4i0i2p6lsohMRFH0aSlBtNaTInI8CyKpN8aY7XNzc/c67futyIBSigFsyAlizS4y80elAtFa7xSRHxwgrOnvzLypVCBKqfcA3HAEecjML5QKpFar7TXG3HIEYWbWpQEJguAQEU0A2O0IcpOZ3+07SALwCYA9jgBPzInoSBiGNuc8VQpbtZYLkHj9LTMfTEuKKw6SAcAictrzvJ9F5AqAl3qodNv3/cONRuN+oQkxD8DAwMD5RqPxn3VMKfUKgFMA3gcw2ObsfRE5Nzw8fGZ6enqhG2geRfxqtXrQ9/39IlIH8CcRTS0sLFxvNpvNzoZdATr/HxkZGalUKluMMaOe5zVmZ2fvAmhlzaeeIEnCugzgtZSGmiJyLIqi87ZuuQBZjmbVdwXRWr8pIjcBVDIauQTg1S6r0JM50B5CWQ49a30qiJV3aGjoNwDVZ2y4MIAl/1JBgiA4QUSp2+UMsMIBeoIopewEe91Rjc983/98aRVy/HfZ5qmKKKX+BbDOpXURORRF0dcu/zxP224g/wBY79JRKUG01lPJBYALS/lCKwiC40RkD/qupVyTPVl+f7V5zpUksS8cqFdC3CciX+VIiDbz24SYdq4oDKjnFqVWq+0wxtjMvSVFmflki/KlratWq297nmfPGX0ByrNp9IIgOADgABHZTeNfInInjuMb8/Pzf3cCLhdofHx8NI7jzcaYDUQ0G4bhFIDFrBDPA5LVRmq9K5BSapOIfPF4Z20vJNq38Xbgzg0ODp6emZl50M2ZFQNZ6jAPkOd5vyQHqxd7jNod3/ffKfxg5RhyeVX/jpn39+Wo+7yBiOjDMAyvdra74qHVbaiTkLPXQbvyymHtbEqIouhwaUCsI1prm6u+dwEBEDGzKhXIqrkyXTWX2ADss0IIYKNDeF1g5o9LFVrJPJkQEbu1yVNaRLQ1DMOfSgcyNjZWiePY3sjvyCKxwMk74v9M+7b8tntSr9dfbrVaNje81QWmlTyGniztY2ib46S1/sAYc5SI3kiep/+wz9NEdDYtnNqhS6FIVkjlqV8DyTNKRdqsKVLkaOfp6xEN5MtCDUsqbwAAAABJRU5ErkJggg=="/>
  </defs>
</svg>
Share on</p>
<div className="mt-6 ">
                
                <div className="flex mt-4 space-x-4">
                  {/* Facebook */}
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"/></svg>
                  </a>
                  {/* Twitter */}
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
                   </a>
                  {/* LinkedIn */}
                  <a
                    href={shareLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                  </a>
                  {/* Email */}
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>                  </a>
                  {/* SMS */}
                  <a
                    href={shareLinks.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
  <svg
    width="48px" height="48px"
    viewBox="0 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="23" fill="url(#pattern0_30_118)" />
    <defs>
      <pattern
        id="pattern0_30_118"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#image0_30_118" transform="matrix(0.0207692 0 0 0.0234783 -0.0384616 -0.0869565)" />
      </pattern>
      <image
        id="image0_30_118"
        width="50"
        height="50"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA01JREFUaEPtWE1IFVEU/s6MFga1iDc/vJ7thKDoZ1ObIHBZBFHUziAohEpokZSVIYUUWBAklNCi2oVUGyGCNkFtWlnkLlqUPO4dRaKooHHeqSu+mMZ5b0bnB7G523vP953v/N2ZS1ghi1aIDhRCllsmi4wUGckoAiu/tAzD2KFp2kEAHQC0jAIZF9YD8KFWqz2empoaDzMKzYht2+eYeRCAHpcpp3MeEfUJIYaCfAuEWJbVCeAFsGzvmBoRdQohXvrFLBBi2/YDZj6aU4SXRMPM9x3HOdZUiGEY2zVNGwGwc0ks2RuNE1G3EOJNUyHzm5ppmseJSNXiuux9i8Xwg4iuCCFuAFDN/89qOn5LpVJZ1/VbAA7Hosru0Jiu66eq1eqnRhSx7hHLsvYDGAawMTtfQ5GrzNznOM7DKN4FQkzT7CeiESml4zculUprdV2/CuB0DmNZlc6w53n909PT3/x+WJZlMnO34zjKl78rbPy+B7Dhz4kBKeVtADW/QQ7DILSZ1XVgmmYXEd0EIKWUW+II2Tx/6PX8hJgIpDaLYdCwmQ3D6NA07S4AdcepNbFYIcrIBXAHwAUp5fdAuZVbWlquM3NXVA1H7Ic2c6VSaZudnVVfGecBrPZhLElI3f4jM590HOd50KkEw6BKRGeEEKNBTNu29zCzysKmkCAkElLHG2XmHsdxpJ+gXC6v8TzvMoCzMYaB6rt7ruv2zszMfPXjVCqV9a7rXgNwoslnUipCFO+XBMMgTjOXIkoxNSF1nsUMg8U0c1TLpS5EEf4CMNTa2jo4OTn5M1Bu7Z7nqREOXdd7qtXq50AZtbmuexFAL4BVUd6n1exRPA2HQZhhRDNHcWWSkSBp6DCoH4rZzMtCSKNh4L+Zo5p52QiZc4SIXjHz3G8pEfUy8+4oD2Pu51JaMX1JdKwQkih8GRgXGckgqIkgi4wkCl8Gxv9XRt4C2JpBFNOEfCel3OYHDHt8eArgQJqsaWMR0RMhxKGmQmzb3sfMY2mTp4lHRHuFEM+aClGblmWpN6NLaZKnhMXzz6YDQbyGL42WZe0ioiPM3J6SE4lgiEj9lD0KPl7XQWM9mSbyICfjQkhOgY5NU2QkdqhyOlhkJKdAx6ZZMRn5DWcmiEKIxqRpAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
                  </a>
                  {/* Telegram */}
                  <a
                    href={shareLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </div>
              </div>
              </div>
      </div>
      <div className=" p-4 flex items-center">
<Promo/>
        {/* <Image src={promo} alt='promo'/> */}
      </div>
    
    </div>

        </div>
      
    </section>
  )
}
