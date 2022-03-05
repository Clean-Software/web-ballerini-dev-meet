import type { NextPage } from "next";
import Image from "next/image";
import personSVG from "@assets/person.svg";

import Button from "@components/Button";
import arrowRightWhiteSVG from "@assets/icons/arrow-right.svg";
import { defaultTheme } from "@styles/theme";
import Link from "next/link";
import { Container, ContentTitle, Content, Next } from "./styles";

const Home: NextPage = () => (
  <Container>
    <ContentTitle>
      <h1>
        Ola, Dev <span>!</span>
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
      <Link href="/evento">
        <Button image={arrowRightWhiteSVG} backgroundColor={defaultTheme.palette.primary.orange} />
      </Link>
    </Next>
  </Container>
);

export default Home;
