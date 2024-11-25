import styled from "styled-components";

const ModalContainer = () => {
  return (
    <Container>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <ModalCloseButton>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  );
};

export default ModalContainer;

const Container = styled.div`
  position: absolute;
`;
const ModalContent = styled.div``;
const ModalHeader = styled.div``;
const ModalTitle = styled.div``;
const ModalCloseButton = styled.div``;
const ModalBody = styled.div``;
