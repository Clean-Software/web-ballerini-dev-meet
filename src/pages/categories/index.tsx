import AsideContainer from "@components/AsideContainer";
import Button from "@components/Button";
import { NextPage } from "next";
import { defaultTheme } from "@styles/theme";
import CategoryCard from "@components/CategoryCard";
import { arrowRightWhiteSVG } from "@assets/index";
import Link from "next/link";
import { Container, Content, Next } from "./styles";

const Categories: NextPage = () => (
  <Container>
    <AsideContainer
      title="Que tipo de evento você procura ?"
      subtitle="Selecione a categoria que mais te agrada! Lembre-se: Você poderá trocar a categoria a qualquer hora!"
      footer={
        <Link href="/events">
          <Next>
            <p>Abrir lista de eventos</p>
            <Button image={arrowRightWhiteSVG} backgroundColor={defaultTheme.palette.semantic.green} size={2} />
          </Next>
        </Link>
      }
    >
      <Content>
        <CategoryCard selected />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Content>
    </AsideContainer>
  </Container>
);

export default Categories;
