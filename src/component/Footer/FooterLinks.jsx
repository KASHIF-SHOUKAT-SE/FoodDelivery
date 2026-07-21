import React from 'react'

const FooterLinks = ({title,links}) => {
  return (
    <div>
        <h3 className="font-bold text-lg mb-5">
            {title}
        </h3>
        <ul className="space-y-4">
            {
                links.map((link,index)=>(
                    <li 
                    key={index}
                    className="underline text-sm cursor-pointer"
                    >
                        {link}
                    </li>
                ))
            }
        </ul>
        </div>
  )
}

export default FooterLinks