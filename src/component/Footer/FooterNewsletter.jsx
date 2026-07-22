import React from 'react'
import Facebook from '../../assets/Icons/footer/Facebook.svg'
import Instagram from '../../assets/Icons/footer/Instagram.svg'
import Snapchat from '../../assets/Icons/footer/Snapchat.svg'
import Tiktok from '../../assets/Icons/footer/Tiktok.svg'
const FooterNewsletter = () => {
  return (
    <div className="text-center lg:text-left">
        <h3 className='font-bold text-lg'> Get Exclusive Deals in your Inbox</h3>
        <div className="flex mt-6 justify-center lg:justify-start">
            <input 
            type="email" 
            placeholder='youremail@gmail.com'
            className='bg-[#FC8A06 rounded-l-full px-3 py-6 w-full outline-none'
             />
            <button className="bg-[#FC8A06] w-[200px] text-white px-8 rounded-r-full">Subscribe</button>

        </div>
         <p className='text-xs mt-6'>we want spam, read our  

         <span className="underline">
          email policy
        </span>
            </p>
<div className="flex gap-5 mt-6 text-3xl text-[#03081F] justify-center lg:justify-start">            
    <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Snapchat} alt="snapchat" />
            <img src={Tiktok} alt="tiktok" />
        </div>
    </div>
  )
}

export default FooterNewsletter