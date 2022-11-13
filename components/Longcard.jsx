import Image from 'next/image'
import React from 'react'

const Longcard = ({ description, side, logoUrl, width, height }) => {
  return (
    <div className='hover:scale-105 transition-all'>
        {side > 0 &&
          <div className='flex max-w-full bg-highlight rounded-lg shadow-md'>
            <div className='h-48 w-[320px] flex flex-row items-center justify-center '>
              <Image className='ml-6' src={logoUrl} alt='Product' width={width} height={height} />
            </div>
            <div className='flex-row px-5 pb-5'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 '>
                {description}
              </h5>
            </div>
          </div>
        }
        {side < 0 &&
          <div className='flex max-w-full bg-highlight rounded-lg shadow-md justify-end'>
            <div className='flex-row px-5 pb-5'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 '>
                {description}
              </h5>
            </div>
            <div className='h-48 w-[320px] flex flex-row items-center justify-center'>
              <Image className='mr-0' src={logoUrl} alt='Product' width={width} height={height} />
            </div>
          </div>
        }
    </div>
  )
}

export default Longcard
