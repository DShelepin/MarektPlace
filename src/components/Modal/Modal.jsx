import styles from './Modal.module.scss';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ children, open, onClose }) => {
  const nodeRef = useRef(null);
  const modalRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={open}
      timeout={200}
      classNames="modal"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={styles.substrate}
        onClick={(e) => {
          if (
            modalRef.current !== null &&
            !modalRef.current.contains(e.target)
          ) {
            onClose();
          }
        }}
      >
        <div className={styles.modalContainer}>
          <div ref={modalRef} className={styles.modal}>
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
