import React from 'react';
import styles from './Divider.module.scss';

const Divider = (props) => (
  <div className={props.className}>
    <div className={styles.divider} />
  </div>
);

export default Divider;
