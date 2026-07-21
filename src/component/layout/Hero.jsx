import React from 'react'
import Herogirl from '../../assets/Images/Herosection/Heroimage1.svg'
import shadow from '../../assets/Images/Herosection/shadow.svg'
const Hero = () => {
  return (
    <>
        <section className="w-full mt-4 lg:mt-8">
<div className="max-w-[1528px] lg:h-[425px] mx-auto px-4 lg:px-0">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1023] lg:max-w-[1228px] lg:ml-5 min-h-[420px] lg:h-[485px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center  min-h-[420px] lg:h-[485px]">

            {/* Left Content */}

            <div className="px-6 py-10 text-center lg:text-left lg:px-14 lg:py-0">

              <p className="text-gray-300 text-sm mb-5">
                Order Restaurant food, takeaway and groceries.
              </p>

              <h1 className="text-white font-bold leading-tight text-[42px] sm:text-5xl lg:text-6xl">

                Feast Your Senses,

                <br />

                <span className="text-[#FC8A06]">
                  Fast and Fresh
                </span>

              </h1>

              <p className="text-gray-400 mt-12 mb-4">
                Enter a postcode to see what we deliver
              </p>

              <div className="flex w-full max-w-[420px] h-[60px] bg-white rounded-full overflow-hidden mx-auto lg:mx-0">

                <input
                  type="text"
                  placeholder="e.g EC4R 3TE"
                  className="flex-1 px-6 outline-none"
                />

<>
  <button className="hidden lg:block bg-[#FC8A06] text-white w-[640px] font-semibold">
    Search
  </button>

  <button className="lg:hidden bg-[#FC8A06] w-[60px] flex items-center justify-center text-white text-2xl">
    →
  </button>
</>

              </div>

            </div>

            {/* Right Content */}

           <div className="relative hidden lg:flex justify-center items-end h-full">

              {/* Orange Background */}

              <div className="absolute right-0 bottom-0 w-[85%] h-full bg-[#FC8A06] rounded-l-full"></div>

              {/* Girl */}

              <img
                
                src={shadow}
                alt=""
                className="relative z-10 h-[410px] mr-100"
              />
              <img
                
                src={Herogirl}
                alt=""
                className="relative z-10 right-177 h-[410px] "
              />

              {/* Notification 1 */}

              <div className="absolute top-25 right-8 bg-white rounded-xl p-4 shadow-xl z-20 w-[270px]">

                <h3 className="font-bold">
                  Order Received
                </h3>

                <p className="text-sm text-gray-500">
                  Awaiting Restaurant acceptance
                </p>

              </div>

              {/* Notification 2 */}

              <div className="absolute top-59 right-17 bg-white rounded-xl p-4 shadow-xl z-20 w-[270px]">

                <h3 className="font-bold">
                  Order Accepted
                </h3>

                <p className="text-sm text-gray-500">
                  Your order will be delivered shortly
                </p>

              </div>

              {/* Notification 3 */}

              <div className="absolute bottom-10 right-10 bg-white rounded-xl p-4 shadow-xl z-20 w-[270px]">

                <h3 className="font-bold">
                  Rider is nearby
                </h3>

                <p className="text-sm text-gray-500">
                  They're almost there — get ready!
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Hero

