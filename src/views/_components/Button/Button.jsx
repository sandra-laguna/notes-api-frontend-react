import React from 'react';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Button.module.scss';

export const Button = props => {
  return (
    <button
      type={props.type || 'button'}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}>
      {props.text && <span className={styles.buttonText}>{props.text}</span>}

      <div className={styles.buttonIcon}>
        <FontAwesomeIcon icon={AwesomeIcons(props.icon)} />
      </div>
    </button>
  );
};
