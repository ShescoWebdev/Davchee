import React from 'react'
import Button from '../components/common/Button'

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="mt-28 md:mt-48 text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="text-lg text-gray-700">Get in touch with us!</p>

      <div className="mt-10 md:mt-40 flex flex-col items-center">
        <Button />
      </div>
    </div>
  )
}
