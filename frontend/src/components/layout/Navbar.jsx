import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
      <nav ref={navRef} className="bg-white fixed w-full z-10 top-0 pt-3 pb-4 md:p-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
                        : 'border-transparent text-[#0f4164] hover:border-[#fd7c02] hover:text-[#fd7c02]'
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
              className="sm:hidden relative w-8 h-6 flex-shrink-0
              cursor-pointer transition-all duration-300 ease-in-out
              "
            >
              <span
                className={`absolute left-0 w-full h-1 bg-[#0f4164] rounded transition-all duration-300 ease-in-out ${
                  isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#0f4164] rounded transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 w-full h-1 bg-[#0f4164] rounded transition-all duration-300 ease-in-out ${
                  isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
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
                        : 'border-transparent text-[#0f4164] hover:border-[#fd7c02] hover:text-[#fd7c02]'
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