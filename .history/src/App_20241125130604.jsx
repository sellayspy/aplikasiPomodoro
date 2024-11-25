import styled from "styled-components";
import Judul from "./components/Judul";

function App() {
  return (
    <>
      <Title>Aplikasi Pomodoro</Title>
      <Judul />
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;
