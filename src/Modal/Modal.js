import React, { useState, useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal = (props) => {
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      props.onClose();
    }
  };

  useEffect(() => {
    props.disableClickListener
      ? null
      : document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  useEffect(() => {
    setIsComponentVisible(props.show);
  }, [props.show]);

  return (
    <div>
      {isComponentVisible && (
        <div id="modal" className={styles.modal}>
          <div ref={ref} className={styles.modalContent}>
            <div className={props.className}>{props.children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
