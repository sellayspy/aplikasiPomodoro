import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <Backdrop />
          <ModalContainer isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </>
  );
};

export default Modal;
