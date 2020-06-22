import { useState } from 'react'

const useSignUp = () => {
  const [isSignedUp, setIsignedUp] = useState(false)
  const toggleSignUp = () => setIsignedUp(!isSignedUp)

  return {
    isSignedUp,
    toggleSignUp
  }
}

export default useSignUp
