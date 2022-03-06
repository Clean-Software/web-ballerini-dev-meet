import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.75rem;
  font-family: "Epilogue", sans-serif;
  color: ${(props) => props.theme.palette.primary.orange};

  button {
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  gap: 1rem;
  overflow: auto;
  padding-right: 1rem;

  &::after {
    content: "";
    display: block;
    min-height: 10rem;
    width: 100%;
    position: sticky;
    bottom: -1px;
    background: linear-gradient(360deg, #282828 0%, rgba(40, 40, 40, 0) 100%);
  }
`;

export { Container, Content, Header };
