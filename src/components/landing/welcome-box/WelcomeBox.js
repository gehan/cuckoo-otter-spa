import React from 'react';
import styles from './WelcomeBox.module';

import {Button, Modal, useModal} from '@otter/ui';
import SignUpContainer from '../sign-up-form/SignUpContainer';

const WelcomeBox = () => {
  const {isOpen, toggleModal} = useModal();

  return (
    <div className={styles.container}>
      <h1>
        The new way to <br />
        happiness is through Otter!
      </h1>
      <p>Be the first to know when we launch</p>
      <Button handleClick={toggleModal} text="Request an invite" />
      <Modal toggleModal={toggleModal} isOpen={isOpen}>
        <SignUpContainer toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default WelcomeBox;
