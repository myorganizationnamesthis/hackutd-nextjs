import Image from 'next/image'
import React from 'react'

const Longcard = ({ description, side, logoUrl, width, height }) => {
  return (
    <div className='hover:scale-105 transition-all'>
        {true &&
          <div className={side > 0 ? 'flex flex-row bg-highlight rounded-lg shadow-md w-[90vw]' : 'flex flex-row-reverse bg-highlight rounded-lg shadow-md w-[90vw]'}>
            <div className='h-48 w-[250px] flex items-center justify-center '>
              <Image className={side > 0 ? 'ml-6' : 'mr-6'} src={logoUrl} alt='Product' width={width} height={height} />
            </div>
            <div className={side > 0 ? 'mt-1 md:mr-[10vw] max-w-[90%] flex-row px-5 pb-5 mx-auto' : 'mt-1 md:ml-[10vw] max-w-[90%] flex-row px-5 pb-5 mx-auto'}>
              <h5 className={side > 0 ? 'text-xl font-semibold tracking-tight text-gray-900 pr-[10vw] pt-8' : 'text-xl font-semibold tracking-tight text-gray-900 pl-[10vw] pt-8'}>
                {description}
              </h5>
            </div>
          </div>
        }
    </div>
  )
}

export default Longcard
