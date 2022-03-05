import logoSVG from "@assets/LOGO.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { Container, Content, Footer } from "./styles";

interface AsideContainerProps {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

const AsideContainer = ({ header, children, footer }: AsideContainerProps) => (
  <Container>
    <Image src={logoSVG} />
    {header}
    <Content>
      <h1>Que tipo de evento você procura ?</h1>
      <p>Selecione a categoria que mais te agrada! Lembre-se: Você poderá trocar a categoria a qualquer hora!</p>
    </Content>
    {children}
    <Footer>{footer}</Footer>
  </Container>
);

export default AsideContainer;
