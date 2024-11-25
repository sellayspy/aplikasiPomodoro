import styled from "styled-components";
import Judul from "./components/Judul";
import Timer from "./components/Timer";
import Modal from "./components/Settings/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Modal onOpen={onOpen} onClose={onClose} />
      <Title>Aplikasi Pomodoro</Title>
      <Judul />
      <Timer />
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;
