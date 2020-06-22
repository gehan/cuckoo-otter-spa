import React from 'react';
import styles from './LandingPage.module';

import {Footer, Header} from '@otter/ui';
import Content from './content/Content';

const LandingPage = () => (
  <div className={styles.container}>
    <Header className={styles.header} />
    <Content className={styles.content} />
    <Footer className={styles.footer} />
  </div>
);

export default LandingPage;
