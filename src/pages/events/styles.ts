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

const Content = styled.div`
  display: flex;
  flex-direction: column;
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

export { Container, Content };
