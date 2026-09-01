import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AlignRight, X } from 'lucide-react'
import Button from '../common/Button'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div>
      <nav ref={navRef} className="bg-gray-200 fixed w-full z-10 top-0 pt-3 pb-4 md:p-14 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" >
            <div className="flex items-center space-x-[-1.2rem] md:space-x-[-3rem]">
              <img className="
              sm:h-12 
              h-20 
              md:h-[10rem] 
              w-auto" 
              src="Logo1.png" 
              alt="Logo" />

              <h1 className="text-xl md:text-5xl font-bold text-[#08253a]">Davechee</h1>
            </div>
            </NavLink>

            {/* Desktop view */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 text-sm md:text-2xl font-medium border-b-2 ${
                      isActive
                        ? 'border-[#0f65a3] text-[#0f4164]'
                        : 'border-transparent text-[#0f4164] hover:border-[#bc6412] hover:text-[#bc6412]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button />
            </div>

            {/* Mobile hamburger toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="sm:hidden ml-auto relative w-8 h-8 flex-shrink-0 cursor-pointer"
            >
              <AlignRight
                className={`absolute inset-[-0.5rem] w-10 h-10 text-[#0f4164] transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`absolute inset-0 w-10 h-10 text-[#0f4164] transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </button>
          </div>

          {/* Mobile view */}
          {isOpen && (
            <div className="sm:hidden flex flex-col space-y-2 mt-4 pb-4 border-t border-gray-300 pt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-1 text-lg font-medium border-b-2 w-fit ${
                      isActive
                        ? 'border-[#0f65a3] text-[#0f4164]'
                        : 'border-transparent text-[#0f4164] hover:border-[#bc6412] hover:text-[#bc6412]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2">
                <Button />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}