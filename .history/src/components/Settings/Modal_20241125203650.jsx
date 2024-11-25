import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";
import { AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <AnimationPresense>
            <Backdrop />
            <ModalContainer isOpen={isOpen} onClose={onClose} />
          </AnimationPresense>
        </>
      )}
    </>
  );
};

export default Modal;
