import React from 'react';

import Emoji from '../Emoji';
import styles from './Footer.module';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.london}>
        Made with <Emoji symbol="💓" label="beating heart" /> in London
      </p>
      <p className={styles.copyright}>Copyright 2020 Otter Limited</p>
    </div>
  </footer>
);

export default Footer;
