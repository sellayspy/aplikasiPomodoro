import styled from "styled-components";

const Waktu = () => {
  return (
    <ClockContainer>
      <TimerText>05:00</TimerText>
    </ClockContainer>
  );
};

export default Waktu;
const ClockContainer = styled.div``;
const TimerText = styled.h3`
  font-size: 10rem;
`;
