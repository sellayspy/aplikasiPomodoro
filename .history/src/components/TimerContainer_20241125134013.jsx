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
  width: 45rem;
  height: 45rem;
  background: white;
  margin: 2rem auto;
  border-radius: 50%;
`;

const InnerCircle = styled.div`
  width: 45rem;
  height: 45rem;
  background: white;
  margin: 2rem auto;
  border-radius: 50%;
`;
