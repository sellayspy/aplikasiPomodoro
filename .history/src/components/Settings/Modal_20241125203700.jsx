import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <AnimationPresensence>
            <Backdrop />
            <ModalContainer isOpen={isOpen} onClose={onClose} />
          </AnimationPresensence>
        </>
      )}
    </>
  );
};

export default Modal;
