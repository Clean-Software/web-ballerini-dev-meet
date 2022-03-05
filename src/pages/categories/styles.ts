import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  align-content: flex-start;
  max-height: 50rem;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  flex: 1;

  &::after {
    content: "";
    display: block;
    height: 10rem;
    width: 100%;
    position: sticky;
    bottom: -1px;
    background: linear-gradient(360deg, #282828 0%, rgba(40, 40, 40, 0) 100%);
  }
`;

const Next = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    p {
      display: none;
    }
  }
`;

export { Container, Content, Next };
