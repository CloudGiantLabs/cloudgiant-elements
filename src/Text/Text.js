import React from 'react';
import isEven from './utilities';
import styles from './Text.module.scss';

const Text = (props) => (
  <span className={props.className}>
    {props.heading ? (
      <span className={styles.heading}>{props.children}</span>
    ) : props.subHeading ? (
      <span className={styles.subHeading}>{props.children}</span>
    ) : props.button ? (
      <span className={styles.button}>{props.children}</span>
    ) : props.link ? (
      <span className={styles.link}>{props.children}</span>
    ) : props.bold ? (
      <span className={styles.textBold}>{props.children}</span>
    ) : props.extraLarge ? (
      <span className={styles.extraLarge}>{props.children}</span>
    ) : props.secure ? (
      <div>
        {[...props.children].map((ltr, index) =>
          isEven(index) ? '*' : ' ',
        )}
      </div>
    ) : (
      <span className={styles.text}>{props.children}</span>
    )}
  </span>
);

export default Text;
