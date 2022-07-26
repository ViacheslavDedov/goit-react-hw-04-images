import PropTypes from 'prop-types';
import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ url, alt, closeModal }) => {
  useEffect(() => {
  const handleEscBtnClick = e => {
if (e.code === 'Escape')
  closeModal();
};
  
  window.addEventListener('keydown', handleEscBtnClick);

  return () => {
  window.removeEventListener('keydown', handleEscBtnClick);
  }
}, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget)
    closeModal();
  };

    return (
      <div className={css.Overlay} onClick={handleBackdropClick}>
        
        <div>
          <img src={url} alt={alt} className={css.Modal} />
        </div>
      </div>
    );
  };


Modal.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};