import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { GoCheck, GoX } from 'react-icons/go';

const Modal = ({ title, show, onClose, onSubmit, children, cname }) => {
  const modalChildrenRef = useRef(null);

  // useEffect to set the focus on the first focussable element in the modal
  // when it opens up
  useEffect(() => {
    if (show) {
      const modalChildElements = modalChildrenRef.current;
      const focusableElements = modalChildElements?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements?.[0]?.focus();
    }
  }, [show]);

  useEffect(() => {
    const close = (e) => {
      // e.keyCode is deprecated: developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode.
      // So I've used e.key === 'Escape' instead, for better international keyboard support.
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className={`modal-${cname}`}>
        <div className={`modal-${cname}-header`}>
          <h2 className="modal-title">{title}</h2>
        </div>
        <div className={`modal-${cname}-body`} ref={modalChildrenRef}>
          {children}
        </div>
        <div className={`modal-${cname}-footer`}>
          <button className="btn-default-light btn-size--sm" onClick={onClose}>
            <GoX className="icon" size="16px" /> Cancel
          </button>
          {onSubmit && (
            <button className="btn-primary btn-size--sm" onClick={onSubmit}>
              <GoCheck className="icon" size="16px" /> Apply
            </button>
          )}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
