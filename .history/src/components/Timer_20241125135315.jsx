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
  background: conic-gradient(
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.bg} 150deg,
    ${(props) => props.theme.colors.secondary}
  );

  width: 45rem;
  height: 45rem;
  background: white;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
