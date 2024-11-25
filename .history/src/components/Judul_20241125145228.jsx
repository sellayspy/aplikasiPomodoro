import styled, { css } from "styled-components";
import { useContext } from "react";

const Judul = () => {
  const [active, setActive] = useContext(StateContext);

  const handleJudulClick = (index) => {
    setActive(index);
  };
  return (
    <JudulContainer>
      {["Kerja", "Peregangan", "Istirahat"].map((tag, i) => (
        <Tag onClick={() => handleJudulClick(i)} active={active === i} key={i}>
          {tag}
        </Tag>
      ))}
    </JudulContainer>
  );
};

export default Judul;

const JudulContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Tag = styled.button`
  all: unset;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;
  flex: 1;
  font-size: 2rem;

  ${({ active }) =>
    active &&
    css`
      background: ${(props) => props.theme.colors.primary};
    `}
`;
