import React from 'react';
import styles from './Menu.module.scss';

const Menu = (props) => (
  <div className={props.className}>
    <div class={styles.dropdown}>
      {props.children}
      <div class={styles.dropdownContent}>
        <a href="#">Logout</a>
      </div>
    </div>
  </div>
);

export default Menu;
