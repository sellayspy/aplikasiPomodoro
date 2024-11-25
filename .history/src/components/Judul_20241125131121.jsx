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
  background: white;
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
`;

const Tag = styled.button`
  all: unset;
  flex: 1;
  background: #b85600;
`;
