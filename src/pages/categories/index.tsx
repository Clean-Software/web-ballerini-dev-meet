import AsideContainer from "@components/AsideContainer";
import Button from "@components/Button";
import { NextPage } from "next";
import { defaultTheme } from "@styles/theme";
import CategoryCard from "@components/CategoryCard";
import { arrowRightWhiteSVG } from "@assets/index";
import { Container, Content, Next } from "./styles";

const Categories: NextPage = () => (
  <Container>
    <AsideContainer
      title="Que tipo de evento você procura ?"
      subtitle="Selecione a categoria que mais te agrada! Lembre-se: Você poderá trocar a categoria a qualquer hora!"
      footer={
        <Next>
          <p>Abrir lista de eventos</p>
          <Button image={arrowRightWhiteSVG} backgroundColor={defaultTheme.palette.semantic.green} size={2} />
        </Next>
      }
    />
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
  </Container>
);

export default Categories;
