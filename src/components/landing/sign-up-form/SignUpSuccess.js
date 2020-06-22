import React from 'react';

import {Button} from '@otter/ui';

import styles from './SignUpSuccess.module';

const SignUpSuccess = ({toggleModal}) => (
  <div className={styles.container}>
    <h1>All done!</h1>
    <p>You will be one of the first to be notified when we launch!</p>
    <Button handleClick={toggleModal} text="OK" />
  </div>
);

export default SignUpSuccess;
