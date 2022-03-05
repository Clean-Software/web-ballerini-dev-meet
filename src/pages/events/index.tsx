import AsideContainer from "@components/AsideContainer";
import { NextPage } from "next";
import EventCard from "@components/EventCard";
import { Container, Content } from "./styles";

const Events: NextPage = () => (
  <Container>
    <AsideContainer
      title="Eventos disponíveis!"
      subtitle="Selecione o evento desejado. E espere sua data! Lembre-se os eventos podem mudar sem aviso prévio."
    >
      <Content>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Content>
    </AsideContainer>
  </Container>
);

export default Events;
