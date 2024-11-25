import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {onOpen && (
        <>
          <Backdrop />
          <ModalContainer isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </>
  );
};

export default Modal;
