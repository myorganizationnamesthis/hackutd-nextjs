import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useUser } from '../firebase/useUser'

export function Navbar() {
  const { user, logout } = useUser()
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <div className=' w-full mt-2 text-black'>
      <div className='container mx-auto px-8 py-4 flex items-center justify-between bg-white rounded-md'>
        {/* Left Nav */}
        <div>
          <div className='flex items-center justify-center font-semibold gap-x-8 hover:text-primary'>
            <div className='relative group py-2'>
              <button
              // onMouseEnter={() => setShowMegaMenu(true)}
              // onMouseLeave={() => setShowMegaMenu(false)}
              >
                Products
              </button>
              {/* Dropdown */}
              <div className='absolute top-5 -left-8 transition group-hover:translate-y-1 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform'>
                <div className='container relative top-6 p-6 bg-white rounded-b-xl shadow-xl w-screen'>
                  <div className='w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mid Nav */}
        <Link
          href='/'
          className='font-bold text-primary text-xl hover:text-secondary '
        >
          CONNEQT
        </Link>

        {/* Right Nav */}
        <div className='flex flex-row items-center gap-x-8 font-semibold'>
          <Link href='/about' className='hover:text-primary'>
            About
          </Link>
          <Link href='/contact' className='hover:text-primary'>
            Contact
          </Link>
          <Link
            href='/auth'
            className='rounded-xl font-medium px-6 py-2 bg-primary text-white flex items-center hover:bg-secondary'
          >
            {user ? "Logout" : "Login"}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-primary duration-300'
            >
              <Link href='/#gallery'>About</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-primary duration-300'
            >
              <Link href='/work'>Contact</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-primary duration-300'
            >
              {user ? (
                <div onClick={logout}>Logout</div>
              ) : (
                <Link href='/contact'>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
