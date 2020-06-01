import React from 'react'
import styles from './WelcomeBox.module'

import Button from '../utils/button/Button'
import Modal from '../modal/Modal'
import useModal from '../modal/useModal'
import SignUpContainer from '../sign-up-form/SignUpContainer'

const WelcomeBox = () => {
  const { isOpen, toggleModal } = useModal()

  return (
    <div className={styles.container}>
      <h1>
        The new way to <br />
        happiness is through Otter!
      </h1>
      <p>Be the first to know when we launch</p>
      <Button handleClick={toggleModal} text='Request an invite' />
      <Modal
        toggleModal={toggleModal}
        isOpen={isOpen}
        child={<SignUpContainer toggleModal={toggleModal} />}
      />
    </div>
  )
}

export default WelcomeBox
