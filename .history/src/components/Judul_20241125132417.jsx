import styled from "styled-components";

const Judul = () => {
  return (
    <JudulContainer>
      {["Kerja", "Peregangan", "Istirahat"].map((tag, i) => (
        <Tag key={i}>{tag}</Tag>
      ))}
    </JudulContainer>
  );
};

export default Judul;

const JudulContainer = styled.div`
  background: ${(props) => props.theme.colors.bg};
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
  background: ${(props) => props.theme.colors.primary};
`;
