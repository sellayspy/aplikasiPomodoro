import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

const Modal = ({ onOpen, onClose }) => {
  return (
    <>
      {onOpen &
      (
        <>
          <Backdrop />
          <ModalContainer onOpen={onOpen} onClose={onClose} />
        </>
      )}
    </>
  );
};

export default Modal;
