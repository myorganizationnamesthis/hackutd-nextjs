import { useRouter } from 'next/router'
import { React, useEffect, useState } from 'react'
import Link from 'next/link'
import { doc, getDoc } from 'firebase/firestore'
import { initFirebase, db } from '../../../../firebase/clientApp'
import Image from 'next/image'

// const userData = {
//   name: 'Ephraim Sun',
//   title:
//     'Amazon Future Engineer | Mustang Scholar | IT Intern @ Scout Energy Partners | CS and Finance at SMU',
//   location: 'Dallas, TX',
//   description:
//     'With a passionate interest in Computer Science, I love to design projects and solve problems, whether that be working with a team or spending my free time learning about a new concept.',
//   email: '',
//   skills: [
//     'Python',
//     'Java',
//     'Javascript',
//     'React',
//     'Next.js',
//     'HTML',
//     'CSS',
//     'Tableau',
//   ],
//   number: '4698036844',
//   link: [
//     {
//       name: 'LinkedIn',
//       link: 'https://www.linkedin.com/in/ephraim-sun/',
//     },
//     {
//       name: 'Github',
//       link: 'https://github.com/ephraim888sun',
//     },
//     {
//       name: 'Twitter',
//       link: 'https://twitter.com/FM_Investing',
//     },
//   ],
//   college_name: 'Southern Methodist University',
//   degree: 'BA in Computer Science and Finance',
//   grade: 'Sophomore',
// }

initFirebase()

