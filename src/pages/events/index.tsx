import AsideContainer from "@components/AsideContainer";
import { NextPage } from "next";
import EventCard from "@components/EventCard";
import Button from "@components/Button";
import { programingDataWhiteSVG } from "@assets/index";
import { Container, Content, Header } from "./styles";

const Events: NextPage = () => (
  <Container>
    <AsideContainer
      header={
        <Header>
          <Button image={programingDataWhiteSVG} backgroundColor="rgba(255, 81, 0, 0.2)" size={2} />
          Serveless
        </Header>
      }
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
