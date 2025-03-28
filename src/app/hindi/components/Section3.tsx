import React from 'react'
import CustomSection from "../../components/home/ui/CustomSection"
import img1 from '../../assests/local illustration 1.png'
import img2 from '../../assests/Idea_1 1.png'
import img3 from '../../assests/4045676 1.png'
import img4 from '../../assests/3556960 1.png'
import img5 from '../../assests/6285106 1.png'
export default function Section3() {
  return (
    <section>
 <div className='max-w-[1200px] mx-auto px-3  md:py-6'>

<h2 className='md:text-4xl  text-base font-bold pt-8 text-center md:pb-6 pb-1'>आपके व्यापार के लिए सभी आवश्यक सुविधाएँ</h2>
<h3 className='md:text-3xl text-sm text-center'>अपने व्यापार को आसानी से बढ़ाने और प्रबंधित करने के लिए 
उपकरणों को अनलॉक करें।</h3>


<CustomSection opp={false} imageSrc={img2.src} heading="किफायती और उपयोगी" para="सिर्फ ₹500 प्रति वर्ष में, आपको शक्तिशाली डिजिटल मार्केटिंग 
उपकरणों तक पहुंच मिलती है, जो आपके व्यापार की दृश्यता 
बढ़ाने में मदद करते हैं।" />

<CustomSection opp={true} imageSrc={img1.src} heading="अधिक स्थानीय ग्राहकों तक पहुँचें" para="पिंट्यूड आपके आसपास के लोगों को आपके व्यापार को ढूंढने में मदद 
करता है, जिससे अधिक लोग आपके पास आते हैं और बिक्री बढ़ती है" />


<CustomSection opp={false} imageSrc={img3.src} heading="स्थानीय व्यापारों के लिए अनुकूलित" para="पिंट्यूड, अन्य उपकरणों से अलग, छोटे और स्थानीय व्यापारों के 
लिए डिज़ाइन किया गया है, ताकि वे डिजिटल दुनिया में सफल हो सकें।" />

<CustomSection opp={true} imageSrc={img4.src} heading="सब कुछ एक ही डैशबोर्ड में" para="अपने व्यापार की लिस्टिंग, ग्राहक प्रतिक्रिया, प्रसारण और ऑफ़र तथा 
डील्स के बारे में अपडेट्स को हमारे आसान-से-नेविगेट डैशबोर्ड 
का उपयोग करके प्रबंधित करें" />


<CustomSection opp={false} imageSrc={img5.src} heading="आसान और सुविधाजनक" para="पिंट्यूड के साथ, छोटे व्यापार से लेकर बड़ी शाखाओं तक, आप 
अपनी ऑनलाइन उपस्थिति को बिना किसी कठिनाई के संभाल सकते हैं।" />

 </div>

      
    </section>
  )
}
