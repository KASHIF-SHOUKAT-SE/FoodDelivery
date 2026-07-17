import React from 'react'
import FooterBrand from './FooterBrand'
import FooterNewsletter from './FooterNewsletter'
import FooterLinks from './FooterLinks'
import FooterBottom from './FooterBottom'
const Footer = () => {
  return (
    <>
    <footer className="bg-[#EDEDED] mt-16">
  <div className="max-w-[1528px] mx-auto px-4 py-12">

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
      <FooterBrand />

      <FooterNewsletter />

      <FooterLinks
        title="Legal Pages"
        links={[
          "Terms and condition",
          "Privacy",
          "Cookies",
          "Modern Slavery Statement",
        ]}
      />

      <FooterLinks
        title="Important Links"
        links={[
          "Get help",
          "Add your restaurant",
          "Sign up to deliver",
          "Create a business account",
        ]}
      />
    </div>
    

  </div>
  <FooterBottom/>
</footer>
    </>
  )
}

export default Footer