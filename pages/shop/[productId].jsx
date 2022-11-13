import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div>
      <section className='pt-24 h-full bg-gradient-to-br from-pink-500 via-indigo-500 to-primary'>
        <div className='container mx-auto h-full rounded-xl p-2 bg-gray-100'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
              <h2 className='text-2xl font-bold text-gray-900'>Collections</h2>

              <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
                <div className='group relative'>
                  <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                    <img
                      src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg'
                      alt='Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <h3 className='mt-6 text-sm text-gray-500'>
                    <Link href='#'>
                      <span className='absolute inset-0'></span>
                      Desk and Office
                    </Link>
                  </h3>
                  <p className='text-base font-semibold text-gray-900'>
                    Work from home accessories
                  </p>
                </div>

                <div className='group relative'>
                  <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                    <img
                      src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg'
                      alt='Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <h3 className='mt-6 text-sm text-gray-500'>
                    <Link href='#'>
                      <span className='absolute inset-0'></span>
                      Self-Improvement
                    </Link>
                  </h3>
                  <p className='text-base font-semibold text-gray-900'>
                    Journals and note-taking
                  </p>
                </div>

                <div className='group relative'>
                  <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                    <img
                      src='https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg'
                      alt='Collection of four insulated travel bottles on wooden shelf.'
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <h3 className='mt-6 text-sm text-gray-500'>
                    <Link href='#'>
                      <span className='absolute inset-0'></span>
                      Travel
                    </Link>
                  </h3>
                  <p className='text-base font-semibold text-gray-900'>
                    Daily commute essentials
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white'>
            <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
              <div>
                <div className='text-3xl font-bold sm:text-4xl'>
                  CONNEQT CARD TRAY
                </div>
                <h2 className='text-xl italic font-semibold tracking-tight text-gray-600 sm:text-2  xl'>
                  Technical Specifications
                </h2>
                <p className='mt-4 text-gray-500'>
                  The CONNEQT card is precision milled to perfectly fit a stack
                  of Focus cards. The powder coated steel divider separates
                  active cards from new ones, or can be used to archive
                  important task lists.
                </p>

                <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
                  <div className='border-t border-gray-200 pt-4'>
                    <dt className='font-medium text-gray-900'>Origin</dt>
                    <dd className='mt-2 text-sm text-gray-500'>
                      Designed by Good Goods, Inc.
                    </dd>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <dt className='font-medium text-gray-900'>Material</dt>
                    <dd className='mt-2 text-sm text-gray-500'>
                      Solid walnut base with rare earth magnets and powder
                      coated steel card cover
                    </dd>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <dt className='font-medium text-gray-900'>Dimensions</dt>
                    <dd className='mt-2 text-sm text-gray-500'>
                      6.25&quot; x 3.55&quot; x 1.15&quot;
                    </dd>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <dt className='font-medium text-gray-900'>Finish</dt>
                    <dd className='mt-2 text-sm text-gray-500'>
                      Hand sanded and finished with natural oil
                    </dd>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <dt className='font-medium text-gray-900'>Includes</dt>
                    <dd className='mt-2 text-sm text-gray-500'>
                      Wood card tray and 3 refill packs
                    </dd>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <dt className='font-medium text-gray-900'>
                      Considerations
                    </dt>
                    <dd className='mt-2 text-sm text-gray-500'>
                      Made from natural materials. Grain and color vary with
                      each item.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg'
                  alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
                  className='rounded-lg bg-gray-100'
                />
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg'
                  alt='Top down view of walnut card tray with embedded magnets and card groove.'
                  className='rounded-lg bg-gray-100'
                />
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg'
                  alt='Side of walnut card tray with card groove and recessed card area.'
                  className='rounded-lg bg-gray-100'
                />
                <img
                  src='https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg'
                  alt='Walnut card tray filled with cards and card angled in dedicated groove.'
                  className='rounded-lg bg-gray-100'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
