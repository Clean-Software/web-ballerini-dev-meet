import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Epilogue", sans-serif;
  gap: 0.75rem;
  color: ${(props) => props.theme.palette.primary.gray};
  font-size: 1.25rem;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    top: 2rem;
  }
`;

export { Container };
