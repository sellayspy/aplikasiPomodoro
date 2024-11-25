import styled from "styled-components";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { Form, Formik, Field } from "formik";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const ModalContainer = ({ isOpen, onClose }) => {
  const {
    waktuKerja,
    setWaktuKerja,
    peregangan,
    setPeregangan,
    istirahat,
    setIstirahat,
  } = useContext(StateContext);

  return (
    <Container>
      <ModalContent
        initial={{ y: "-100vh", scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: "-100vh", scale: 0 }}
      >
        <ModalHeader>
          <ModalTitle>Pengaturan</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose fontSize="5rem" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              kerja: waktuKerja / 60,
              peregangan: peregangan / 60,
              istirahat: istirahat / 60,
            }}
            onSubmit={(values) => {
              setWaktuKerja(values.kerja * 60);
              setPeregangan(values.peregangan * 60);
              setIstirahat(values.istirahat * 60);
              onClose();
            }}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="kerja">Kerja</label>
                  <Field name="kerja" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="peregangan">Peregangan</label>
                  <Field name="peregangan" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="istirahat">Istirahat</label>
                  <Field name="istirahat" min="1" max="60" />
                </FormControl>
              </InputWrapper>
              <ButtonWrapper>
                <SimpanButton type="submit">Simpan</SimpanButton>
              </ButtonWrapper>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Container>
  );
};

export default ModalContainer;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

const SimpanButton = styled.button`
  padding: 1rem 4rem;
  font-size: 2rem;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
`;

const FormControl = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 0.7rem;
  label {
    font-size: 2rem;
  }
  input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid black;
    background: #ead8fc;
  }
`;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: grid;
  align-items: end; /* Posisi elemen akan lebih ke bawah */
  padding-bottom: 100vh;
  place-items: center;

  z-index: 150;
`;

const ModalContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background-color: white;

  @media (max-width: 600px) {
    width: 90%;
    padding: 1rem;
  }
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
