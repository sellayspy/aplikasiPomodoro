import styled from "styled-components";

const Backdrop = () => {
  return <div>Backdrop</div>;
};

export default Backdrop;

const kBackdroop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
