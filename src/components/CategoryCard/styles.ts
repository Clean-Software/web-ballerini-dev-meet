import styled from "styled-components";

interface ContainerProps {
  selected?: boolean;
}

const Container = styled.div<ContainerProps>`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 32%;
  gap: 1rem;
  background-color: ${(props) =>
    props.selected ? props.theme.palette.primary.orange : props.theme.palette.primary.white};
  color: ${(props) => (props.selected ? props.theme.palette.primary.white : props.theme.palette.primary.black)};
  border-radius: 0.75rem;
  padding: 2rem;
  cursor: pointer;

  p {
    margin-top: 2rem;

    span {
      font-weight: bold;
    }
  }
`;

export { Container };
