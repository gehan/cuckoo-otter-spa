import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module'

const Modal = ({ isOpen, child }) =>
  isOpen
    ? ReactDOM.createPortal(
      <>
        <div className={styles.modalOverlay} />
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <div className={styles.modalHeader} />
            {child}
          </div>
        </div>
      </>,
      document.body
    )
    : null

export default Modal
