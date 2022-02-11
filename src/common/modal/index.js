import ReactDOM from "react-dom";

const Modal =({ title, show, onClose, onSubmit, children })=> {
  if (!show) return null;
  return ReactDOM.createPortal(
     <div className="modal">
      <h2>{ title }</h2>
      { children }
      <button onClick={ onClose }>Close</button>
      <button onClick={ onSubmit }>OK</button>
     </div>
    ,document.body);
}

export default Modal;