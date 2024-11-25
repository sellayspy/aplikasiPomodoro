import styled from "styled-components";

const TimerProgress = () => {
  return (
    <OuterCircle>
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
  background: conic-gradient(red 2%, transparent 2%);
`;

const InnerCircle = styled.div`
  width: 32rem;
  height: 32rem;
  background: #0044ef;

  border-radius: 50%;
  display: grid;
  place-items: center;
`;
