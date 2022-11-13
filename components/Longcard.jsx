import Image from 'next/image'
import React from 'react'

const Longcard = ({ description, side, logoUrl, width, height }) => {
  return (
    <div className='hover:scale-105 transition-all'>
        {side > 0 &&
          <div className='flex bg-highlight rounded-lg shadow-md w-[90vw]'>
            <div className='h-48 w-[250px] flex flex-row items-center justify-center '>
              <Image className='ml-6' src={logoUrl} alt='Product' width={width} height={height} />
            </div>
            <div className='mt-1 md:mr-[10vw] max-w-[90%] flex-row px-5 pb-5 mx-auto'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 pr-[10vw] pt-8'>
                {description}
              </h5>
            </div>
          </div>
        }
        {side < 0 &&
          <div className='flex bg-highlight rounded-lg shadow-md w-[90vw]'>
            <div className='mt-1 md:ml-[10vw] max-w-[90%] flex-row px-5 pb-5 mx-auto'>
              <h5 className='text-xl font-semibold tracking-tight text-gray-900 pl-[10vw] pt-8'>
                {description}
              </h5>
            </div>
            <div className='h-48 w-[250px] flex flex-row items-center justify-center'>
              <Image className='mr-6' src={logoUrl} alt='Product' width={width} height={height} />
            </div>
          </div>
        }
    </div>
  )
}

export default Longcard
