import Image from "next/image";
import programingDataSVG from "@assets/icons/programing-data.svg";
import { Container } from "./styles";

const CategoryCard = () => (
  <Container>
    <Image src={programingDataSVG} />
    <h2>Servidores Linux</h2>
    <p>5 eventos encontrados</p>
  </Container>
);

export default CategoryCard;
