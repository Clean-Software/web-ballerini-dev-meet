import AsideContainer from "@components/AsideContainer";
import Button from "@components/Button";
import { NextPage } from "next";
import arrowRightWhite from "@assets/icons/arrow-right.svg";
import { defaultTheme } from "@styles/theme";
import CategoryCard from "@components/CategoryCard";
import { Container, Content, Next } from "./styles";

const Categories: NextPage = () => (
  <Container>
    <AsideContainer
      footer={
        <Next>
          <p>Abrir lista de eventos</p>
          <Button image={arrowRightWhite} backgroundColor={defaultTheme.palette.semantic.green} size={2} />
        </Next>
      }
    />
    <Content>
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
      <CategoryCard />
    </Content>
  </Container>
);

export default Categories;
