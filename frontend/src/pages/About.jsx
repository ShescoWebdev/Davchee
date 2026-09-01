import React from 'react'
import Loader from '../components/common/Loader'

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="mt-28 md:mt-48 text-3xl font-bold text-gray-900">About Us</h1>
      <p className="text-lg text-gray-700">Welcome to our about page!</p>

      <Loader />
    </div>
  )
}
