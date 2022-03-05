import Image from "next/image";
import { imageDicionary } from "./helper";
import { Container } from "./styles";

interface CategoryCardProps {
  selected?: boolean;
  onClick?: () => void;
}

const CategoryCard = ({ selected, onClick }: CategoryCardProps) => (
  <Container selected={selected} onClick={onClick}>
    <Image src={imageDicionary(selected).PROGRAMING} />
    <h2>Servidores Linux</h2>
    <p>
      <span className={!selected ? "orange" : ""}>5 eventos</span> encontrados
    </p>
  </Container>
);

export default CategoryCard;
