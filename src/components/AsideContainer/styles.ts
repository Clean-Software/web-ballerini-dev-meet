import styled from "styled-components";

const Container = styled.aside`
  padding: 3.5rem 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 6.25rem;
  max-width: 25rem;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    max-width: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2.5rem;

  & h1 {
    font-size: 3.25rem;
    line-height: 4rem;
  }

  & p {
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: ${(props) => props.theme.palette.primary.gray};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;

    & h1 {
      font-size: 2.5rem;
    }
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 2.5rem;
  left: 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export { Container, Content, Footer };
