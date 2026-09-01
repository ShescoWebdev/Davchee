import React from 'react'
import Button from '../common/Button'

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white fixed w-full z-10 top-0 p-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center justify-between w-full">
              
              <div className="flex items-center">
                <div className=" flex items-center ">
                <img className="
                h-[10rem] w-auto"
                 src="Logo1.png" 
                 alt="Logo" />
                 {/* <h1 className="text-xl font-bold text-[#0f4164]">Davechee</h1> */}
              </div>
              <div className=" sm:ml-6 sm:flex sm:space-x-8">
                <a href="/" className="border-b-2 border-[#0f65a3] text-[#0f4164] hover:border-[#fd7c02] hover:text-[#fd7c02] inline-flex items-center px-1 pt-1 text-sm md:text-2xl font-medium">
                  Home
                </a>
                <a href="/about" className="border-transparent text-[#0f4164] hover:border-[#fd7c02] hover:text-[#fd7c02] inline-flex items-center px-1 pt-1 text-sm md:text-2xl font-medium">
                  About
                </a>
                <a href="/services" className="border-transparent text-[#0f4164] hover:border-[#fd7c02] hover:text-[#fd7c02] inline-flex items-center px-1 pt-1 text-sm md:text-2xl font-medium">
                  Services
                </a>
                <a href="/contact" className="border-transparent text-[#0f4164] hover:border-[#fd7c02] hover:text-[#fd7c02] inline-flex items-center px-1 pt-1 text-sm md:text-2xl font-medium">
                  Contact
                </a>
              </div>
              </div>

              <Button />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
