import { logoSVG } from "@assets/index";
import GoBackButton from "@components/GoBackButton";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { ChildrenContainer, Container, Content, Footer } from "./styles";

interface AsideContainerProps {
  title?: string;
  subtitle?: string;
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
}

const AsideContainer = ({ header, title, subtitle, children, footer }: AsideContainerProps) => {
  const [screenWidth, setScreenWidth] = useState(1000);
  const isMobile = screenWidth < 834;
  const childrenContainer = (
    <ChildrenContainer>
      {!isMobile && <GoBackButton />}
      {children}
    </ChildrenContainer>
  );

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  return (
    <>
      <Container>
        {!isMobile && <Image src={logoSVG} />}
        {isMobile && <GoBackButton />}
        {header}
        <Content>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Content>
        {isMobile && childrenContainer}
        <Footer>{footer}</Footer>
      </Container>
      {!isMobile && childrenContainer}
    </>
  );
};

export default AsideContainer;
