import logoSVG from "@assets/LOGO.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { Container, Content, Footer } from "./styles";

interface AsideContainerProps {
  title?: string;
  subtitle?: string;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

const AsideContainer = ({ header, title, subtitle, children, footer }: AsideContainerProps) => (
  <Container>
    <Image src={logoSVG} />
    {header}
    <Content>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Content>
    {children}
    <Footer>{footer}</Footer>
  </Container>
);

export default AsideContainer;
