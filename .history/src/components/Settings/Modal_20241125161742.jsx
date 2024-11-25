import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

const Modal = () => {
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
