import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

const Modal = ({ isOpen }) => {
  return (
    <>
      {isOpen &
      (
        <>
          <Backdrop />
          <ModalContainer />
        </>
      )}
    </>
  );
};

export default Modal;
