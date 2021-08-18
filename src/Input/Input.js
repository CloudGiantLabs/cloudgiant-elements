import React from 'react';
import EmailIcon from '/src/assets/images/email.svg';
import LockIcon from '/src/assets/images/lock.svg';
import styles from './Input.module.scss';

const Input = (props) => (
  <div className={props.className}>
    {props.type === 'email' ? (
      <img src={EmailIcon} alt="Email" className={styles.inputIcon} />
    ) : props.type === 'text' ? null : (
      <img
        src={LockIcon}
        alt="Password"
        className={styles.inputIcon}
      />
    )}
    <input
      className={styles.input}
      value={props.value}
      placeholder={props.placeholder || ''}
      type={props.type}
      spellCheck="false"
      onChange={props.onChange}
    />
  </div>
);

export default Input;
