import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 4rem;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    padding-top: 2rem;
  }
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  flex: 1;

  h1 {
    font-size: 4rem;

    span {
      color: ${(props) => props.theme.palette.primary.orange};
      font-size: 4.5rem;
    }
  }

  p,
  span {
    font-size: 2rem;
    color: ${(props) => props.theme.palette.primary.gray};
    line-height: 4rem;
    max-width: 40rem;
    word-wrap: break-word;
  }

  p > span {
    background-color: ${(props) => props.theme.palette.primary.orange};
    color: ${(props) => props.theme.palette.primary.white};
    padding: 0.25rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
    flex: 0;

    h1 {
      font-size: 3rem;

      span {
        font-size: 3.5rem;
      }
    }

    p,
    span {
      line-height: 3rem;
      font-size: 1.5rem;
    }
  }
`;

const Content = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 300px;
  }
  @media (max-height: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const Next = styled.div`
  position: absolute;
  bottom: 5.25rem;
  right: 0;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: relative;
    margin-top: 2rem;
    bottom: 1rem;

    p {
      display: none;
    }
  }
`;

export { Container, ContentTitle, Content, Next };
