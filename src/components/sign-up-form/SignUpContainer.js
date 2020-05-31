import React from 'react'

import useSignUp from './useSignUp'
import SignUpForm from './SignUpForm'
import SignUpSuccess from './SignUpSuccess'

const SignUpContainer = ({ toggleModal }) => {
  const { isSignedUp, toggleSignUp } = useSignUp()

  return isSignedUp ? (
    <SignUpSuccess toggleModal={toggleModal} />
  ) : (
    <SignUpForm toggleSignUp={toggleSignUp} />
  )
}

export default SignUpContainer
