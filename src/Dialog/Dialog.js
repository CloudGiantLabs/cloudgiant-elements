import React, { useState, useEffect, useRef } from 'react';
import Text from '../Text';
import Button from '../Button';
import AlertIcon from '/src/assets/images/alert-circle-outline.svg';
import styles from './Dialog.module.scss';

const Dialog = (props) => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  useEffect(() => {
    setIsComponentVisible(props.show);
  }, [props.show]);

  return (
    isComponentVisible && (
      <div className={styles.dialog}>
        <div ref={ref} className={styles.dialogContent}>
          <div className={styles.iconRow}>
            <img
              src={AlertIcon}
              alt="Warning"
              className={styles.alertIcon}
            />
          </div>
          <Text heading className={styles.headerText}>
            {props.headerText}
          </Text>
          <Text>{props.subText}</Text>
          <div className={styles.dialogButtonColumns}>
            <Button
              onClick={props.onClose}
              className={styles.dialogButtonLeft}
            >
              {props.cancelButtonText || 'Cancel'}
            </Button>
            <Button
              onClick={props.onConfirm}
              className={styles.dialogButtonRight}
            >
              {props.confirmButtonText || 'Okay'}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Dialog;
