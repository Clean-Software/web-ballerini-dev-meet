import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: ${(props) => props.theme.palette.primary.white};
  color: ${(props) => props.theme.palette.primary.black};
  border-radius: 0.75rem;
  padding: 2rem;
  cursor: pointer;
  width: 100%;

  .title {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.background};
  }

  .description {
    color: ${(props) => props.theme.palette.gray[400]};
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

export { Container, Footer };
