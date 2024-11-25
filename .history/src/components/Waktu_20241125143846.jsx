import { useEffect, useState } from "react";
import styled from "styled-components";

const Waktu = () => {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  const buttonClick = () => {
    setIsActive(!isActive);
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
