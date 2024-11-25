import styled from "styled-components";

const Waktu = () => {
  return (
    <ClockContainer>
      <TimerText>05:00</TimerText>
      <StartPauseButton>Pause</StartPauseButton>
    </ClockContainer>
  );
};

export default Waktu;
const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;

const TimerText = styled.h3`
  font-size: 10rem;
`;

const StartPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 3rem;
`;
