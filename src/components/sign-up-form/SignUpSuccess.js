import React from 'react'
import styles from './SignUpSuccess.module'
import Button from '../utils/button/Button'

const SignUpSuccess = ({ toggleModal }) => (
  <div className={styles.container}>
    <h1>All done!</h1>
    <p>You will be one of the first to be notified when we launch!</p>
    <Button handleClick={toggleModal} text='OK' />
  </div>
)

export default SignUpSuccess
