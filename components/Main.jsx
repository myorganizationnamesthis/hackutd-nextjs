import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export function Main() {
  return (
    <>
      <div className='flex flex-row w-screen h-screen'>
        <div className='bg-white w-1/2'></div>
        <div className=' bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-1/2'></div>
      </div>
    </>
  )
}

// bg-[length:100%_6px] hover:bg-[length:100%_100%]
