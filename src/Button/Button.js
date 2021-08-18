import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => (
  <div className={props.className}>
    {props.loading ? (
      <button onClick={props.onClick} className={styles.button}>
        <div class={styles.loadingRing} />
      </button>
    ) : (
      <button onClick={props.onClick} className={styles.button}>
        <span className={styles.buttonText}>{props.children} </span>
      </button>
    )}
  </div>
);

export default Button;
