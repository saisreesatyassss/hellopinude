import React from 'react'
import BusinessFeatures from './BusinessFeatures'

export default function Section2() {
  return (
    <section>
     <div className='max-w-[1300px] mx-auto my-10 p-'>  
        
        
        <h2 className='md:text-4xl  text-base font-bold max-w-[927px] mx-auto pt-5 text-center'>क्या आप उन स्थानीय ग्राहकों तक पहुँचने में असफल हो रहे हैं, 
        जो आपके ऑफ़र की तलाश कर रहे हैं?
       </h2>
        <p className='md:text-3xl text-sm text-center'>पिंट्यूड आपको बदलाव की ओर ले जाने के लिए तैयार है। 
        पिंट्यूड के साथ, आप पा सकते हैं -</p>
        
<div className='mt-9'>

  <BusinessFeatures/>
</div>
<div>

    
</div>


        </div>  
    </section>
  )
}
