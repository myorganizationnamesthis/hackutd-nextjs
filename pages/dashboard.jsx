import { useUser } from '../firebase/useUser'
import Head from 'next/head'
import { collection, getDocs } from 'firebase/firestore'
import { initFirebase, db } from '../firebase/clientApp'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

initFirebase()

export default function Dashboard() {
  const Router = useRouter()
  const { user } = useUser()
  const [resumes, setResumes] = useState([])

  const handlePageLoad = async () => {
    if (user) {
      const cRef = collection(db, 'users', user.id, 'resumes')
      const docs = await getDocs(cRef)
      if (!docs.empty) {
        const data = docs.docs.map((doc) => {
          const d = doc.data()
          d.id = doc.id
          return d
        })
        setResumes(data)
        console.log(docs)
        console.log(data)
      }
    }
  }

  useEffect(() => {
    handlePageLoad()
  }, [user])
  return (
    <>
      <Head>
        <title>Upload | CONNEQT</title>
      </Head>
      <div className='overflow-y-auto bg-background h-screen'>
        {user ? (
          <div className='ml-4 mt-24 '>
            <h1 className='text-6xl font-bold text-white'>Dashboard</h1>
            <p className='text-highlight mt-4 text-xl'>Hello, {user?.name}!</p>
            {resumes.length > 0 ? (
              <p className='text-highlight mt-4 text-xl'>
                You have {resumes.length} digital business card
                {resumes.length > 1 ? 's' : ''} uploaded.
              </p>
            ) : (
              <p className='text-highlight mt-4 text-xl'>
                You have no digital business cards.
              </p>
            )}
            {resumes.map((resume, index) => {
              return (
                <button
                  onClick={() => Router.push(`/cards/${resume.id}`)}
                  key={index}
                  className='bg-secondary rounded-lg p-4 mt-4 mr-6 w-[10rem] text-xl'
                >
                  Card {index + 1}
                </button>
              )
            })}
            <button
              className='block bg-secondary px-4 py-2 mt-8 rounded text-highlight disabled:opacity-50'
              onClick={() => Router.push('/upload')}
            >
              Create new
            </button>
          </div>
        ) : null}
      </div>
    </>
  )
}
