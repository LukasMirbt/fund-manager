import ReactDOM from "react-dom";

const Modal = ({ id, children }) => {
  const rootNode = document.getElementById(id);
  return ReactDOM.createPortal(children, rootNode);
};

export default Modal;
