import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from '../components/StyledFirebaseAuth'
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth'
import { initFirebase } from '../firebase/clientApp'
import { useUser } from '../firebase/useUser'

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  credentialHelper: 'none',
}

initFirebase()

const auth = getAuth()

export default function Auth() {
  const [viewAuth, setViewAuth] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewAuth(true)
    }
    if (user) {
      window.location.href = '/dashboard'
    }
  }, [user])
  return (
    <div className='overflow-y-auto bg-background h-screen'>
      <div className='mt-24 '>
        {viewAuth ? (
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        ) : null}
      </div>
    </div>
  )
}
