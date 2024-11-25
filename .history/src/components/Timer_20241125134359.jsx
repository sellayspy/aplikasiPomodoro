import styled from "styled-components";
import TimerProgress from "./TimerProgress";

const Timer = () => {
  return (
    <TimerContainer>
      <TimerProgress />
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  width: 45rem;
  height: 45rem;
  background: white;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
