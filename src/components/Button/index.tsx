import Image from "next/image";
import { Container } from "./styles";

interface ButtonProps {
  image?: string;
  onClick?: () => void;
  backgroundColor?: string;
  size?: number;
  children?: any;
}

const Button = ({ image, children, size = 3, ...rest }: ButtonProps) => (
  <Container type="button" size={size} {...rest}>
    {image && <Image src={image} />}
    {children}
  </Container>
);

export default Button;
