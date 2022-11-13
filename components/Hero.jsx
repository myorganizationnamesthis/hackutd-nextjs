import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export function Hero({ heading, message }) {
  const router = useRouter()
  return (
    <div className=''>
      <section class='pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-gradient-to-br from-pink-500 via-indigo-500 to-primary'>
        <div class='md:flex-1 md:mr-10'>
          <h1 class='font-pt-serif text-5xl font-bold mb-7 text-white'>
            Empowering{' '}
            <span class='bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%'>
              seamless connections
            </span>
          </h1>
          <p class='font-pt-serif text-2xl font-normal mb-7 text-white italic'>
            Conneqt smart business card helps you build and nurture new
            connections.
          </p>
          <div class='font-montserrat'>
            <button
              class='bg-primary px-6 py-4 rounded-lg text-black mr-2 mb-2 hover:bg-secondary'
              onClick={() => router.push('/auth')}
            >
              Get Started
            </button>
            {/* <button class='px-6 py-4 border-2 border-white   text-white border-solid rounded-lg hover:text-white hover:border-secondary'>
              Secondary action
            </button> */}
          </div>
        </div>
        <div className='flex items-end md:block mt-8 md:mt-0 md:flex-1'>
          <Image
            // loader={myLoader}
            src='/robot.png'
            alt='Picture of the author'
            width={1200}
            height={1200}
          />
        </div>
      </section>
    </div>
  )
}
