import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../../../redux/actions/errorActions';
import { clearMessage } from '../../../redux/actions/messageActions';
import Text from '../Text';
import SuccessIcon from '/src/assets/images/check-circle.svg';
import WarnIcon from '/src/assets/images/alert.svg';
import ErrorIcon from '/src/assets/images/alert-circle.svg';
import CloseIcon from '/src/assets/images/close.svg';
import styles from './Toast.module.scss';

const Toast = (props) => {
  const [isToastVisible, setIsToastVisible] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsToastVisible(false);
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
    setTimeout(() => {
      setIsToastVisible(false);
      props.clearMessage();
    }, 5000);
    console.log('here');
  }, []);

  useEffect(() => {
    setIsToastVisible(props.show);
  }, [props.show]);

  console.log(props.message);
  return (
    <div>
      {isToastVisible && (
        <div ref={ref} className={props.className}>
          <div id={styles.toast}>
            {props.type === 'error' ? (
              <div className={styles.errorToast}>
                <img
                  src={ErrorIcon}
                  alt="Error"
                  className={styles.alertIcon}
                />
                <div className={styles.toastRows}>
                  <Text bold>{props.message.title}</Text>
                  <Text>{props.message.text}</Text>
                </div>
                <img
                  src={CloseIcon}
                  alt="Close"
                  className={styles.closeIcon}
                />
              </div>
            ) : props.type === 'success' ? (
              <div className={styles.successToast}>
                <img
                  src={SuccessIcon}
                  alt="Success"
                  className={styles.alertIcon}
                />
                <div className={styles.toastRows}>
                  <Text bold>{props.message.title}</Text>
                  <Text>{props.message.text}</Text>
                </div>
                <img
                  src={CloseIcon}
                  alt="Close"
                  className={styles.closeIcon}
                />
              </div>
            ) : props.type === 'warning' ? (
              <div className={styles.warningToast}>
                <img
                  src={WarnIcon}
                  alt="Warning"
                  className={styles.alertIcon}
                />
                <div className={styles.toastRows}>
                  <Text bold>{props.message.title}</Text>
                  <Text>{props.message.text}</Text>
                </div>
                <img
                  src={CloseIcon}
                  alt="Close"
                  className={styles.closeIcon}
                />
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, {
  clearErrors,
  clearMessage,
})(Toast);
