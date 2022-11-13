import Image from 'next/image'

export function Footer() {
  return (
    <footer className='p-4 sm:p-6 bg-background'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <a href='#' className='flex items-center'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary hover:text-secondary'>
              CONNEQT
            </span>
          </a>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-highlight uppercase '>
              Resources
            </h2>
            <ul className='text-accent '>
              <li className='mb-4'>
                <a href='https://nextjs.org/' className='hover:underline'>
                  Next
                </a>
              </li>
              <li>
                <a href='https://tailwindcss.com/' className='hover:underline'>
                  Tailwind
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-highlight uppercase'>
              Follow us
            </h2>
            <ul className='text-accent'>
              <li className='mb-4'>
                <a
                  href='https://github.com/myorganizationnamesthis/hackutd-nextjs'
                  className='hover:underline '
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href='https://ix.hackutd.co/discord'
                  className='hover:underline'
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-highlight uppercase'>
              Legal
            </h2>
            <ul className='text-accent'>
              <li className='mb-4'>
                <a href='#' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-4 border-accent sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between mb-1'>
        <span className='text-sm text-accent sm:text-center'>
          © 2022{' '}
          <a href='#' className='hover:underline'>
            CONNEQT™
          </a>{' '}
          All Rights Reserved
        </span>
      </div>
    </footer>
  )
}
