import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        {/* <div>
            <img className="
                h-20 w-auto
                mt-20
                items-start
                "
                 src="Logo1.png" 
                 alt="Logo" />
        </div> */}
      <div className='items-center flex flex-col'>
        <h1 className="mt-40 text-3xl font-bold text-gray-900">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700">This is the home page content.</p>
      </div>
    </div>
  )
}
