import styled from "styled-components";

const ModalContainer = () => {
  return (
    <Container>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <ModalCloseButton>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContainer>
    </Container>
  );
};

export default ModalContainer;

const Container = styled.div``;
const ModalContainer = styled.div``;
const ModalHeader = styled.div``;
const ModalTitle = styled.div``;
const ModalCloseButton = styled.div``;
const ModalBody = styled.div``;
