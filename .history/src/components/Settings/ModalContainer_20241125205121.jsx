import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Form, Formik } from "formik";

const ModalContainer = ({ isOpen, onClose }) => {
  return (
    <Container>
      <ModalContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose fontSize="5rem" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
                  <Formik initialValues={{ kerja: "", peregangan: "", istirahat: "" }}
                  onSubmit={() => {}}
                  >
                      <Form>
                          <InputWrapper>
                              <FormControl>
                                  <label htmlFor="kerja">Kerja</label>
                                  <Field name="kerja" min="1" max="60" />
                              </FormControl>
                              <FormControl></FormControl>
                          </InputWrapper>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
};

export default ModalContainer;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;
`;

const ModalContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background-color: white;
`;

const ModalHeader = styled.div`
  color: black;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
const ModalTitle = styled.h3`
  font-size: 5rem;
`;
const ModalCloseButton = styled.button`
  all: unset;
`;
const ModalBody = styled.div``;
