import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 32%;
  gap: 1rem;
  background-color: ${(props) => props.theme.palette.primary.white};
  color: ${(props) => props.theme.palette.primary.black};
  border-radius: 0.75rem;
  padding: 2rem;
  cursor: pointer;

  p {
    margin-top: 2rem;
  }
`;

export { Container };
