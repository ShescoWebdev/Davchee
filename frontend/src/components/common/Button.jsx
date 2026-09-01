import React from 'react'

export default function Button() {
  return (
    <div>
      <button className=" 
      bg-[#052e4b] 
      font-bold 
      text-[#fd7c02] 
      hover:bg-[#142531] 
      py-2 px-4 rounded
      cursor-pointer
      ">
      Contact Us 
      <img src="/arrow1.gif" alt="Logo" className="w-6 h-6 inline-block ml-2"/>
      </button>
    </div>
  )
}
