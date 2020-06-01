import React from 'react'
import styles from './Button.module'

const Button = ({ handleClick, text }) => (
  <button className={styles.button} onClick={handleClick}>
    {text}
  </button>
)

export default Button
