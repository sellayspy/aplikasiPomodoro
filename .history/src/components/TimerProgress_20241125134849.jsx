import { useState } from "react";
import styled from "styled-components";

const TimerProgress = () => {
  const [progress, setProgress] = useState(0);

  return (
    <OuterCircle>
      <InnerCircle progress={progress}></InnerCircle>
    </OuterCircle>
  );
};

export default TimerProgress;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  background: #b34444;

  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(red ${({progress}) => RiProgress1Fill}%, transparent ${({progress}) => RiProgress1Fill}%);
`;

const InnerCircle = styled.div`
  width: 32rem;
  height: 32rem;
  background: white;

  border-radius: 50%;
  display: grid;
  place-items: center;
`;