const Profile = () => {
  const Router = useRouter()
  const { userId, resumeId } = Router.query
  const [userData, setUserData] = useState(null)

  const handlePageLoad = async () => {
    console.log('Params', Router.query)
    const docRef = doc(db, 'users', userId, 'resumes', resumeId)
    const resDoc = await getDoc(docRef)
    if (resDoc.exists()) {
      const card = resDoc.data()
      card.link = [
        { name: 'LinkedIn', link: card.linkedin ?? '' },
        { name: 'Github', link: card.github ?? '' },
        { name: 'Twitter', link: card.twitter ?? '' },
      ]
      console.log('Document data:', card)
      setUserData(card)
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }

  useEffect(() => {
    if (Object.keys(Router.query).length > 0) handlePageLoad()
  }, [Router.query])

  const [flipCard, setFlipCard] = useState(false)

  return (
    <div className='overflow-y-auto'>
      <div className='h-screen max-w-lg mx-auto bg-background justify-center '>
        {/* Test */}
        <div className='h-64 rounded-xl relative m-2 py-2 cursor-pointer perspective'>
          <div
            className={`relative w-full h-full preserve-3d duration-1000 ${
              flipCard === false ? 'my-rotate-y-180' : ''
            } `}
          >
            {/* Front Card === false*/}
            {/* Back Card === true*/}
            <button
              className={`absolute w-full h-full ${
                flipCard === false ? 'my-rotate-y-180' : ''
              } backface-hidden`}
              onClick={() => setFlipCard(!flipCard)}
            >
              <div className='bg-primary rounded-xl h-64'>
                {/* Profile Pic */}
                <div className='rounded-xl pl-2 pt-2 h-32 '>
                  <Image
                    src='/default_profile.png'
                    alt='Profile Picture'
                    className='rounded-full w-32 h-32 absolute border-2'
                    width={48}
                    height={48}
                  />

                  <Link
                    href='/'
                    className='absolute right-4 text-purple-900 font-bold italic hover:opacity-80 hover:scale-90'
                  >
                    CONNEQT
                  </Link>
                </div>

                <div className='px-2 pb-4 mt-2'>
                  {/* Name */}
                  <div className='font-bold text-3xl'>{userData?.name}</div>

                  {/* Title */}
                  <div className='italic font-bold mt-1.5 line-clamp-1'>
                    {userData?.job_title || ''}
                  </div>
                  {/* Location */}
                  <div className='opacity-70 text-sm font-semibold'>
                    {userData?.email} &#x2022; {userData?.phone_number}
                    <div>{userData?.location} </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Back Card */}
            <button
              className={`absolute w-full h-full ${
                flipCard === true ? '' : ''
              } backface-hidden`}
              onClick={() => setFlipCard(!flipCard)}
            >
              <div className='bg-primary to-violet-400 rounded-xl h-64'>
                {/* Profile Pic */}
                <div className='rounded-t-xl pl-2 pt-2 h-32 '>
                  <Image
                    src='/default_school.png'
                    alt='University Profile'
                    className='rounded-full w-32 h-32 absolute right-2 top-1 border-2'
                    width={48}
                    height={48}
                  />
                  <Link
                    href='/'
                    className='absolute left-4 text-purple-900 font-bold italic hover:opacity-80 hover:scale-90'
                  >
                    CONNEQT
                  </Link>
                </div>

                <div className='px-2 pb-4 mt-1 '>
                  {/* Name */}
                  <div className='font-bold text-3xl text-white line-clamp-2 md:line-clamp-1'>
                    {userData?.college_name}
                  </div>

                  {/* Title */}
                  <div className='italic font-bold mt-1.5 line-clamp-1 text-white'>
                    {userData?.degree}
                  </div>
                  {/* Location */}
                  <div className='opacity-70 text-sm font-semibold text-white'>
                    {userData?.grade}
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Save Contact */}
        <div className='flex flex-row pt-2 m-2 gap-x-2 '>
          <Link
            href={`mailto:${userData?.email}`}
            className='flex flex-row bg-primary rounded-xl justify-center items-center flex-auto hover:scale-[101%] hover:text-white hover:cursor-pointer	 '
          >
            <div className='font-bold text-2xl'>Contact</div>
          </Link>
          <Link
            href={userData?.resume ?? ''}
            target='_blank'
            className='flex flex-row bg-primary rounded-xl w-16 h-16 justify-center items-center hover:text-white cursor-pointer hover:scale-[101%]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-12 h-12'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
              />
            </svg>
          </Link>
        </div>

        {/* Description */}
        <div className='rounded-xl relative mx-2'>
          {/* About Me */}
          {userData?.about_me ? (
            <div className='bg-primary mt-1 px-4 py-2 rounded-xl '>
              <div className='font-semibold'>About Me</div>
              <div className='pl-4 text-sm italic line-clamp-5 md:line-clamp-3 text-gray-300'>
                {userData?.about_me}
              </div>
            </div>
          ) : null}

          {console.log(userData)}
          {/* Links */}
          {userData?.link?.map((item, index) => {
            if (!item.link) return
            return (
              <Link href={item.link} key={index}>
                <div className='bg-gradient-to-r from-primary via-secondary to-purple-500 rounded-xl h-16 mt-2 ml-8 px-10 relative group hover:scale-[102%]'>
                  <div className='rounded-full bg-white w-14 h-14 absolute top-1 -left-8'>
                    <Image
                      src={`/${item.name.toLowerCase()}.png`}
                      alt=''
                      width='128'
                      height='128'
                      className='rounded-full'
                    />
                  </div>
                  <div className='absolute right-2 top-5 group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                      />
                    </svg>
                  </div>
                  <div className='font-bold text-xl pt-1.5'>{item.name}</div>
                  <div className='opacity-60 text-sm italic truncate'>
                    {item.link}
                  </div>
                </div>
              </Link>
            )
          })}

          {/* Skills */}
          <div className='bg-primary my-2 px-2 rounded-xl '>
            <div className='font-semibold'>Skills</div>
            <div className='flex flex-row gap-x-2 w-full mx-auto flex-wrap justify-center mt-2'>
              {userData?.skills.map((skill, index) => (
                <div className='mb-2' key={index}>
                  <div className='rounded h-6 bg-purple-700 text-white px-2 hover:cursor-pointer hover:scale-[105%]'>
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className='mx-auto rounded-sm'>
            <div className='flex flex-row text-gray-200 justify-center italic text-sm '>
              Empowering seamless CONNEQTIONs
            </div>
            <div className='flex flex-row justify-center'>
              <Link
                href='/'
                className='text-primary italic font-bold pl-1 hover:text-secondary'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
