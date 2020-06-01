import React, { useRef, useState } from 'react'
import styles from './SignUpForm.module'
import { useForm } from 'react-hook-form'
import Button from '../utils/button/Button'
import Loading from '../utils/loading/Loading'
import { signUpService } from '../api/APIService'

const SignUpForm = ({ toggleSignUp }) => {
  const { register, errors, handleSubmit, watch } = useForm()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const email = useRef({})
  email.current = watch('email', '')

  const handleError = err => {
    setLoading(false)
    setError(`${err.message}: There was an error signing up`)
    setTimeout(() => {
      setError(false)
    }, 1500)
  }

  const onSubmit = async data => {
    setLoading(true)
    try {
      await signUpService(data)
      toggleSignUp()
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <div className={styles.form}>
      <h2 className={styles.header}>Request an invite</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <span>Full name</span>
          <input
            className={styles.formField}
            name='fullName'
            ref={register({
              required: 'You must specify a name',
              minLength: {
                value: 3,
                message: 'Name must have at least 3 characters'
              }
            })}
          />
        </div>
        <p>{errors.fullName && errors.fullName.message}</p>
        <div className={styles.formGroup}>
          <span>Email</span>
          <input
            className={styles.formField}
            name='email'
            ref={register({
              required: 'You must provide an email address',
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: 'You must provide a valid email address'
              }
            })}
          />
        </div>
        <p>{errors.email && errors.email.message}</p>
        <div className={styles.formGroup}>
          <span>Confirm email</span>
          <input
            className={styles.formField}
            name='confirmEmail'
            ref={register({
              validate: value =>
                value === email.current || 'The emails do not match'
            })}
          />
        </div>
        <p>{errors.confirmEmail && errors.confirmEmail.message}</p>
        {loading ? <Loading /> : <Button type='submit' text='Send' />}
        <p>{error}</p>
      </form>
    </div>
  )
}

export default SignUpForm
