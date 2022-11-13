import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useUser } from '../firebase/useUser'
import Card from './Card'

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
    <>
      <div className='z-10 fixed w-full mt-2 text-black '>
        <div className='container mx-auto px-8 py-4 flex items-center justify-between bg-white rounded-md'>
          {/* Left Nav */}
          <div className='hidden md:flex'>
            <div className='flex items-center justify-center font-semibold gap-x-8 hover:text-primary'>
              <div className='relative group py-2'>
                <button
                // onMouseEnter={() => setShowMegaMenu(true)}
                // onMouseLeave={() => setShowMegaMenu(false)}
                >
                  Products
                </button>
                {/* Dropdown */}
                <div className='absolute top-5 -left-8 transition group-hover:translate-y-1 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform '>
                  <div className='flex flex-col items-center space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 justify-items-center content-center container relative top-6 p-6 bg-white rounded-b-xl shadow-xl w-screen'>
                    <Card
                      header={'Conneqt Card'}
                      price={'40'}
                      logoUrl={'/conneqt_card.png'}
                      width={'400'}
                      height={'320'}
                    />
                    <Card
                      header={'Conneqt Tag'}
                      price={'20'}
                      logoUrl={'/conneqt_tag.png'}
                      width={'200'}
                      height={'200'}
                    />
                    <Card
                      header={'Conneqt Ring'}
                      price={'80'}
                      logoUrl={'/conneqt_ring.png'}
                      width={'150'}
                      height={'50'}
                    />
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
            <Link href='/about' className='hover:text-primary hidden md:flex'>
              About
            </Link>
            {user ? (
              <Link
                href='/dashboard'
                className='hover:text-primary hidden md:flex'
              >
                Dashboard
              </Link>
            ) : (
              ''
            )}

            {user ? (
              <div
                onClick={() => logout()}
                className='rounded-xl font-medium px-6 py-2 bg-primary text-white flex items-center hover:bg-secondary'
              >
                Logout
              </div>
            ) : (
              <Link
                href='/auth'
                className='rounded-xl font-medium px-6 py-2 bg-primary text-white flex items-center hover:bg-secondary'
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500'
            }
          >
            <ul>
              <li className='p-4 text-4xl hover:text-primary duration-300'>
                <Link href='/about'>About</Link>
              </li>

              {user ? (
                <li className='p-4 text-4xl hover:text-primary duration-300'>
                  <Link href='/work'>Dashboard</Link>
                </li>
              ) : (
                ''
              )}

              <li className='p-4 text-4xl hover:text-primary duration-300'>
                {user ? (
                  <div onClick={() => logout()}>Logout</div>
                ) : (
                  <Link href='/auth'>Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
