import React from 'react'
import styles from './LandingPage.module'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'

const LandingPage = () => (
  <div className={styles.container}>
    <Header className={styles.header} />
    <Content className={styles.content} />
    <Footer className={styles.footer} />
  </div>
)

export default LandingPage
