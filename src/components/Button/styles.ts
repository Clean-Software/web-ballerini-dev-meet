import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
  size?: number;
}

const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 1.25rem;
  padding: 1rem;
  transition: opacity 0.2s ease-in-out;

  img {
    width: ${(props) => props.size}rem;
    height: ${(props) => props.size}rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export { Container };
