import { useEffect, useContext } from "react";
import styled from "styled-components";
import { StateContext } from "./StateProvider";

const Waktu = () => {
  const { time, setTime, isActive, setIsActive, initialWaktu } =
    useContext(StateContext);
  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const buttonClick = () => {
    setIsActive(!isActive);
  };

  const buttonReset = () => {
    setTime(initialWaktu);
    isActive(false);
  };

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={buttonClick}>
        {isActive ? "Pause" : "Start"}
      </StartPauseButton>
      {time === 0 && <ResetButton onClick={buttonReset}>RESET</ResetButton>}
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
  text-transform: uppercase;
  letter-spacing: 1rem;
`;

const ResetButton = styled(StartPauseButton)`
  color: red;
`;
