import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <AnimationPresence>
            <Backdrop />
            <ModalContainer isOpen={isOpen} onClose={onClose} />
          </AnimationPresence>
        </>
      )}
    </>
  );
};

export default Modal;
