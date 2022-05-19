import React, { useContext } from 'react'
import { Context } from './Context'

const ModalContainer = () => {
  const context = useContext(Context)
  const { modalContent, modalTitle, hideModal } = context
  
  if (!modalContent) return null

  return (
    <div className="vincentBCP-calendar-modal" onClick={hideModal}>
      <div
        className="vincentBCP-calendar-modal-content"
        onClick={(ev) => ev.stopPropagation()}
      >
        <div>
          {Boolean(modalTitle) && (
            <span className="vincentBCP-calendar-modal-title">{modalTitle}</span>
          )}
          <span onClick={hideModal}>&#x2715;</span>
        </div>
        {modalContent}
      </div>
    </div>
  );
}

export default ModalContainer