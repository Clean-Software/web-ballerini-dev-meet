import { arrowLeftSVG } from "@assets/index";
import Image from "next/image";
import { Container } from "./styles";

const GoBackButton = () => (
  <Container>
    <Image src={arrowLeftSVG} />
    Voltar
  </Container>
);

export default GoBackButton;
