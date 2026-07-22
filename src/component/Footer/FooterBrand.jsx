import React from 'react'
import logo from '../../assets/Icons/mainnav/LOGO 1.svg'
import Appstore from '../../assets/Images/Addpromo/appstore.png'
import Playstore from '../../assets/Images/Addpromo/playstore.svg'
const FooterBrand = () => {
  return (
  <div className="text-center lg:text-left">

      <img
        src={logo}
        alt="Order uk"
        className="w-[220px] mx-auto lg:mx-0"
      />

      <div className="flex justify-center lg:justify-start gap-3 mt-6">
        <img
          src={Appstore}
          alt="App store"
          className="w-[135px] h-10"
        />

        <img
          src={Playstore}
          alt="Google play"
          className="h-10"
        />
      </div>

      <p className="text-sm mt-6 text-[#03081F]">
        Company #490039, Registered With
      </p>

      <span>
        House of Companies
      </span>

    </div>

  )
}

export default FooterBrand