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
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const InnerCircle = styled.div`
  width: 32rem;
  height: 32rem;
  background: #0044ef;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
