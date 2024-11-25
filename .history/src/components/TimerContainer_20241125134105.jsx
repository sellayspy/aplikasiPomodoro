import styled from "styled-components";

const TimerContainer = () => {
  return (
    <OuterCircle>
      <InnerCircle></InnerCircle>
    </OuterCircle>
  );
};

export default TimerContainer;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  background: #b34444;
  margin: 2rem auto;
  border-radius: 50%;
`;

const InnerCircle = styled.div`
  width: 32rem;
  height: 32rem;
  background: #004ef;
  margin: 2rem auto;
  border-radius: 50%;
`;
