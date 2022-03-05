import logoSVG from "@assets/LOGO.svg";
import patternSVG from "@assets/pattern.svg";
import Image from "next/image";
import { Container, Pattern } from "./styles";

interface LoadingProps {
  isLoading?: boolean;
  children: any;
}

const Loading = ({ isLoading, children }: LoadingProps) => {
  if (isLoading)
    return (
      <Container>
        <Pattern initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Image src={patternSVG} />
        </Pattern>
        <Image src={logoSVG} width={300} height={350} />
        <h1>Carregando...</h1>
      </Container>
    );

  return children;
};

export default Loading;
