import React from 'react'
import styles from './Content.module'

import WelcomeBox from '../welcome-box/WelcomeBox'

const Content = () => (
  <div className={styles.content}>
    <WelcomeBox />
  </div>
)

export default Content
