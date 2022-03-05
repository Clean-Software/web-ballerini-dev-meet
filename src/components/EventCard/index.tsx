import { arrowRightOrangeSVG } from "@assets/index";
import Image from "next/image";
import { Container, Footer } from "./styles";

interface EventCardProps {
  onClick?: () => void;
}

const EventCard = ({ onClick }: EventCardProps) => (
  <Container onClick={onClick}>
    <p className="orange title">
      <strong>02/MAR</strong> - 19:00
    </p>
    <h2>Servidores Linux</h2>
    <p className="description">
      Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus
      plugins.
    </p>
    <Footer>
      <p>
        Organizado por: <strong>Comunidade Ballerini</strong>
      </p>
      <Image src={arrowRightOrangeSVG} />
    </Footer>
  </Container>
);

export default EventCard;
