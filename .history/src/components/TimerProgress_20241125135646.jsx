import { useState } from "react";
import { RiProgress1Fill } from "react-icons/ri";
import styled from "styled-components";

const TimerProgress = () => {
  const [progress, setProgress] = useState(17);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle></InnerCircle>
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
  background: conic-gradient(
    red ${({ progress }) => progress}%,
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
