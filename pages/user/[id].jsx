import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const userData = {
  name: 'Ephraim Sun',
  title:
    'Amazon Future Engineer | Mustang Scholar | IT Intern @ Scout Energy Partners | CS and Finance at SMU',
  location: 'Dallas, TX',
  description:
    "I'm a Freshman at Southern Methodist University studying Computer Science and Finance. With a passionate interest in Computer Science, I love to design projects and solve problems, whether that be working with a team or spending my free time learning about a new concept. I also enjoy coding client-side applications in Html, CSS, SCSS, Javascript, React, Next.js, as well as server-side applications in Python, Java, and SQL. I have experience with Oracle Database, PostgreSQL, SQLite, and Microsoft SQL Server. Moreover, I have a passion for investing, and I love to create innovative ideas to bring to the market. Through my previous internships and experiences, I have learned how to hone my skills of leadership, creativity, teamwork, and perseverance. As of now, I am looking to further maximize my potential and gain even more experience and knowledge.",
  email: '',
  skills: [
    'Python',
    'Java',
    'Javascript',
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'Tableau',
  ],
  number: '',
  link: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ephraim-sun/',
    },
    {
      name: 'Github',
      link: 'https://github.com/ephraim888sun',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/FM_Investing',
    },
  ],
}
const Profile = () => {
  const Router = useRouter()
  const { id } = Router.query

  return (
    <div className='bg-black h-screen overflow-y-auto'>
      <div className='h-full max-w-lg mx-auto bg-background justify-center'>
        <div className='rounded-xl relative m-2 py-2'>
          {/* Card */}
          <div className='bg-primary rounded-xl h-64'>
            {/* Profile Pic */}
            <div className='bg-secondary rounded-t-xl pl-2 pt-2 h-32'>
              <div className='rounded-full bg-green-500 w-32 h-32 absolute'></div>

              <Link
                href='/'
                className='absolute right-4 text-background font-bold italic hover:opacity-80 hover:scale-75'
              >
                CONNECTQ
              </Link>
            </div>

            <div className='px-2 pb-4 mt-2'>
              {/* Name */}
              <div className='font-bold text-2xl'>{userData.name}</div>

              {/* Title */}
              <div className='italic font-bold mt-1.5 line-clamp-2'>
                {userData.title}
              </div>
              {/* Location */}
              <div className='opacity-70 text-sm font-semibold'>
                {userData.location}
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className='bg-primary my-2 px-2 rounded-xl '>
            <div className='font-semibold'>About Me</div>
            <div className='text-sm italic line-clamp-8 md:line-clamp-6'>
              {userData.description}
            </div>
          </div>

          {/* Links */}
          {userData.link.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className='bg-primary rounded-xl h-16 mt-2 ml-8 px-10 relative group hover:scale-[102%]'>
                <div className='rounded-full bg-red-500 w-14 h-14 absolute top-1 -left-6'></div>
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
          ))}

          {/* Skills */}
          <div className='bg-primary my-2 px-2 rounded-xl '>
            <div className='font-semibold'>Skills</div>
            <div className='flex flex-row gap-x-2 w-full mx-auto flex-wrap justify-center mt-2'>
              {userData.skills.map((skill, index) => (
                <div className='mb-2' key={index}>
                  <div className='rounded h-6 bg-background opacity-80 text-white px-2 hover:cursor-pointer hover:scale-[105%]'>
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className='mx-auto w-2/3 rounded-sm border-white opacity-80 border-2'>
            <div className='flex flex-row text-gray-200 text-center italic text-sm '>
              We are on a mission to empower seamless connection
            </div>
            <div className='flex flex-row justify-center'>
              <div className='text-secondary italic font-medium'>
                Learn more here at
              </div>
              <Link
                href='/'
                className='text-primary italic font-bold pl-1 hover:text-secondary'
              >
                CONNEQT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
