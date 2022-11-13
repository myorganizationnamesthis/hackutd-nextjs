import Head from 'next/head'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { ref, getDownloadURL } from '@firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { Modal } from '../components/'
import { initFirebase, storage, db } from '../firebase/clientApp'
import { useUser } from '../firebase/useUser'

initFirebase()

export default function Upload() {
  const router = useRouter()
  const fRef = useRef()
  const { user, logout } = useUser()
  const [uploadFile, uploading, snapshot, error] = useUploadFile()
  const [result, setResult] = useState()
  const [selectedFile, setSelectedFile] = useState()
  const [showModal, setShowModal] = useState(false)
  const [showSelectFile, setShowSelectFile] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [aiResponse, setAiResponse] = useState()
  const [resume, setResume] = useState('')

  const upload = async () => {
    if (!user) return
    const snowflake = Date.now().toString()
    const sRef = ref(storage, `resumes/${user.id}/${snowflake}.pdf`)
    if (selectedFile?.type === 'application/pdf') {
      setProcessing(true)
      const r = await uploadFile(sRef, selectedFile, {
        contentType: 'application/pdf',
      })
      setResult(r)
      const resumeUrl = await getDownloadURL(sRef)
      setResume(resumeUrl)
      const aiData = await fetch(
        `${process.env.NEXT_PUBLIC_PYTHON_BACKEND_URL}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: resumeUrl,
          }),
        }
      )
        .then((res) => res.json())
        .catch((err) => setShowSelectFile(true))

      console.log(aiData)
      setProcessing(false)
      setAiResponse(aiData)

      // await addDoc(collection(db, "users", user.id, "resumes"), {
      //     resumeUrl
      // });
      // window.location.reload();
      // router.push("/dashboard");
    } else {
      setShowSelectFile(true)
    }
  }

  return (
    <div className='overflow-y-auto bg-background h-screen'>
      <Head>
        <title>Upload | CONNEQT</title>
      </Head>
      <Modal open={showModal} setOpen={setShowModal} />
      {user ? (
        !aiResponse ? (
          <main className='ml-4 mt-24'>
            <h1 className='text-6xl font-bold text-white'>Upload</h1>
            <div className='text-secondary text-xl'>
              Upload your resume here!
            </div>
            <input
              accept='application/pdf'
              className='block w-full file:bg-secondary file:border-0 file:rounded ml-4 mt-2 file:px-4 file:py-2 file:cursor-pointer'
              type='file'
              onChange={(e) => {
                const file = e.target.files ? e.target.files[0] : undefined
                if (!file || file?.type !== 'application/pdf') {
                  e.preventDefault()
                  setShowSelectFile(true)
                  setSelectedFile(undefined)
                } else setSelectedFile(file)
              }}
              ref={fRef}
            />
            {showSelectFile ? (
              <p className='text-error ml-4 mt-2'>Please select a PDF file!</p>
            ) : null}
            <div className='flex'>
              <button
                className='block bg-secondary px-4 py-2 ml-4 mt-8 rounded text-highlight disabled:opacity-50'
                disabled={processing}
                onClick={upload}
              >
                {processing ? 'Uploading...' : 'Upload'}
              </button>
              <button
                className='block bg-error px-4 py-2 ml-4 mt-8 rounded text-highlight'
                onClick={() => {
                  setSelectedFile()
                  fRef.current.value = ''
                  setShowSelectFile(false)
                }}
              >
                Clear
              </button>
            </div>
          </main>
        ) : (
          <main className='ml-4 mt-24'>
            <h1 className='text-6xl font-bold mt-2'>Verify Information</h1>
            <div className='text-primary text-xl my-4'>
              Please verify the information we obtained from your resume.
            </div>
            <div className='max-w-[50%]'>
              {typeof aiResponse === 'object'
                ? Object.keys(aiResponse).map((k, index) => {
                    return (
                      <div key={index} className='flex flex-col mb-3'>
                        <label className='text-xl font-bold'>{`${k}: `}</label>
                        <input
                          className='block w-full bg-secondary border-0 rounded ml-4 mt-2 px-4 py-2 cursor-pointer'
                          type='text'
                          value={aiResponse[k]}
                          onChange={(e) => {
                            const newAiResponse = { ...aiResponse }
                            newAiResponse[k] = e.target.value
                            setAiResponse(newAiResponse)
                          }}
                        />
                      </div>
                    )
                  })
                : null}
            </div>
            <button
              className='block bg-secondary px-4 py-2 ml-4 mt-8 rounded text-highlight disabled:opacity-50'
              disabled={processing}
              onClick={async () => {
                setProcessing(true)
                if (typeof aiResponse?.skills === 'string') {
                  aiResponse.skills = aiResponse.skills.split(',')
                }
                await addDoc(collection(db, 'users', user.id, 'resumes'), {
                  ...aiResponse,
                  resume,
                })
                window.location.href = '/dashboard'
              }}
            >
              Submit
            </button>
          </main>
        )
      ) : null}
    </div>
  )
}
