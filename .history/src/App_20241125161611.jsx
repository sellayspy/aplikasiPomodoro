import styled from "styled-components";
import Judul from "./components/Judul";
import Timer from "./components/Timer";
import Modal from "./components/Settings/Modal";
import { useState } from "react";
import { FaCog } from "react-icons/fa";

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

      <CogIcon>
        <FaCog />
      </CogIcon>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
