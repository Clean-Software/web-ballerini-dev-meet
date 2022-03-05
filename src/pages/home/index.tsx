import { arrowRightWhiteSVG, personSVG } from "@assets/index";
import Button from "@components/Button";
import { defaultTheme } from "@styles/theme";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Content, ContentTitle, Next } from "./styles";

const Home: NextPage = () => (
  <Container>
    <ContentTitle>
      <h1>
        Ola, Dev <span className="orange">!</span>
      </h1>
      <p>
        Encontre o seu <span>próximo</span> evento de programação no Dev Meet, a plataforma ideal para Devs!
      </p>
    </ContentTitle>
    <Content>
      <Image src={personSVG} />
    </Content>
    <Next>
      <p>Vamos lá</p>
      <Link href="/categories">
        <Button image={arrowRightWhiteSVG} backgroundColor={defaultTheme.palette.primary.orange} />
      </Link>
    </Next>
  </Container>
);

export default Home;
