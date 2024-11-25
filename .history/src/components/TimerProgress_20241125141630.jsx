import { useState } from "react";
import styled from "styled-components";
import Waktu from "./Waktu";

const TimerProgress = () => {
  const [progress, setProgress] = useState(50);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Waktu />
      </InnerCircle>
    </OuterCircle>
  );
};

export default TimerProgress;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;

  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    ${(props) => props.theme.colors.primary} ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;

const InnerCircle = styled.div`
  width: 33rem;
  height: 33rem;
  background: ${(props) => props.theme.colors.secondary};

  border-radius: 50%;
  display: grid;
  place-items: center;
`;
