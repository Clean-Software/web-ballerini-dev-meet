import logoSVG from "@assets/LOGO.svg";
import Image from "next/image";
import { Container } from "./styles";

interface LoadingProps {
  isLoading?: boolean;
  children: any;
}

const Loading = ({ isLoading, children }: LoadingProps) => {
  if (isLoading)
    return (
      <Container>
        <Image src={logoSVG} width={300} height={350} />
      </Container>
    );

  return children;
};

export default Loading;
