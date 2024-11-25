import styled from "styled-components";

const ModalContainer = ({ isOpen, onClose }) => {
  return (
    <Container>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
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

const ModalContent = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: white;
`;

const ModalHeader = styled.div``;
const ModalTitle = styled.div``;
const ModalCloseButton = styled.div``;
const ModalBody = styled.div``;
